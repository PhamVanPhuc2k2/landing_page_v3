#!/usr/bin/env python3
"""Gộp landing page thành 1 file HTML duy nhất (CSS + JS nhúng sẵn) để upload vào hệ thống templates.

    python3 scripts/build_single.py            # -> dist/landing-page.html

Đọc index.html, thay:
  <link rel="stylesheet" href="./css/...">  -> <style>...</style>
  <script src="./js/..."></script>          -> <script>...</script>
Giữ nguyên link ngoài: font Google, ảnh bài viết (CDN Dân Việt), API năm 2026.
Chạy lại script này mỗi khi sửa giao diện (SCSS -> css/style.css) hoặc nội dung (js/data.js).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "index.html"
OUT = ROOT / "dist" / "landing-page.html"


def local_file(href):
    """'./css/style.css?v=123' -> Path tới file trong dự án (bỏ query ?v=)."""
    return ROOT / href.split("?", 1)[0].lstrip("./")


def inline_css(match):
    path = local_file(match.group(1))
    css = path.read_text(encoding="utf-8")
    return f"<style>\n/* {path.relative_to(ROOT)} */\n{css}\n</style>"


def inline_js(match):
    path = local_file(match.group(1))
    js = path.read_text(encoding="utf-8")
    # Chuỗi "</" trong JS có thể đóng nhầm thẻ <script>; "<\/" tương đương trong JS
    js = js.replace("</", "<\\/")
    return f"<script>\n/* {path.relative_to(ROOT)} */\n{js}\n</script>"


def main():
    html = SRC.read_text(encoding="utf-8")
    html, n_css = re.subn(r'<link rel="stylesheet" href="(\./[^"]+)"\s*/?>', inline_css, html)
    html, n_js = re.subn(r'<script src="(\./[^"]+)"></script>', inline_js, html)
    # Comment ghi chú về ?v= không còn ý nghĩa trong bản 1 file
    html = re.sub(r"\s*<!-- \?v=\.\.\.:[^>]*-->", "", html)

    leftovers = [x for x in re.findall(r'(?:href|src)="\./[^"]+"', html) if "./images/" not in x]
    if leftovers:
        sys.exit(f"Còn tham chiếu file cục bộ chưa nhúng: {leftovers}")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(html, encoding="utf-8")
    print(f"Đã nhúng {n_css} file CSS, {n_js} file JS -> {OUT.relative_to(ROOT)} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
