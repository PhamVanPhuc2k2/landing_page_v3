#!/usr/bin/env python3
"""Tạo js/data.js từ data/events.json. CHẠY TAY khi sửa nội dung, không cần cron.

Mỗi hội nghị (`events`) ứng với 1 chủ đề (channel) trên CMS Dân Việt, mã ở trường `id`.
- Trình duyệt người xem gọi trực tiếp API  https://danviet.vn/api/chu-de/<id>  (trang 2: /p2 ...)
  nên bài mới đăng vào chủ đề sẽ hiện ngay. Danh sách bài trong data.js chỉ là bản DỰ PHÒNG.
- `--refresh` : gọi API, chụp lại toàn bộ bài làm bản dự phòng; đồng thời tự lấy
  ảnh bìa (ảnh bài đầu tiên có ảnh) và link chuyên trang nếu events.json để trống.

    python3 scripts/build_data.py            # sau khi sửa data/events.json
    python3 scripts/build_data.py --refresh  # lấy lại bài từ API

Biến môi trường OUTPUT_DIR: thư mục web, ghi {OUTPUT_DIR}/js/data.js (mặc định: thư mục dự án).
Chỉ dùng thư viện chuẩn của Python.
"""
import json
import os
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EVENTS_JSON = ROOT / "data" / "events.json"
DATA_JS = Path(os.environ.get("OUTPUT_DIR") or ROOT) / "js" / "data.js"
UA = {"User-Agent": "Mozilla/5.0 (landing-page build)"}


def write_atomic(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=path.parent, prefix=f".{path.name}.", suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(text)
        os.chmod(tmp, 0o644)
        os.replace(tmp, path)
    except BaseException:
        if os.path.exists(tmp):
            os.remove(tmp)
        raise


def load_previous():
    if not DATA_JS.exists():
        return {}
    s = DATA_JS.read_text(encoding="utf-8")
    k = "window.EVENTS = "
    if k not in s:
        return {}
    return {e["id"]: e for e in json.loads(s[s.index(k) + len(k):].rstrip().rstrip(";"))}


def api_url(cid, n=1):
    base = f"https://danviet.vn/api/chu-de/{cid}"
    return base if n == 1 else f"{base}/p{n}"


def fetch_channel(cid):
    """Lấy toàn bộ bài của 1 chủ đề (20 bài/trang). Trả về (thông tin channel, danh sách bài)."""
    items, page, total_pages, channel = [], 1, 1, {}
    while page <= total_pages and page <= 50:
        req = urllib.request.Request(api_url(cid, page), headers=UA)
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode("utf-8"))
        if not data.get("success"):
            raise RuntimeError(str(data)[:200])
        channel = data.get("channel") or channel
        total_pages = int(data.get("total_pages") or 0)
        for a in data.get("data") or []:
            items.append({"id": str(a["id"]), "title": a["title"].strip(), "url": a["link"],
                          "img": a.get("image") or "", "sapo": a.get("sapo") or "",
                          "date": (a.get("push_date") or "")[:10]})
        page += 1
        time.sleep(1.0)  # CMS có giới hạn tốc độ (Cloudflare 1015) — đừng gọi dồn dập
    return channel, items


def main():
    refresh = "--refresh" in sys.argv[1:]
    cfg = json.loads(EVENTS_JSON.read_text(encoding="utf-8"))
    previous = load_previous()
    events = []

    for meta in cfg["events"]:
        cid = meta.get("id") or ""
        prev = previous.get(cid) or {}
        articles = prev.get("articles", [])
        channel_link = prev.get("link", "")
        if refresh and cid:
            try:
                channel, fresh = fetch_channel(cid)
                if fresh:
                    articles = fresh
                channel_link = channel.get("link") or channel_link
            except Exception as e:
                print(f"[{meta['year']}/{cid}] ! không gọi được API ({e}) -> giữ {len(articles)} bài dự phòng")

        ev = dict(meta)
        ev["api"] = api_url(cid) if cid else ""
        ev["articles"] = articles
        ev["articleCount"] = len(articles)
        if not ev.get("link"):
            ev["link"] = channel_link
        if not ev.get("cover"):
            ev["cover"] = next((a["img"] for a in articles if a.get("img")), "")
        ev["stats"] = [dict(s, value=len(articles)) if s["value"] == "$count" else s for s in meta["stats"]]
        print(f"[{meta['year']}/{cid or '-'}] {len(articles)} bài")
        events.append(ev)

    header = (
        "/**\n"
        " * TỰ ĐỘNG TẠO bởi scripts/build_data.py — không sửa tay file này.\n"
        " * Sửa nội dung ở data/events.json rồi chạy lại script.\n"
        " * `api`: trình duyệt lấy bài trực tiếp từ CMS Dân Việt; `articles` là bản dự phòng.\n"
        " */\n"
    )
    out = (header + "window.SITE = " + json.dumps(cfg["site"], ensure_ascii=False, indent=4) + ";\n\n"
           + "window.EVENTS = " + json.dumps(events, ensure_ascii=False, indent=2) + ";\n")
    write_atomic(DATA_JS, out)
    print(f"Đã ghi {DATA_JS}")


if __name__ == "__main__":
    main()
