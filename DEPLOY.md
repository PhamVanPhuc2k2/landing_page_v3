# Landing page "Thủ tướng đối thoại với nông dân (2019 – 2025)"

Web tĩnh. Upload: index.html, css/style.css, js/main.js, js/data.js, images/hoi-nghi-2025.png
(hoặc dist/landing-page.html + thư mục images/).

Mã chủ đề Dân Việt: 2025=3036, 2024=2919, 2023=2912 (chủ đề 2813 chỉ có 1 bài), 2022=2697, 2020=2258, 2019=2051.
Bài do trình duyệt gọi https://danviet.vn/api/chu-de/<id>; js/data.js là bản dự phòng.
Sửa nội dung: data/events.json -> python3 scripts/build_data.py [--refresh] -> python3 scripts/build_single.py
