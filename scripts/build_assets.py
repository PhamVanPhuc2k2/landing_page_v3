#!/usr/bin/env python3
"""Gộp nguồn nhỏ trong src/ thành đúng 2 file mà trang tải:
    src/css/*.css  ->  css/style.css   (theo thứ tự số ở đầu tên file; file sau ghi đè file trước)
    src/js/*.js    ->  js/main.js      (theo thứ tự cố định bên dưới)

Chạy lại sau mỗi lần sửa file trong src/ (scripts/build_data.py tự gọi script này).
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JS_ORDER = ["intro", "data", "utils", "render", "api", "press", "effects", "main"]


def concat(files, out, label):
    parts = []
    for f in files:
        parts.append(f"/* ===== {f.relative_to(ROOT)} ===== */\n" + f.read_text(encoding="utf-8").rstrip() + "\n")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(f"/* TỰ ĐỘNG TẠO bởi scripts/build_assets.py — sửa trong src/, không sửa tay file này */\n\n" + "\n".join(parts), encoding="utf-8")
    print(f"{label}: {len(files)} file -> {out.relative_to(ROOT)} ({out.stat().st_size / 1024:.0f} KB)")


def main():
    css = sorted((ROOT / "src" / "css").glob("*.css"))
    js = [ROOT / "src" / "js" / f"{n}.js" for n in JS_ORDER]
    missing = [str(p) for p in js if not p.exists()]
    if missing:
        raise SystemExit(f"Thiếu file JS: {missing}")
    concat(css, ROOT / "css" / "style.css", "CSS")
    concat(js, ROOT / "js" / "main.js", "JS ")


if __name__ == "__main__":
    main()
