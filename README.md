# Landing page "Thủ tướng đối thoại với nông dân"

## File nào là file chính?

| File | Vai trò |
|---|---|
| **`index.html`** | ★ **FILE CHÍNH** — trang web. Upload file này cùng `css/`, `js/`, `images/`. |
| `css/style.css`, `js/main.js` | Hai file tải kèm `index.html` (tự tạo từ `src/`, đừng sửa tay). |
| `images/hoi-nghi-2025.png` | Ảnh Hội nghị 2025. |
| `dist/landing-page.html` | Bản gộp 1 file (nhúng sẵn CSS + JS) cho hệ thống chỉ nhận 1 file HTML. Tự tạo, **không sửa tay**. Cần kèm `dist/images/`. |

## Muốn sửa thì sửa ở đâu?

| Muốn sửa | Sửa file | Rồi chạy |
|---|---|---|
| Nội dung từng kỳ Hội nghị (ngày, địa điểm, tóm tắt, số liệu) | `data/events.json` | `python3 scripts/build_data.py` |
| Lấy lại bài mới từ Dân Việt làm bản dự phòng | — | `python3 scripts/build_data.py --refresh` |
| Chữ/khung trang (hero, số liệu, chân trang…) | `index.html` | `python3 scripts/build_single.py` |
| Giao diện | `src/css/*.css` | `python3 scripts/build_assets.py` |
| Chức năng/hiệu ứng | `src/js/*.js` | `python3 scripts/build_assets.py` |
| Bản gộp 1 file | — | `python3 scripts/build_single.py` |

Mã chủ đề Dân Việt: 2018=1378 (chỉ lấy bài 2018), 2019=2051, 2020=2258, 2022=2697, 2023=2912, 2024=2919, 2025=3036.
Bài do trình duyệt gọi `https://danviet.vn/api/chu-de/<id>`; `src/js/data.js` là bản dự phòng.

## Đưa lên CMS Dân Việt (giống các landing mẫu)

`python3 scripts/build_assets.py && python3 scripts/build_release.py` tạo thư mục `release/`:

| File | Đặt ở đâu |
|---|---|
| `release/index.html` | Dán/upload vào CMS (mục Landing) |
| `release/style.css` | `templates/themes/landing/thu_tuong_doi_thoai_nong_dan/style.css` |
| `release/landing.js` | `templates/themes/landing/thu_tuong_doi_thoai_nong_dan/landing.js` |

HTML gọi hai file trên bằng `https://danviet.vn/templates/themes/landing/thu_tuong_doi_thoai_nong_dan/...?v=<VERSION>`.
Nginx cache file tĩnh 1 năm: mỗi lần cập nhật CSS/JS phải đổi `VERSION` trong `scripts/build_release.py` rồi build lại.
