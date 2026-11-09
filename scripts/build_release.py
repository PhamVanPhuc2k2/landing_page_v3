#!/usr/bin/env python3
"""Tạo thư mục release/ chỉ gồm 3 file để đưa lên hệ thống:
    release/index.html  -> HTML (không có <link> CSS / <script> JS)
    release/style.css   -> toàn bộ CSS (đã có @import font Google ở đầu)
    release/landing.js  -> toàn bộ JS + dữ liệu + ảnh Hội nghị 2025 (nhúng base64, đã nén)

Giống các landing mẫu trong CMS Dân Việt (templates/themes/landing/<thư mục>/style.css + landing.js):
HTML gọi 2 file này bằng đường dẫn tuyệt đối. Đổi THEME_DIR / VERSION bên dưới khi cần.
Chạy sau scripts/build_assets.py:  python3 scripts/build_release.py
"""
import base64
import io
import re
from pathlib import Path

from PIL import Image  # pip install pillow

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "release"
IMG = "./images/hoi-nghi-2025.png"
THEME_DIR = "thu_tuong_doi_thoai_nong_dan"
ASSET_BASE = f"https://danviet.vn/templates/themes/landing/{THEME_DIR}"
VERSION = "20261109-1"  # ĐỔI mỗi lần cập nhật CSS/JS (nginx cache file tĩnh 1 năm)
FONT_URL = ("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800"
            "&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700;1,800&display=swap")
PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="


def image_data_uri():
    im = Image.open(ROOT / IMG[2:]).convert("RGB")
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=82, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


def main():
    OUT.mkdir(exist_ok=True)

    html = (ROOT / "index.html").read_text(encoding="utf-8")
    html = re.sub(r"<!-- ★ FILE CHÍNH[^>]*-->\n", "", html)
    html = re.sub(r"\s*<!-- \?v=[^>]*-->", "", html)
    html = re.sub(r'\s*<link rel="stylesheet" href="\./css/[^"]+"\s*/?>', "", html)
    html = re.sub(r'\s*<link href="https://fonts\.googleapis\.com/css2[^"]*" rel="stylesheet">', "", html)
    html = re.sub(r'\s*<script src="\./js/[^"]+"[^>]*></script>', "", html)
    html = html.replace(f'src="{IMG}"', f'src="{PLACEHOLDER}"')  # JS gắn ảnh thật khi chạy
    assert "./css/" not in html and "./js/" not in html and IMG not in html
    tags = (f'<link rel="stylesheet" href="{ASSET_BASE}/style.css?v={VERSION}" />\n'
            f'        <script src="{ASSET_BASE}/landing.js?v={VERSION}" defer></script>\n    ')
    html = html.replace("</head>", tags + "</head>", 1)
    (OUT / "index.html").write_text(html, encoding="utf-8")

    css = (ROOT / "css" / "style.css").read_text(encoding="utf-8")
    css = f'@import url("{FONT_URL}");\n' + css
    (OUT / "style.css").write_text(css, encoding="utf-8")

    js = (ROOT / "js" / "main.js").read_text(encoding="utf-8")
    assert IMG in js
    js = js.replace(IMG, image_data_uri())
    (OUT / "landing.js").write_text(js, encoding="utf-8")

    for f in sorted(OUT.iterdir()):
        print(f"{f.relative_to(ROOT)}  {f.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    main()
