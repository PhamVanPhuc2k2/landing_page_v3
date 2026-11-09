/* TỰ ĐỘNG TẠO bởi scripts/build_assets.py — sửa trong src/, không sửa tay file này */

/* ===== src/js/intro.js ===== */
/* Bật màn mở đầu 1 lần/phiên (chạy sớm trong <head>, bỏ qua nếu giảm chuyển động hoặc có ?nointro) */
try {
    if (!sessionStorage.getItem("ttdt-intro") && location.search.indexOf("nointro") === -1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.classList.add("has-intro");
    }
} catch (e) {}

/* ===== src/js/data.js ===== */
/**
 * TỰ ĐỘNG TẠO bởi scripts/build_data.py — không sửa tay file này.
 * Sửa nội dung ở data/events.json rồi chạy lại script.
 * `api`: trình duyệt lấy bài trực tiếp từ CMS Dân Việt; `articles` là bản dự phòng.
 */
window.SITE = {
    "kicker": "Lưu trữ truyền thông",
    "title": "Thủ tướng\nđối thoại với nông dân",
    "desc": "Hành trình bảy lần tổ chức Hội nghị, nơi người đứng đầu Chính phủ ngồi lại, trực tiếp lắng nghe nông dân, hợp tác xã, doanh nghiệp nêu kiến nghị và giải đáp tại chỗ — được ghi lại qua loạt bài tư liệu trên Báo Điện tử Dân Việt."
};

window.EVENTS = [
  {
    "year": 2025,
    "id": "3036",
    "ordinal": "Lần thứ 7",
    "pm": "Thủ tướng Phạm Minh Chính",
    "date": "Tháng 12/2025",
    "location": "Hà Nội",
    "theme": "Ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong nông dân",
    "title": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025",
    "cover": "./images/hoi-nghi-2025.png",
    "summary": "Hội nghị diễn ra tại Hà Nội với chủ đề “Ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong nông dân”. Trước hội nghị, hơn 5.000 ý kiến của nông dân đã được gửi về qua Báo Điện tử Dân Việt.",
    "stats": [
      {
        "value": 100,
        "suffix": "+",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-nam-2025-channel3036/",
    "api": "https://danviet.vn/api/chu-de/3036",
    "articles": [
      {
        "id": "1412734",
        "title": "Bộ Nông nghiệp và Môi trường triển khai các giải pháp hỗ trợ nông dân sau Hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/bo-nong-nghiep-va-moi-truong-trien-khai-cac-giai-phap-ho-tro-nong-dan-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-d1412734.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/03/24/bo-truong-nong-nghiep-tran-duc-thang-1133.jpg",
        "sapo": "Ủy viên Bộ Chính trị, Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng vừa ký ban hành Công văn số 1927/BNNMT-KTHT về việc triển khai các giải pháp thúc đẩy, hỗ trợ nông dân sau Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025.",
        "date": "2026-03-24"
      },
      {
        "id": "1389521",
        "title": "Thủ tướng: Thực hiện 8 giải pháp xây dựng nền nông nghiệp thịnh vượng, nông thôn hiện đại, nông dân văn minh",
        "url": "https://danviet.vn/thu-tuong-thuc-hien-8-giai-phap-xay-dung-nen-nong-nghiep-thinh-vuong-nong-thon-hien-dai-nong-dan-van-minh-d1389521.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/23/tt1-1716-123836.jpg",
        "sapo": "\"Xác định nông nghiệp, nông dân, nông thôn có vị trí chiến lược lâu dài, là nền tảng quan trọng bảo đảm ổn định kinh tế vĩ mô, tăng trưởng bền vững; coi nông dân là trung tâm, là chủ thể, là động lực, nguồn lực của quá trình đổi mới...\", Thông báo số 710/TB-VPCP ngày 20/12/2025 kết luận của Thủ tướng Chính phủ Phạm Minh Chính tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025 nêu rõ.",
        "date": "2025-12-24"
      },
      {
        "id": "1389597",
        "title": "Thủ tướng giao 10 bộ, ngành, địa phương tập trung xây dựng chính sách đột phá khoa học công nghệ trong nông dân",
        "url": "https://danviet.vn/thu-tuong-giao-10-bo-nganh-dia-phuong-tap-trung-xay-dung-chinh-sach-dot-pha-khoa-hoc-cong-nghe-trong-nong-dan-d1389597.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/23/thu-tuong-1605.jpg",
        "sapo": "Văn phòng Chính phủ vừa ban hành Thông báo số 710/TB-VPCP kết luận của Thủ tướng Chính phủ Phạm Minh Chính tại Hội nghị Thủ tướng đối thoại với nông dân năm 2025. Trong đó, Thủ tướng nhấn mạnh việc ứng dụng khoa học công nghệ và đổi mới sáng tạo là một trong những \"mũi nhọn\" để đưa nông nghiệp Việt Nam bứt phá.",
        "date": "2025-12-24"
      },
      {
        "id": "1389557",
        "title": "Hội NDVN được giao chủ trì, phối hợp với các bộ, cơ quan liên quan tổ chức các hội nghị, diễn đàn đối thoại với nông dân",
        "url": "https://danviet.vn/hoi-ndvn-duoc-giao-chu-tri-phoi-hop-voi-cac-bo-co-quan-lien-quan-to-chuc-cac-hoi-nghi-dien-dan-doi-thoai-voi-nong-dan-d1389557.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/23/toan-canh-4-0919-1441.jpg",
        "sapo": "Thủ tướng Chính phủ đề nghị Hội Nông dân Việt Nam chủ trì, phối hợp với các bộ, cơ quan tổ chức các hội nghị, diễn đàn lắng nghe, đối thoại với nông dân đảm bảo thực chất, hiệu quả để kịp thời tháo gỡ các khó khăn, vướng mắc cho người nông dân theo từng chủ đề, lĩnh vực, địa bàn.",
        "date": "2025-12-23"
      },
      {
        "id": "1389450",
        "title": "Sau Hội nghị đối thoại, Thủ tướng có \"5 đặt hàng\" với nông dân",
        "url": "https://danviet.vn/sau-hoi-nghi-doi-thoai-thu-tuong-co-5-dat-hang-voi-nong-dan-d1389450.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/23/thu-tuong-2-0958-1055.jpg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2025, Văn phòng Chính phủ có Thông báo số 710/TB-VPCP ngày 20/12/2025 kết luận của Thủ tướng Chính phủ Phạm Minh Chính tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025. Thông báo nêu rõ các nhiệm vụ trọng tâm sau Hội nghị đối thoại, trong đó có yêu cầu của Thủ tướng về \"5 đặt hàng\" với nông dân.",
        "date": "2025-12-23"
      },
      {
        "id": "1389324",
        "title": "Thông báo kết luận của Thủ tướng Phạm Minh Chính tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025",
        "url": "https://danviet.vn/thong-bao-ket-luan-cua-thu-tuong-tai-hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nam-2025-d1389324.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/22/173304tt1-1716.jpg",
        "sapo": "Văn phòng Chính phủ có Thông báo số 710/TB-VPCP ngày 20/12/2025 kết luận của Thủ tướng Chính phủ Phạm Minh Chính tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025.",
        "date": "2025-12-22"
      },
      {
        "id": "1387608",
        "title": "Sau Hội nghị Thủ tướng 2025: Phó Thống đốc Nguyễn Ngọc Cảnh giải đáp vấn đề \"nóng\" về vốn cho nông dân",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-2025-pho-thong-doc-nguyen-ngoc-canh-giai-dap-van-de-nong-ve-von-cho-nong-dan-d1387608.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/17/gen-h-z7335033836457_54bd873b4e20936f22cb488c4458d6ea-0929.jpg",
        "sapo": "Ngân hàng Nhà nước Việt Nam đã có văn bản trả lời một số ý kiến của nông dân sau Hội nghị Thủ tướng Chính phủ đối thoại với nông dân 2025. Hội nghị do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/điện tử Dân Việt được giao tổ chức thực hiện.",
        "date": "2025-12-17"
      },
      {
        "id": "1387415",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân, Bộ Tài chính giải đáp khó khăn về vốn đầu tư nông nghiệp công nghệ cao",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-bo-tai-chinh-giai-dap-kho-khan-ve-von-dau-tu-nong-nghiep-cong-nghe-cao-d1387415.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/15/hoi-nghi-thu-tuong-doi-thoai-nong-dan-2145.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2025, Bộ Tài chính đã có văn bản trả lời câu hỏi của các đại biểu nông dân liên quan đến cơ chế chính sách tín dụng dành cho các dự án đầu tư nông nghiệp công nghệ cao, đồng thời có cơ chế, chính sách hình thành các khu công nghiệp dành riêng cho nông nghiệp.",
        "date": "2025-12-16"
      },
      {
        "id": "1387282",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân, 2 Bộ sẽ phối hợp đầu tư tăng cường dự báo mưa lũ, hệ thống truyền tin",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2-bo-se-phoi-hop-dau-tu-tang-cuong-du-bao-mua-lu-he-thong-truyen-tin-d1387282.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/15/151248tt-1512.jpg",
        "sapo": "Gửi câu hỏi, kiến nghị đến Hội nghị Thủ tướng đối thoại với nông dân Việt Nam năm 2025, nhiều nông dân bày tỏ mong muốn Chính phủ và các bộ ngành đầu tư tăng cường dự báo mưa lũ, cảnh báo sớm và hệ thống truyền tin cho người dân, trong bối cảnh biến đổi khí hậu và thiên tai ngày càng phức tạp.",
        "date": "2025-12-15"
      },
      {
        "id": "1387309",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân, Bộ NN&MT đề xuất doanh nghiệp, HTX thành đơn vị hấp thụ công nghệ chính",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-bo-nnmt-de-xuat-doanh-nghiep-htx-thanh-don-vi-hap-thu-cong-nghe-chinh-d1387309.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/15/bo-truong-tran-duc-thang-1-0941-1616.jpg",
        "sapo": "Trong hơn 5.000 ý kiến gửi về Hội nghị Thủ tướng đối thoại với nông dân năm 2025, nội dung về chuyển giao các thành tựu khoa học công nghệ được nhiều chuyên gia, doanh nghiệp, HTX quan tâm. Hội nghị Thủ tướng Chính phủ đối thoại với nông dân là sự kiện thường niên do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị được giao trực tiếp tổ chức thực hiện.",
        "date": "2025-12-16"
      },
      {
        "id": "1386589",
        "title": "Ngay sau Hội nghị Thủ tướng đối thoại, nông dân xuất sắc được Chủ tịch UBND tỉnh Lạng Sơn gọi điện tháo gỡ khó khăn",
        "url": "https://danviet.vn/ngay-sau-hoi-nghi-thu-tuong-doi-thoai-nong-dan-xuat-sac-duoc-chu-tich-ubnd-tinh-lang-son-goi-dien-thao-go-kho-khan-d1386589.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/12/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-1911.jpg",
        "sapo": "Ngay sau khi Hội nghị Thủ tướng Chính phủ đối thoại với nông dân 2025 kết thúc, chị Vương Thị Thương, Nông dân Việt Nam xuất sắc đến từ tỉnh Lạng Sơn đã nhận được cuộc gọi trực tiếp từ Chủ tịch UBND tỉnh Lạng Sơn về việc giải quyết vấn đề “sóng yếu”, gây khó khăn khi livestream bán nông sản.",
        "date": "2025-12-12"
      },
      {
        "id": "1386221",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân, 2 Bộ sẽ phối hợp ngăn buôn bán thuốc BVTV, cây, con giống giả trên mạng",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2-bo-se-phoi-hop-ngan-buon-ban-thuoc-bvtv-cay-con-giong-gia-tren-mang-d1386221.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/11/image-2-1642.jpg",
        "sapo": "Gửi câu hỏi, kiến nghị đến Hội nghị Thủ tướng đối thoại với nông dân Việt Nam năm 2025, nhiều nông dân bày tỏ lo ngại về tình trạng mua bán các mặt hàng thuốc bảo vệ thực vật (BVTV), giống cây trồng, vật nuôi trên các nền tảng mạng diễn ra phổ biến, song nhiều sản phẩm không đảm bảo chất lượng, không rõ nguồn gốc.",
        "date": "2025-12-12"
      },
      {
        "id": "1386275",
        "title": "Trích 1 USD trên mỗi tấn gạo xuất khẩu: Góp một đồng – Nâng một tầm",
        "url": "https://danviet.vn/trich-1-usd-tren-moi-tan-gao-xuat-khau-gop-mot-dong-nang-mot-tam-d1386275.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/11/172745hoang-trong-thuy--kdt-1727.jpg",
        "sapo": "Đề xuất trích 1 USD/tấn gạo thực chất là cách phân phối lại phần giá trị mà nông dân đã tạo ra. Một tấn gạo xuất khẩu thường mang lại vài trăm USD; lấy 1 USD để hỗ trợ khi cần thiết là hoàn toàn khả thi, hợp lý, công bằng và nhân văn.",
        "date": "2025-12-12"
      },
      {
        "id": "1386159",
        "title": "Trích lại 1 USD cho mỗi tấn gạo xuất khẩu: Nông dân và doanh nghiệp đề xuất cần phân bổ quỹ hợp lý",
        "url": "https://danviet.vn/trich-lai-1-usd-cho-moi-tan-gao-xuat-khau-nong-dan-va-doanh-nghiep-de-xuat-can-phan-bo-quy-hop-ly-d1386159.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/11/1414321-1412.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025 diễn ra sáng 10/12, nội dung về xuất khẩu gạo và các chính sách hỗ trợ nông dân nhận được sự quan tâm rất lớn của các đại biểu. Trong Hội nghị, Hội Nông dân Việt Nam đề xuất, kiến nghị Chính phủ có cơ chế trích lại 1 USD cho mỗi tấn gạo xuất khẩu để hỗ trợ nông dân khi cần thiết. Chia sẻ về đề xuất này, một số nông dân, doanh nghiệp cho rằng nếu triển khai cơ chế, cần xây dựng quy trình quản lý và phân bổ quỹ thật minh bạch, hợp lý",
        "date": "2025-12-11"
      },
      {
        "id": "1386000",
        "title": "Tại Hội nghị Thủ tướng đối thoại với nông dân, BAF kiến nghị 6 cơ chế cho mô hình nuôi lợn trong nhà tầng thông minh",
        "url": "https://danviet.vn/tai-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-baf-kien-nghi-6-co-che-cho-mo-hinh-nuoi-lon-trong-nha-tang-thong-minh-d1386000.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/10/z7311014098330_4ee019749fd87b9dbc4aa448370b038c-2108.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân 2025 diễn ra sáng 10/12, ông Nguyễn Văn Minh, Phó Tổng Giám đốc Công ty CP Nông nghiệp BAF Việt Nam kiến nghị Chính phủ xem xét và hỗ trợ mô hình \"chăn nuôi heo trong nhà cao tầng thông minh\" khép kín từ thức ăn – chăn nuôi - chế biến và trồng trọt với quy mô 64.000 heo nái, cung cung ứng ra thị trường từ 1,6 – 1,8 triệu heo thương phẩm/năm.",
        "date": "2025-12-11"
      },
      {
        "id": "1385805",
        "title": "Thủ tướng: Đồng ý về mặt chủ trương \"trích lại 1 USD\" cho mỗi tấn gạo xuất khẩu để hỗ trợ nông dân",
        "url": "https://danviet.vn/thu-tuong-dong-y-ve-mat-chu-truong-trich-lai-1-usd-cho-moi-tan-gao-xuat-khau-de-ho-tro-nong-dan-d1385805.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/08/xkgao-baodautu-093547.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân diễn ra sáng qua 10/12, đại diện Tập đoàn Intimex và PAN Group đã nêu một số khó khăn trong xuất khẩu gạo hiện nay, nhất là trong bối cảnh 2 thị trường truyền thống là Philippines và Indonesia gặp nhiều trở ngại. Đồng thời, Hội Nông dân Việt Nam cũng đề xuất, kiến nghị Chính phủ có cơ chế trích lại 1 USD cho mỗi tấn gạo xuất khẩu để hỗ trợ nông dân khi cần thiết.",
        "date": "2025-12-11"
      },
      {
        "id": "1385880",
        "title": "Toàn cảnh Hội nghị Thủ tướng đối thoại với nông dân năm 2025",
        "url": "https://danviet.vn/toan-canh-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2025-d1385880.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/10/151933ntnn2306-1515.jpg",
        "sapo": "Sáng nay (10/12) tại trụ sở Chính phủ, Trung ương Hội Nông dân Việt Nam chủ trì, phối hợp với Văn phòng Chính phủ, các Bộ, ngành tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần thứ 7 năm 2025. Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị được giao tổ chức thực hiện.",
        "date": "2025-12-10"
      },
      {
        "id": "1385657",
        "title": "Toàn văn phát biểu của Chủ tịch BCH TƯ Hội NDVN Lương Quốc Đoàn tại Hội nghị Thủ tướng đối thoại với nông dân 2025",
        "url": "https://danviet.vn/toan-van-phat-bieu-cua-chu-tich-bch-tu-hoi-ndvn-luong-quoc-doan-tai-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2025-d1385657.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/10/anh-luong-quoc-doan-1621.jpg",
        "sapo": "Với chủ đề \"Ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số\", Hội nghị Thủ tướng đối thoại với nông dân năm 2025 được kỳ vọng sẽ tạo ra những cú hích chính sách quan trọng. Trong bài phát biểu khai mạc, Chủ tịch Hội Nông dân Việt Nam Lương Quốc Đoàn nhấn mạnh mong muốn của bà con về một nền nông nghiệp xanh, tuần hoàn và các giải pháp căn cơ để ứng phó với biến đổi khí hậu ngày càng gay gắt.",
        "date": "2025-12-10"
      },
      {
        "id": "1385875",
        "title": "Thủ tướng đối thoại với nông dân: Đối thoại dân chủ, thẳng thắn, trách nhiệm, bảo đảm “6 rõ” trong từng nhiệm vụ",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-doi-thoai-dan-chu-thang-than-trach-nhiem-bao-dam-6-ro-trong-tung-nhiem-vu-d1385875.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/10/z7311436913921_ff3943a60094082dad4b315c4f10b514-1501.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, Thủ tướng Phạm Minh Chính đánh giá cao tinh thần dân chủ, thẳng thắn và trách nhiệm của các đại biểu; đồng thời giao Văn phòng Chính phủ phối hợp Hội Nông dân Việt Nam tổng hợp đầy đủ ý kiến, tham mưu ban hành thông báo kết luận theo nguyên tắc “6 rõ”: rõ người, rõ việc, rõ thời gian, rõ trách nhiệm, rõ thẩm quyền và rõ sản phẩm.",
        "date": "2025-12-10"
      },
      {
        "id": "1385867",
        "title": "Thủ tướng Phạm Minh Chính có năm \"đặt hàng\" quan trọng đối với bà con nông dân",
        "url": "https://danviet.vn/thu-tuong-pham-minh-chinh-co-nam-dat-hang-quan-trong-doi-voi-ba-con-nong-dan-d1385867.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/10/150300thu-tuong2-1458.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, Thủ tướng Phạm Minh Chính có 5 \"đặt hàng\" quan trọng đối với bà con nông dân và đề nghị đề nghị các cấp, ngành, địa phương tập trung triển khai 8 nhiệm vụ, giải pháp trọng tâm nhằm xây dựng nền nông nghiệp thịnh vượng, nông thôn hiện đại, nông dân văn minh, làm chủ khoa học, công nghệ.",
        "date": "2025-12-10"
      },
      {
        "id": "1385766",
        "title": "Thủ tướng Chính phủ: Người nông dân là chiến sĩ trên mặt trận nông nghiệp",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-nguoi-nong-dan-la-chien-si-tren-mat-tran-nong-nghiep-d1385766.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/10/2-hoi-nghhi-1006.jpg",
        "sapo": "Phát biểu khai mạc Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, Thủ tướng Phạm Minh Chính nêu rõ, mỗi người nông dân đều là một chiến sĩ trên mặt trận nông nghiệp. Nông dân phải luôn thích ứng với mọi hoàn cảnh, phải chiến đấu và chiến thắng trên mặt trận này.",
        "date": "2025-12-10"
      },
      {
        "id": "1385614",
        "title": "Phóng sự truyền hình: Hội nghị Thủ tướng đối thoại với nông dân năm 2025 và kỳ vọng đột phá vào khoa học công nghệ",
        "url": "https://danviet.vn/dot-pha-khoa-hoc-cong-nghe-chuyen-doi-so-vao-nong-nghiep-nong-thon-dua-nong-dan-buoc-vao-ky-nguyen-vuon-minh-d1385614.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/09/ava-1721.jpg",
        "sapo": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2025 tiếp tục là diễn đàn để đưa tiếng nói của người nông dân đến với Chính phủ, Thủ tướng Chính phủ. Cuộc đối thoại năm nay đặt trọng tâm vào khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số. Hội nghị do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/Dân Việt được giao là đơn vị trực tiếp tổ chức thực hiện.",
        "date": "2025-12-10"
      },
      {
        "id": "1385484",
        "title": "Chủ tịch Hội NDVN: Hội nghị Thủ tướng đối thoại với  nông dân 2025 sẽ bàn về đột phá khoa học công nghệ trong nông nghiệp",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2025-ban-ve-chien-luoc-dot-pha-khoa-hoc-cong-nghe-trong-nong-nghiep-d1385484.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/09/ong-doan-cover-2040.jpg",
        "sapo": "Sáng nay 10/12, tại trụ sở Chính phủ, Trung ương Hội Nông dân Việt Nam chủ trì tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân  lần thứ 7-  năm 2025 với chủ đề: “Ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong nông dân”.  Hội nghị là sự kiện thường niên do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/điện tử Dân Việt được giao là đơn vị trực tiếp tổ chức thực hiện.",
        "date": "2025-12-10"
      },
      {
        "id": "1385683",
        "title": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025: Tám quyết sách lớn để phát triển nông nghiệp, nông thôn",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nam-2025-d1385683.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/10/thu-tuong-0922.jpg",
        "sapo": "Sáng nay (10/12) tại Trụ sở Chính phủ, Trung ương Hội Nông dân Việt Nam chủ trì, phối hợp với Văn phòng Chính phủ, các Bộ, ngành tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2025 (lần thứ 7); Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị được giao tổ chức thực hiện. Phát biểu định hướng và chỉ đạo Hội nghị, Thủ tướng Phạm Minh Chính đã nhấn mạnh: Mỗi người nông dân là một chiến sĩ trên đồng ruộng, mỗi chiến sĩ đều phải thích ứng với mọi hoàn cảnh, chiến đấu đến cù",
        "date": "2025-12-10"
      },
      {
        "id": "1385541",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân 2025: Nông dân xuất sắc đề xuất cơ chế đặc thù cho sản phẩm thảo dược dân tộc",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2025-nong-dan-xuat-sac-de-xuat-co-che-dac-thu-cho-san-pham-thao-duoc-dan-toc-d1385541.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/09/thu-tuong-chinh-phu-2055.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, nhiều Nông dân Việt Nam xuất sắc, Giám đốc HTX tiêu biểu đã đưa ra nhiều kiến nghị quan trọng thúc đẩy liên kết vùng, chuỗi giá trị nhằm phát triển nông nghiệp bền vững và hiệu quả. Hội nghị Thủ tướng Chính phủ đối thoại với nông dân là sự kiện thường niên do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị được giao trực tiếp tổ chức thực hiện.",
        "date": "2025-12-10"
      },
      {
        "id": "1385600",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Người Mảng ở Lai Châu mong chính sách đặc thù trồng dược liệu dưới tán rừng",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nguoi-mang-o-lai-chau-mong-chinh-sach-dac-thu-trong-duoc-lieu-duoi-tan-rung-d1385600.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/09/screenshot_1765271750-1621.png",
        "sapo": "Gửi tâm tư đến Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, bà Đỗ Thị Sinh, Phó Chủ tịch MTTQ, Chủ tịch Hội Nông dân xã Hua Bum, tỉnh Lai Châu kiến nghị: Tăng nguồn làm đường giao thông nông thôn, đường lên các khu sản xuất, đồng bào dân tộc Mảng mong có cơ chế đặc thù giúp trồng dược liệu dưới tán rừng.",
        "date": "2025-12-09"
      },
      {
        "id": "1385638",
        "title": "Sáng ngày 10/12, Thủ tướng Chính phủ Phạm Minh Chính sẽ đối thoại với hàng nghìn nông dân cả nước",
        "url": "https://danviet.vn/sang-ngay-10-12-thu-tuong-chinh-phu-pham-minh-chinh-se-doi-thoai-voi-hang-nghin-nong-dan-ca-nuoc-d1385638.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/09/hoi-nghi-thu-tuong-2025-2054.jpg",
        "sapo": "Sáng ngày 10/12/2025, tại Trụ sở Chính phủ, Trung ương Hội Nông dân Việt Nam sẽ chủ trì, phối hợp với Văn phòng Chính phủ, các Bộ, ngành tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2025 (lần thứ 7); Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị được giao tổ chức thực hiện và tổng hợp, tiếp nhận ý kiến của bà con nông dân trước thềm Hội nghị.",
        "date": "2025-12-09"
      },
      {
        "id": "1385621",
        "title": "5.000 ý kiến nông dân gửi gắm Thủ tướng: Đổi mới để bước vào kỷ nguyên mới",
        "url": "https://danviet.vn/5000-y-kien-nong-dan-gui-gam-thu-tuong-tin-hieu-doi-moi-de-buoc-vao-ky-nguyen-nong-nghiep-moi-d1385621.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/03/le-tho-binh-0726.jpg",
        "sapo": "Hơn 5.000 ý kiến được nông dân cả nước gửi về trước thềm sự kiện Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025 (diễn ra hôm nay, 10/12 tại trụ sở Chính phủ) cho thấy một tín hiệu: Nông dân đang chủ động lên tiếng và Chính phủ thực sự cầu thị lắng nghe.",
        "date": "2025-12-10"
      },
      {
        "id": "1385424",
        "title": "Hơn 5.000 ý kiến \"nóng\" gửi về Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025",
        "url": "https://danviet.vn/hon-5000-y-kien-nong-gui-ve-hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nam-2025-d1385424.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/09/img_2176-0937.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, đã có hơn 5.000 ý kiến  của cán bộ, ngành, hội viên, bà con nông dân và nhân dân gửi đến Chính phủ, Thủ tướng Chính phủ. Hội nghị Thủ tướng Chính phủ đối thoại với nông dân là sự kiện thường niên do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị được giao trực tiếp tổ chức thực hiện.",
        "date": "2025-12-09"
      },
      {
        "id": "1385359",
        "title": "Ý kiến tâm huyết của một nhà khoa học về công nghệ truy xuất nguồn gốc gửi tới Hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/y-kien-tam-huyet-cua-mot-nha-khoa-hoc-ve-cong-nghe-truy-xuat-nguon-goc-gui-toi-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-d1385359.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/08/nha-kh-3-2246.jpg",
        "sapo": "Là một người dành rất nhiều tâm huyết để tạo ra những giải pháp công nghệ để nâng cao giá trị nông sản Việt, Thạc sĩ Phạm Thị Lý, Giám đốc Trung tâm Doanh nghiệp Hội nhập và Phát triển (Hà Nội) đã gửi đến Hội nghị Thủ tướng đối thoại với nông dân năm 2025 những băn khoăn, trăn trở của mình về công nghệ truy xuất nguồn gốc.",
        "date": "2025-12-09"
      },
      {
        "id": "1385309",
        "title": "Thủ tướng Chính phủ đối thoại với nông dân: Nông dân Thái Nguyên đề xuất tăng hỗ trợ bảo hiểm nông nghiệp",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nong-dan-thai-nguyen-de-xuat-tang-ho-tro-bao-hiem-nong-nghiep-d1385309.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/08/12-1657.jpg",
        "sapo": "Gửi tâm tư đến Hội nghị Thủ tướng Chính phủ đối thoại với nông dân, ông Nguyễn Đình Điệp – Phó Chủ tịch thường trực Hội Nông dân tỉnh Thái Nguyên, Trưởng Ban công tác Nông dân kiến nghị cần duy trì và tăng cường chính sách hỗ trợ bảo hiểm trong sản xuất nông nghiệp để giúp nông dân có đủ điều kiện và cơ hội tái thiết sản xuất sau thiên tai.",
        "date": "2025-12-09"
      },
      {
        "id": "1385219",
        "title": "Thủ tướng Chính phủ đối thoại với nông dân 2025: Tạo động lực giúp nông dân ứng dụng khoa học công nghệ, chuyển đổi số",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-2025-tao-dong-luc-giup-nong-dan-ung-dung-khoa-hoc-cong-nghe-chuyen-doi-so-d1385219.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/08/anh-2-hoi-nghi-thu-tuong-1306.jpg",
        "sapo": "Ngày 10/12 tới đây, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025 sẽ được tổ chức Trụ sở Chính phủ. Hội nghị được kỳ vọng tạo động lực giúp nông dân ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số. Hội nghị Thủ tướng Chính phủ đối thoại với nông dân là sự kiện thường niên do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị trực tiếp tổ chức thực hiện.",
        "date": "2025-12-09"
      },
      {
        "id": "1385228",
        "title": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân, nông dân Hà Tĩnh kiến nghị nhiều vấn đề \"nóng\"",
        "url": "https://danviet.vn/truoc-them-hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nong-dan-ha-tinh-kien-nghi-nhieu-van-de-nong-d1385228.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/08/221109z7304884189478_4c8ebd5c3db8768394b8a905dd919de1-1437.jpg",
        "sapo": "Thực hiện chuyển đổi số trong nông nghiệp, nông dân Hà Tĩnh mong muốn ổn định đầu ra cho sản phẩm, tăng khả năng cạnh tranh cho nông sản trên thị trường. Đồng thời, đề xuất các giải pháp hiệu quả để phát triển chuỗi liên kết nông sản tại địa phương.",
        "date": "2025-12-09"
      },
      {
        "id": "1385212",
        "title": "Đề nghị Chính phủ tạo môi trường đầu tư hấp dẫn trong nông nghiệp, thu hút các \"ông lớn\" FDI",
        "url": "https://danviet.vn/de-nghi-chinh-phu-tao-moi-truong-dau-tu-hap-dan-trong-nong-nghiep-thu-hut-cac-ong-lon-fdi-d1385212.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/08/z5411395301167567beae1a56530d8c6620b8d0e819f91-17149509384011768278927-1615.jpg",
        "sapo": "Theo ông Đỗ Hà Nam, Chủ tịch Hiệp hội Lương thực Việt Nam (VFA), nước ta không phải rộng nhất thế giới, cũng không đông dân nhất thế giới, nhưng Việt Nam vẫn trở thành cường quốc xuất khẩu nông sản nhờ cơ chế chính sách thuận lợi về đất đai, mở cửa thị trường... Tuy nhiên, sự tăng trưởng này cũng đang phải đối mặt với những thách thức về phát triển bền vững, an toàn thực phẩm, năng lực cạnh tranh của các doanh nghiệp tư nhân lĩnh vực nông nghiệp...",
        "date": "2025-12-08"
      },
      {
        "id": "1385175",
        "title": "Phó Chủ tịch Quốc hội Lê Minh Hoan chia sẻ trước Hội nghị đối thoại: Từ tri thức đồng ruộng đến nền nông nghiệp tri thức",
        "url": "https://danviet.vn/pho-chu-tich-quoc-hoi-le-minh-hoan-chia-se-them-hoi-nghi-doi-thoai-tu-tri-thuc-dong-ruong-den-nen-nong-nghiep-tri-thuc-d1385175.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/08/102858le-minh-hoan-2183-1903-1028.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025 sẽ diễn ra vào ngày mai 10/12, Phó Chủ tịch Quốc hội Lê Minh Hoan đã có bài viết gửi riêng đến Báo điện tử Dân Việt với tiêu đề \"Từ tri thức đồng ruộng đến nền nông nghiệp tri thức\". Bài viết nói về sự cần thiết phải đổi thay, chuyển biến của nông dân trong thời đại chuyển đổi số, tri thức hóa hiện nay. Báo điện tử Dân Việt xin trân trọng đăng bài viết của đồng chí Lê Minh Hoan.",
        "date": "2025-12-09"
      },
      {
        "id": "1385133",
        "title": "\"Tam nông\" Nghệ An, Tuyên Quang đổi mới nhờ loạt chính sách sau Hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/tam-nong-nghe-an-tuyen-quang-doi-moi-nho-loat-chinh-sach-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-d1385133.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/08/102043101612tuyen-quang-1015.jpg",
        "sapo": "Theo báo cáo của Hội Nông dân tỉnh Nghệ An, Hội Nông dân tỉnh Tuyên Quang, sau Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024, thực hiện chỉ đạo của Thủ tướng Phạm Minh Chính, chính quyền địa phương đã có nhiều chính sách hỗ trợ nông nghiệp, nông dân, nông thôn.",
        "date": "2025-12-08"
      },
      {
        "id": "1385139",
        "title": "Thủ tướng đối thoại với nông dân, chuyên gia nêu 4 giải pháp khoa học công nghệ cho nông nghiệp, nông thôn",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-chuyen-gia-neu-4-giai-phap-khoa-hoc-cong-nghe-cho-nong-nghiep-nong-thon-d1385139.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/11/072707tran-cong-thang-1601-0726.jpeg",
        "sapo": "Chia sẻ về chủ đề: “Ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong nông dân” của Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam 2025, TS.Trần Công Thắng, Viện trưởng Viện Chiến lược, chính sách nông nghiệp và môi trường (Bộ Nông nghiệp và Môi trường) nhấn mạnh vai trò quan trọng của khoa học công nghệ, đổi mới sáng tạo trong thành công của nông nghiệp Việt Nam hiện nay.",
        "date": "2025-12-10"
      },
      {
        "id": "1385114",
        "title": "Báo NTNN/Dân Việt tiếp tục được giao thực hiện Hội nghị Thủ tướng đối thoại với nông dân Việt Nam lần thứ 7- năm 2025",
        "url": "https://danviet.vn/bao-ntnn-dan-viet-tiep-tuc-duoc-giao-thuc-hien-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-viet-nam-lan-thu-7-nam-2025-d1385114.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/08/img4868-1735626523207394525243-1735702279981645125553-0846.jpg",
        "sapo": "Sáng ngày 10/12, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam sẽ được diễn ra với chủ đề: “Ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong nông dân”. Hội nghị là sự kiện thường niên do Trung ương Hội Nông dân Việt Nam chủ trì; Báo Nông thôn Ngày nay/điện tử Dân Việt được giao là đơn vị trực tiếp tổ chức thực hiện.",
        "date": "2025-12-08"
      },
      {
        "id": "1385120",
        "title": "Thủ tướng Chính phủ đối thoại với nông dân: Nông dân Phú Thọ quan tâm tín dụng nông nghiệp, tập trung, tích tụ đất đai",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nong-dan-phu-tho-quan-tam-tin-dung-nong-nghiep-tap-trung-tich-tu-dat-dai-d1385120.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/08/090027img_9647-2111-0900.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, nông dân Phú Thọ đã gửi nhiều câu hỏi, kiến nghị về cơ chế, chính sách hỗ trợ sản xuất nông nghiệp. Trong đó, những câu hỏi về vốn vay tín dụng nông nghiệp, tháo gỡ khó khăn trong tích tụ ruộng đất tiếp tục được nhiều nông dân tỷ phú quan tâm. Hội nghị là sự kiện thường niên do Trung ương Hội Nông dân Việt Nam chủ trì, chỉ đạo; Báo Nông thôn Ngày nay/điện tử Dân Việt là đơn vị trực tiếp tổ chức thực hiện.",
        "date": "2025-12-08"
      },
      {
        "id": "1382995",
        "title": "Thủ tướng Chính phủ đối thoại với nông dân: Mong có chính sách đủ mạnh cho phát triển sản phẩm làng nghề truyền thống",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-mong-co-chinh-sach-cu-the-thiet-thuc-cho-san-pham-lang-nghe-truyen-thong-d1382995.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/30/lang-ren-tien-loc-21-17331569859271616099232-1023.jpg",
        "sapo": "Hội Nông dân tỉnh Thanh Hóa và nông dân làng rèn Tiến Lộc mong muốn Chính phủ tiếp tục quan tâm tháo gỡ khó khăn, hỗ trợ nông dân nâng cao giá trị sản xuất, thúc đẩy nông nghiệp nông thôn phát triển bền vững; đồng thời bảo tồn và phát huy giá trị những làng nghề truyền thống tiêu biểu của Việt Nam.",
        "date": "2025-12-08"
      },
      {
        "id": "1384765",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2024: Ban hành nhiều chính sách quan trọng phục vụ \"tam nông\"",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-ban-hanh-nhieu-chinh-sach-quan-trong-phuc-vu-tam-nong-d1384765.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/07/124503pham-minh-chinh-1240.jpg",
        "sapo": "Thực hiện chỉ đạo của Thủ tướng Phạm Minh Chính tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024, các bộ ngành, địa phương đã ban hành nhiều chính sách, chương trình quan trọng phục vụ \"tam nông\", tạo nền tảng quan trọng để nông nghiệp, nông thôn tiếp tục đạt được nhiều thành tựu. Năm 2025, kỷ lục mới trong xuất khẩu nông lâm thủy sản đã được thiết lập, khi 11 tháng năm 2025, con số xuất khẩu đã đạt 64,01 tỷ USD, vượt con số của cả năm 2024.",
        "date": "2025-12-07"
      },
      {
        "id": "1382835",
        "title": "Thủ tướng Chính phủ sẽ đối thoại với nông dân vào ngày 10/12",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-se-doi-thoai-voi-nong-dan-vao-ngay-10-12-d1382835.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/06/142540thu-tuong-chinh-phu-1441.jpg",
        "sapo": "Dự kiến sáng ngày 10/12, Thủ tướng Chính phủ Phạm Minh Chính sẽ có buổi đối thoại với nông dân Việt Nam, với chủ đề: “Ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong nông dân”. Hội nghị được tổ chức tại Trụ sở Chính phủ, với khoảng 300 đại biểu tham dự trực tiếp và kết nối trực tuyến với 34 điểm cầu tại UBND các tỉnh, thành phố trực thuộc Trung ương.",
        "date": "2025-12-06"
      },
      {
        "id": "1384545",
        "title": "Thủ tướng Chính phủ đối thoại với nông dân Việt Nam: Nông dân mong có giải pháp hiệu quả bảo tồn giống cây trồng đặc sản",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-viet-nam-nong-dan-mong-co-giai-phap-hieu-qua-bao-ton-giong-cay-trong-dac-san-d1384545.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/12/05/img_6312-1533.jpg",
        "sapo": "Anh Giàng Quảng Hà, nông dân trồng cam sành đặc sản ở thôn Vĩnh Sơn, xã Đồng Yên, tỉnh Tuyên Quang chia sẻ nhiều ý kiến tâm huyết về những khó khăn trong việc duy trì, bảo tồn giống, giá cả cho sản phẩm cam sành đặc sản.",
        "date": "2025-12-06"
      },
      {
        "id": "1383912",
        "title": "Thủ tướng Chính phủ đối thoại với nông dân: Nông dân Việt Nam xuất sắc tỉnh Lâm Đồng nêu vấn đề về trồng sầu riêng",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nong-dan-viet-nam-xuat-sac-tinh-lam-dong-neu-van-de-ve-trong-sau-rieng-d1383912.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/03/152057dsc_8607-1509.jpg",
        "sapo": "Ông Nguyễn Thanh Sơn – Nông dân Việt Nam xuất sắc năm 2025 tại Lâm Đồng đã có nhiều kiến nghị liên quan đến việc trồng sầu riêng, xuất khẩu sầu riêng trước thềm Hội nghị Thủ tướng đối thoại với nông dân năm 2025.",
        "date": "2025-12-05"
      },
      {
        "id": "1383066",
        "title": "Hội Nông dân Nghệ An đề xuất với Chính phủ, cần hỗ trợ lãi suất vốn vay, hỗ trợ cây, con giống cho vùng lũ lụt nặng",
        "url": "https://danviet.vn/hoi-nong-dan-nghe-an-de-xuat-voi-chinh-phu-can-ho-tro-lai-suat-von-vay-ho-tro-cay-con-giong-cho-vung-lu-lut-nang-d1383066.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/30/nong-dan-3-1530.jpg",
        "sapo": "Phó chủ tịch Hội Nông dân tỉnh Nghệ An đề nghị Chính phủ tiếp tục quan tâm bố trí nguồn lực hỗ trợ các địa phương chịu thiệt hại nặng nề do thiên tai; có chính sách tín dụng ưu đãi, giãn nợ, khoanh nợ cho nông dân; hỗ trợ giống cây trồng, vật nuôi, vật tư thiết yếu để khôi phục sản xuất.",
        "date": "2025-12-04"
      },
      {
        "id": "1382840",
        "title": "HTX ở Sơn La mong muốn phát triển hạ tầng số, mở rộng liên kết xuất khẩu nông sản",
        "url": "https://danviet.vn/htx-o-son-la-mong-muon-phat-trien-ha-tang-so-mo-rong-lien-ket-xuat-khau-nong-san-d1382840.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/29/z60252572352723a5decc4689a25f29c7327ab4c58ea61-17339731239131873262799-1526.jpg",
        "sapo": "HTX ở Sơn La mong muốn Nhà nước đầu tư phát triển hạ tầng số ở nông thôn như Internet tốc độ cao, hệ thống dữ liệu nông nghiệp vùng; đồng thời kết nối HTX với doanh nghiệp xuất khẩu nhằm gia tăng giá trị nông sản trên thị trường.",
        "date": "2025-12-03"
      },
      {
        "id": "1383171",
        "title": "Nông dân xuất sắc tỉnh Vĩnh Long đề xuất Chính phủ có gói tín dụng đặc thù, đơn giản thủ tục liên quan hợp tác xã",
        "url": "https://danviet.vn/nong-dan-xuat-sac-tinh-vinh-long-de-xuat-chinh-phu-co-goi-tin-dung-dac-thu-don-gian-thu-tuc-lien-quan-hop-tac-xa-d1383171.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/01/nong-dan-xuat-sac-tinh-vinh-long-de-xuat-thu-tuong-trien-khai-goi-tin-dung-dac-thu-thu-tuc-don-gian-cho-hop-tac-xa-0425.png",
        "sapo": "Hợp tác xã Nông nghiệp Long Hiệp (xã Long Hiệp, tỉnh Vĩnh Long) đề xuất Chính phủ, Thủ tướng Chính phủ có gói tín dụng đặc thù hơn nữa trong nông nghiệp, nông dân, nông thôn, thủ tục đơn giản cho các hợp tác xã dễ tiếp cận.",
        "date": "2025-12-03"
      },
      {
        "id": "1383213",
        "title": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam: Làm du lịch trên đất nông nghiệp còn gặp vướng mắc",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-viet-nam-lam-du-lich-tren-dat-nong-nghiep-con-gap-vuong-mac-d1383213.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/01/101831anh-chan-dung-nong-dan-sx-vu-van-quan-0956.jpg",
        "sapo": "Nhiều nông dân làm nông nghiệp xanh, làm du lịch nông nghiệp ở Hải Phòng có các băn khoăn, vướng mắc trong quá trình thực hiện...",
        "date": "2025-12-02"
      },
      {
        "id": "1383205",
        "title": "Thủ tướng đối thoại với nông dân Việt Nam: Kiến nghị đầu tư bài bản về hạ tầng cảnh báo thiên tai",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-viet-nam-kien-nghi-dau-tu-bai-ban-ve-ha-tang-canh-bao-thien-tai-d1383205.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/12/01/0926121-0817-0925.jpg",
        "sapo": "Gửi về Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025, nhiều nông dân Việt Nam xuất sắc năm 2025 đã đề xuất Chính phủ đầu tư mạnh, đầu tư bài bản về hạ tầng cảnh báo thiên tai, hỗ trợ đưa công nghệ cảnh báo đến với nông dân thuận lợi nhất có thể.",
        "date": "2025-12-07"
      },
      {
        "id": "1382773",
        "title": "Chủ tịch Hội Nông dân Tuyên Quang kiến nghị 3 nhóm vấn đề tới Hội nghị Thủ tướng đối thoại với nông dân Việt Nam 2025",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-tuyen-quang-kien-nghi-3-nhom-van-de-toi-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-viet-nam-2025-d1382773.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/29/11-1400.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2025, Chủ tịch Hội Nông dân tỉnh Tuyên Quang-Chu Thị Ngọc Diệp đã đề xuất, kiến nghị 3 nhóm vấn đề quan trọng: Khắc phục hậu quả thiên tai và nâng cao khả năng chống chịu; chính sách đất đai và xây dựng nông thôn mới thông minh; phát triển nông nghiệp xanh và kinh tế tuần hoàn.",
        "date": "2025-12-01"
      },
      {
        "id": "1383033",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân Việt Nam: Vốn đầu tư cho nông nghiệp công nghệ cao chưa đáp ứng nhu cầu",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-viet-nam-von-dau-tu-cho-nong-nghiep-cong-nghe-cao-chua-dap-ung-nhu-cau-d1383033.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/30/htx-kim-long-1205.jpg",
        "sapo": "Nông nghiệp công nghệ cao đòi hỏi vốn đầu tư lớn, tuy nhiên hiện nay chính sách vay vốn theo nông dân TPHCM là chưa đáp ứng được nhu. Những người đứng đầu HTX nông nghiệp lớn ở TPHCM mong muốn có chính sách ưu đãi hơn, giúp nông dân yên tâm sản xuất, mở rộng vùng trồng.",
        "date": "2025-12-01"
      },
      {
        "id": "1382876",
        "title": "Ban Thường vụ Hội Nông dân Đồng Tháp kiến nghị Chính phủ có cơ chế đặc thù xây dựng Trung tâm nông nghiệp trọng điểm",
        "url": "https://danviet.vn/ban-thuong-vu-hoi-nong-dan-dong-thap-kien-nghi-chinh-phu-co-co-che-dac-thu-xay-dung-trung-tam-nong-nghiep-trong-diem-d1382876.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/29/gen-h-z6050142003712_c81f9e73b96cce3ff9f3d9bd284a9a2d-1632.jpg",
        "sapo": "Ban Thường vụ Hội Nông dân tỉnh Đồng Tháp đã gửi văn bản kiến nghị, đề xuất Chính phủ các giải pháp then chốt nhằm tháo gỡ khó khăn, giúp nông dân vững vàng hơn trên hành trình chuyển đổi từ sản xuất nông nghiệp sang kinh tế nông nghiệp bền vững.",
        "date": "2025-11-30"
      },
      {
        "id": "1382753",
        "title": "Báo điện tử Dân Việt mở mục tiếp nhận ý kiến gửi về Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025",
        "url": "https://danviet.vn/bao-dien-tu-dan-viet-mo-muc-tiep-nhan-y-kien-gui-ve-hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nam-2025-d1382753.html",
        "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/29/img4874-17356297504731967649892-1003.jpeg",
        "sapo": "Theo Chương trình công tác hàng năm và kết luận của Thủ tướng Phạm Minh Chính tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024 về việc duy trì các diễn đàn lắng nghe, đối thoại nông dân hàng năm, dự kiến Hội nghị đối thoại lần thứ 7- năm 2025 sẽ được tổ chức trong thời gian tới đây.",
        "date": "2025-11-29"
      }
    ],
    "articleCount": 53
  },
  {
    "year": 2024,
    "id": "2919",
    "ordinal": "Lần thứ 6",
    "pm": "Thủ tướng Phạm Minh Chính",
    "date": "Tháng 12/2024",
    "location": "Hà Nội",
    "theme": "",
    "title": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024",
    "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/2/21/gia-ca-phe-hom-nay-6-16403327080332064606588-16403441025451549161309-17394127457421705959055-17401253404581414029759-0-0-1250-2000-crop-17401255035101581363415.jpeg",
    "summary": "Sau hội nghị, Thủ tướng có văn bản truyền đạt ý kiến chỉ đạo, giao các Bộ, ngành và địa phương triển khai giải pháp hỗ trợ nông dân; Dân Việt theo sát việc thực hiện các kết luận này trong năm 2025.",
    "stats": [
      {
        "value": 100,
        "suffix": "+",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-nam-2024-channel2919/",
    "api": "https://danviet.vn/api/chu-de/2919",
    "articles": [
      {
        "id": "1211922",
        "title": "Thủ tướng yêu cầu Bộ NNPTNT tổng kết, đánh giá đề án thí điểm 5 vùng nguyên liệu nông sản hàng hoá",
        "url": "https://danviet.vn/thu-tuong-yeu-cau-bo-nnptnt-tong-ket-danh-gia-de-an-thi-diem-5-vung-nguyen-lieu-nong-san-20250221164700183-d1211922.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/2/21/gia-ca-phe-hom-nay-6-16403327080332064606588-16403441025451549161309-17394127457421705959055-17401253404581414029759-0-0-1250-2000-crop-17401255035101581363415.jpeg",
        "sapo": "Sau 2 năm thực hiện đề án Thí điểm vùng nguyên liệu nông, lâm sản đạt chuẩn phục vụ tiêu thụ trong nước và xuất khẩu giai đoạn 2022-2025, 5 vùng nguyên liệu đã hình thành ngày càng rõ nét theo hướng không chỉ phát triển về diện tích, mà đặc biệt chú trọng về chất lượng, thu hút nhiều doanh nghiệp tích cực tham gia...",
        "date": "2025-02-23"
      },
      {
        "id": "1211563",
        "title": "6 Bộ, ngành thực hiện giải pháp thúc đẩy, hỗ trợ nông dân sau Hội nghị Thủ tướng đối thoại với nông dân năm 2024",
        "url": "https://danviet.vn/6-bo-nganh-thuc-hien-giai-phap-thuc-day-ho-tro-nong-dan-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-20250219192354015-d1211563.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/2/19/thu-tuong-173562818697420815501-0-0-1250-2000-crop-17356281923181142354525-17399675574171888962090-193-201-438-593-crop-17399675716781727220238.jpg",
        "sapo": "Văn phòng Chính phủ đã ban hành Văn bản số 1311/VPCP-NN ngày 18/2/2025 truyền đạt ý kiến của Thủ tướng Chính phủ về việc thực hiện các giải pháp thúc đẩy, hỗ trợ nông dân sau Hội nghị đối thoại với nông dân năm 2024.",
        "date": "2025-02-19"
      },
      {
        "id": "1211583",
        "title": "Toàn văn văn bản truyền đạt ý kiến của Thủ tướng Chính phủ sau Hội nghị đối thoại với nông dân năm 2024",
        "url": "https://danviet.vn/toan-van-van-ban-truyen-dat-y-kien-cua-thu-tuong-chinh-phu-sau-hoi-nghi-doi-thoai-voi-nong-dan-nam-2024-20250219221843217-d1211583.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/2/19/img4868-17356265416601756603352-1739967333363384741049-28-178-1167-2000-crop-17399782060901480180984.jpg",
        "sapo": "Văn phòng Chính phủ vừa ban hành Văn bản số 1311/VPCP-NN ngày 18/2/2025 truyền đạt ý kiến của Thủ tướng Chính phủ về việc thực hiện các giải pháp thúc đẩy, hỗ trợ nông dân sau Hội nghị đối thoại với nông dân năm 2024.",
        "date": "2025-02-20"
      },
      {
        "id": "1211663",
        "title": "Thủ tướng yêu cầu Chủ tịch UBND cấp tỉnh, thành phố đối thoại với nông dân định kỳ hàng quý, cấp huyện hàng tháng",
        "url": "https://danviet.vn/thu-tuong-yeu-cau-chu-tich-ubnd-cap-tinh-thanh-pho-doi-thoai-voi-nong-dan-dinh-ky-hang-quy-cap-huyen-hang-thang-20250220105658052-d1211663.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/2/20/thu-tuong-doi-thoai-1-17400237729341223331836-45-0-1295-2000-crop-17400241000701780636595.jpg",
        "sapo": "Ngày 18/2/2025, Văn phòng Chính phủ đã ban hành Văn bản số 1311/VPCP-NN về việc thực hiện các giải pháp thúc đẩy, hỗ trợ nông dân sau Hội nghị đối thoại với nông dân năm 2024. Theo đó, Thủ tướng Chính phủ yêu cầu Chủ tịch UBND các tỉnh, thành phố định kỳ đối thoại với nông dân.",
        "date": "2025-02-20"
      },
      {
        "id": "1211666",
        "title": "Thủ tướng Chính phủ đề nghị bộ, ngành phối hợp với Hội Nông dân Việt Nam tổ chức đối thoại với nông dân",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-de-nghi-bo-nganh-phoi-hop-voi-hoi-nong-dan-viet-nam-to-chuc-doi-thoai-voi-nong-dan-20250220110747853-d1211666.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/2/20/thu-tuong-chinh-phu-17400241800741298018520-0-193-1121-1986-crop-17400242026791256729757.jpeg",
        "sapo": "Thủ tướng Chính phủ đề nghị Hội Nông dân Việt Nam chủ trì, phối hợp với các bộ, cơ quan tổ chức các hội nghị, diễn đàn lắng nghe, đối thoại với nông dân đảm bảo thực chất, hiệu quả để kịp thời tháo gỡ các khó khăn, vướng mắc cho người nông dân theo từng chủ đề, lĩnh vực, địa bàn.",
        "date": "2025-02-20"
      },
      {
        "id": "1211741",
        "title": "Thủ tướng yêu cầu các Bộ, ngành, địa phương triển khai giải pháp hỗ trợ nông dân sau Hội nghị Thủ tướng đối thoại 2024",
        "url": "https://danviet.vn/thu-tuong-yeu-cau-cac-bo-nganh-dia-phuong-trien-khai-giai-phap-ho-tro-nong-dan-sau-hoi-nghi-thu-tuong-doi-thoai-2024-20250220162955035-d1211741.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/2/20/img4915-1735623017319797250980-17400433523831217170109-31-0-517-777-crop-1740043355382604920685.jpg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2024, Thủ tướng Chính phủ Phạm Minh Chính đã ra Văn bản số 1311/VPCP-NN, yêu cầu các Bộ, cơ quan và các địa phương khẩn trương triển khai các giải pháp hỗ trợ nông dân, góp phần nâng cao chất lượng cuộc sống và phát triển bền vững ngành nông nghiệp.",
        "date": "2025-02-20"
      },
      {
        "id": "847585",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân năm 2024: 9 vấn đề để phát triển nông nghiệp, nông dân, nông thôn bền vững",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nam-2024-2024123023391254-d847585.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/img4916-1735631939643401888343-0-0-834-1334-crop-17356319741431382626493.jpg",
        "sapo": "Sáng 31/12, Thủ tướng Chính phủ Phạm Minh Chính chủ trì hội nghị đối thoại với nông dân Việt Nam năm 2024. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo, Báo Nông thôn Ngày nay/ Dân Việt  tổ chức thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203997",
        "title": "Từ thông điệp Hội nghị Thủ tướng đối thoại với nông dân, nông dân tự tin bước vào kỷ nguyên mới",
        "url": "https://danviet.vn/tu-thong-diep-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nong-dan-tu-tin-buoc-vao-ky-nguyen-moi-20250104151012963-d1203997.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/1/4/thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-1735977930548254773827-67-0-755-1101-crop-17359779485781700321600.jpg",
        "sapo": "Sau Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, nhiều nông dân, đại biểu tham gia hội nghị bày tỏ niềm vinh dự, xúc động, phấn khởi và sự kỳ vọng, tự tin vươn mình cùng đất nước bước vào kỷ nguyên mới.",
        "date": "2025-01-04"
      },
      {
        "id": "1203468",
        "title": "Bản tin đặc biệt: Thủ tướng đối thoại giúp nông dân vững tin bước vào kỷ nguyên mới",
        "url": "https://danviet.vn/ban-tin-dac-biet-thu-tuong-doi-thoai-giup-nong-dan-vung-tin-buoc-vao-ky-nguyen-moi-20250101122344143-d1203468.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/1/1/sequence-03-00-00-07-08-still010-1735708792730544407234-0-77-1080-1805-crop-17357087966791948708583.jpg",
        "sapo": "Trong ngày đầu năm mới 2025, bản tin chuyên đề đặc biệt trên báo Dân Việt xin dành toàn bộ thời lượng để nhìn lại sự kiện có ý nghĩa chính trị quan trọng - Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024 vừa diễn ra vào sáng qua 31/12.",
        "date": "2025-01-01"
      },
      {
        "id": "1203440",
        "title": "Thủ tướng Chính phủ Phạm Minh Chính đề nghị đối thoại thường xuyên ở các cấp",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-pham-minh-chinh-de-nghi-doi-thoai-thuong-xuyen-o-cac-cap-20250101101613172-d1203440.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/1/1/thu-tuong-4-1735628207315180023938-0-557-1233-2528-crop-1735701330289310578592.jpg",
        "sapo": "Tại Hội nghị Thủ tướng đối thoại với nông dân Việt Nam năm 2024 do Trung ương Hội Nông dân Việt Nam chủ trì, Báo Nông thôn Ngày nay/Dân Việt thực hiện, Thủ tướng Chính phủ Phạm Minh Chính đã đề nghị lãnh đạo các cấp thường xuyên trao đổi, nắm bắt tình hình và tháo gỡ kịp thời những vướng mắc của người dân, đặc biệt là nông dân.",
        "date": "2025-01-01"
      },
      {
        "id": "1203382",
        "title": "Được nông dân mời \"vi hành\", Thủ tướng nhất trí lập đội đặc nhiệm kiểm tra đất nông lâm trường",
        "url": "https://danviet.vn/sau-doi-thoai-voi-nong-dan-thu-tuong-yeu-cau-thanh-lap-doi-dac-nhiem-kiem-tra-hien-trang-dat-nong-lam-truong-20241231203335088-d1203382.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/img4874-17356297504731967649892-1735652155162580639236-0-0-1250-2000-crop-17356523231281794784684.jpeg",
        "sapo": "Từ kiến nghị của nông dân tại Hội nghị đối thoại với nông dân năm 2024, Thủ tướng Chính phủ Phạm Minh Chính đề nghị thành lập đội \"đặc nhiệm\" kiểm tra hiện trạng đất nông lâm trường. Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024 do Trung ương Hội NDVN chỉ đạo, giao Báo NTNN/Dân Việt tổ chức thực hiện.",
        "date": "2025-01-01"
      },
      {
        "id": "1203303",
        "title": "Toàn cảnh Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024",
        "url": "https://danviet.vn/toan-canh-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-20241231133839463-d1203303.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/img4868-17356268006861184412952-0-177-1140-2000-crop-17356271764911687393734.jpg",
        "sapo": "Sáng nay (31/12), Thủ tướng Chính phủ Phạm Minh Chính đã chủ trì hội nghị đối thoại với nông dân Việt Nam lần thứ 6 năm 2024. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo, giao Báo Nông thôn Ngày nay/ Dân Việt tổ chức thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203288",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân 2024: Kỳ vọng vươn mình bước vào kỷ nguyên mới",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2024-ky-vong-vuon-minh-buoc-vao-ky-nguyen-moi-20241231112903664-d1203288.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/tun-tuc-01-55-26-12-still1047-1735619313550788352784-0-43-1080-1771-crop-17356193160881239298074.jpg",
        "sapo": "Hội nghị Thủ tướng đối thoại với nông dân năm 2024 do Trung ương Hội NDVN chủ trì tổ chức, Báo NTNN/Dân Việt trực tiếp thực hiện diễn ra sáng 31/12 tại Trụ sở Chính phủ, được kỳ vọng đem đến cho người nông dân Việt Nam cơ hội để chia sẻ, bày tỏ tâm tư nguyện vọng của mình tới người đứng đầu Chính phủ.",
        "date": "2024-12-31"
      },
      {
        "id": "1203150",
        "title": "Kiến nghị Chính phủ đưa nước ngọt từ sông Tiền về “giải cứu” bà con vùng hạ Long An",
        "url": "https://danviet.vn/dua-nuoc-ngot-song-tien-ve-giai-cuu-ba-con-vung-ha-long-an-20241230143251334-d1203150.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/3nuoc-ngot-17355435969691477376116-0-0-1250-2000-crop-17355440083771347503379.jpg",
        "sapo": "Phó Chủ tịch Hội Nông dân tỉnh Long An Ngô Thanh Tuyền kiến nghị xây dựng hệ thống ống đưa nước ngọt từ sông Tiền về vùng hạ tỉnh Long An hỗ trợ người dân sản xuất và sinh hoạt trong mùa khô trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024, diễn ra ngày 31/12, tại Hà Nội.",
        "date": "2024-12-30"
      },
      {
        "id": "1203347",
        "title": "Video: Nông dân, chuyên gia bày tỏ gì sau Hội nghị Thủ tướng đối thoại với nông dân năm 2024?",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-nong-dan-trao-tam-tu-gui-nguyen-vong-20241231164332315-d1203347.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/dan-dau-pn-00-20-18-04-still001-17356380197991665925522-0-37-1080-1765-crop-17356380281801577143394.jpg",
        "sapo": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024 đã khép lại cùng với rất nhiều vấn đề khó khăn của người nông dân được giải đáp, tháo gỡ. PV Báo NTNN/Dân Việt đã gặp gỡ những đại diện nông dân, HTX và các chuyên gia để lắng nghe những chia sẻ của họ sau khi tham dự Hội nghị.",
        "date": "2024-12-31"
      },
      {
        "id": "1203346",
        "title": "Tại sao Thủ tướng lại nhắc đến concert đình đám \"Anh trai vượt ngàn chông gai\" tại Hội nghị đối thoại với nông dân?",
        "url": "https://danviet.vn/tai-sao-thu-tuong-lai-nhac-den-concert-dinh-dam-anh-trai-vuot-ngan-chong-gai-tai-hoi-nghi-doi-thoai-voi-nong-dan-20241231164204471-d1203346.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/img4870-17356319404242023650141-0-0-1250-2000-crop-17356380531301736032413.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024 do Trung ương Hội Nông dân Việt Nam chủ trì, Báo Nông thôn Ngày nay/Dân Việt tổ chức thực hiện sáng 31/12, Thủ tướng Phạm Minh Chính bất ngờ nhắc đến sự thành công của concert Anh trai vượt ngàn chông gai khi nói về sức mạnh của văn hóa dân tộc.",
        "date": "2024-12-31"
      },
      {
        "id": "1203225",
        "title": "Một năm sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: 12 kết quả nổi bật từ các phong trào Hội",
        "url": "https://danviet.vn/mot-nam-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-12-ket-qua-noi-bat-tu-cac-phong-trao-hoi-20241230225307583-d1203225.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/img8870-1703942827633525978133-17355702535722147328908-0-53-1182-1944-crop-1735573515497812838341.jpg",
        "sapo": "Trước thềm diễn ra Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, Trung ương Hội Nông dân Việt Nam đã có báo cáo về việc thực hiện kết luận của Thủ tướng tại Hội nghị năm 2023. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo; Báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203161",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân năm 2024: Ông Trần Mạnh Báo nói, nông dân ngày nay phải trở thành doanh nghiệp",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-ong-tran-manh-bao-noi-nong-dan-ngay-nay-phai-tro-thanh-doanh-nghiep-20241230152909756-d1203161.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/tran-manh-bap-17041982199901223930836-17355438016262078925498-0-0-1250-2000-crop-1735543826487254932226.jpg",
        "sapo": "Ông Trần Mạnh Báo- Anh hùng Lao động, Chủ tịch HĐQT, Tổng Giám đốc Công ty Cổ phần Tập đoàn ThaiBinhSeed đã chía sẻ như trên tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo; Báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203259",
        "title": "Bài phát biểu của Chủ tịch Hội NDVN Lương Quốc Đoàn tại Hội nghị Thủ tướng đối thoại với nông dân năm 2024",
        "url": "https://danviet.vn/bai-phat-bieu-cua-chu-tich-hoi-ndvn-luong-quoc-doan-tai-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-20241231083945165-d1203259.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/chu-tich-hoi-nong-dan-viet-nam-1735609045847334130206-84-0-1469-2216-crop-17356091000081328973025.jpg",
        "sapo": "Được sự đồng ý của Thủ tướng Phạm Minh Chính, sáng nay 31/12, Trung ương Hội Nông dân Việt Nam chủ trì tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo; Báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203267",
        "title": "Thủ tướng gửi lời cảm ơn nông dân tại Hội nghị đối thoại năm 2024",
        "url": "https://danviet.vn/thu-tuong-gui-loi-cam-on-nong-dan-tai-hoi-nghi-doi-thoai-nam-2024-20241231091009161-d1203267.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/thu-tuong-1735610941614349265432-95-0-1345-2000-crop-1735610955816761631538.jpg",
        "sapo": "Phát biểu định hướng, chỉ đạo Hội nghị Thủ tướng đối thoại với nông dân năm 20224, Thủ tướng Chính phủ Phạm Minh Chính đã gửi lời cảm ơn tới bà con nông dân đã góp phần làm nên thành công của ngành trong năm qua. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo; Báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203271",
        "title": "4.000 đại biểu theo dõi Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam tại 63 điểm cầu",
        "url": "https://danviet.vn/4000-dai-bieu-theo-doi-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-viet-nam-tai-63-diem-cau-20241231092624407-d1203271.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/thu-tuong-2-17356110548561970050772-76-0-1676-2560-crop-1735611930422658995146.jpg",
        "sapo": "Sáng nay, 31/12, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024 diễn ra tại Hà Nội, được trực tuyến tới 63 tỉnh, thành phố. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo; Báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203345",
        "title": "Video: Toàn văn kết luận của Thủ tướng Chính phủ Phạm Minh Chính tại Hội nghị Thủ tướng đối thoại với nông dân năm 2024",
        "url": "https://danviet.vn/video-toan-van-ket-luan-cua-thu-tuong-chinh-phu-pham-minh-chinh-tai-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-20241231164155705-d1203345.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/nntn-40-nam-31-december-2024-08-04-03-am-03-45-24-03-still002-17356345305291200247929-0-11-1080-1739-crop-17356345365231963967245.jpg",
        "sapo": "Phát biểu kết luận tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024 diễn ra vào sáng nay 31/12, Thủ tướng Phạm Minh Chính đã nêu 9 nhóm vấn đề quan trọng. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo; giao Báo Nông thôn Ngày nay/Dân Việt tổ chức thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203307",
        "title": "Thủ tướng Chính phủ Phạm Minh Chính kết luận 9 nhóm vấn đề quan trọng tại Hội nghị đối thoại với nông dân năm 2024",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-pham-minh-chinh-ket-luan-9-nhom-van-de-quan-trong-tai-hoi-nghi-doi-thoai-voi-nong-dan-nam-2024-20241231135207468-d1203307.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/thu-tuong-173562818697420815501-0-0-1250-2000-crop-17356281923181142354525.jpg",
        "sapo": "Sáng nay 31/12, tại trụ sở Chính phủ đã diễn ra Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo, Báo Nông thôn Ngày nay/Dân Việt trực tiếp tổ chức thực hiện. Phát biểu kết luận, Thủ tướng Phạm Minh Chính đã nêu 9 nhóm vấn đề quan trọng.",
        "date": "2024-12-31"
      },
      {
        "id": "1203323",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân năm 2024: Những chính sách chưa có tiền lệ của ngân hàng sau bão Yagi",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-nhung-chinh-sach-chua-co-tien-le-cua-ngan-hang-sau-bao-yagi-20241231153321069-d1203323.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/31/6-17356352861591944213713-144-0-1394-2000-crop-1735635291642289716110.jpg",
        "sapo": "Bà Hoàng Thị Gái, nông dân đến huyện Vĩnh Bảo, TP.Hải Phòng cho biết, tôi có đặt 3 câu hỏi tại Hội nghị Thủ tướng đối thoại với nông dân năm 2024 và rất thỏa mãn với trao đổi của các đồng chí lãnh đạo. Hội nghị do Trung ương Hội Nông dân Việt Nam chỉ đạo; Báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
        "date": "2024-12-31"
      },
      {
        "id": "1203148",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân năm 2024: Công tác tập hợp ý kiến được thực hiện rất công phu, khoa học",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-cong-tac-tap-hop-y-kien-duoc-thuc-hien-rat-cong-phu-khoa-hoc-20241230142813863-d1203148.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/thu-tuong-doi-thoai-17355730906661726349304-0-107-1125-1907-crop-1735573097556229732625.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng đối thoại với nông dân năm 2024 diễn ra vào 31/12 tại Trụ sở Văn phòng Chính phủ, nhà báo Nguyễn Văn Hoài- Thành viên Ban Tổ chức Hội nghị cho biết: Trước khi diễn ra Hội nghị, công tác tập hợp ý kiến nông dân được thực hiện rất công phu, bài bản và khoa học qua nhiều kênh khác nhau.",
        "date": "2024-12-31"
      },
      {
        "id": "1203217",
        "title": "Video: Khơi dậy khát vọng làm giàu của nông dân trong kỷ nguyên vươn mình",
        "url": "https://danviet.vn/video-khoi-day-khat-vong-lam-giau-cua-nong-dan-trong-ky-nguyen-vuon-minh-20241230215626547-d1203217.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/anh-nen-17355703704821766638722-83-379-1096-2000-crop-1735570378100120258888.jpg",
        "sapo": "Diễn ra trong bối cảnh Tổng Bí thư Tô Lâm vừa đưa ra thông điệp về kỷ nguyên vươn mình của dân tộc, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024 mang chủ đề: \"Khơi dậy khát vọng làm giàu để phát triển đất nước phồn vinh, hạnh phúc; vững tin bước vào kỷ nguyên mới\".",
        "date": "2024-12-31"
      },
      {
        "id": "1203124",
        "title": "Nông dân Hải Dương mong Chính phủ sớm ban hành cơ chế, chính sách để phát triển nông nghiệp xanh, du lịch sinh thái",
        "url": "https://danviet.vn/mong-chinh-phu-som-ban-hanh-co-che-chinh-sach-ho-tro-de-phat-trien-nong-nghiep-xanh-ben-vung-20241230130250253-d1203124.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/t1-1735537805455272238356-263-0-1863-2560-crop-17355381243471311336061.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024 tổ chức vào ngày mai, 31/12, lãnh đạo Hội Nông dân tỉnh Hải Dương đã chia sẻ những tâm tư, mong muốn Chính phủ, Thủ tướng Chính phủ quan tâm ban hành cơ chế, chính sách, hỗ trợ để phát triển nông nghiệp xanh, bền vững.",
        "date": "2024-12-30"
      },
      {
        "id": "1203147",
        "title": "Nông dân háo hức mong chờ được gặp Thủ tướng tại hội nghị đối thoại để bày tỏ tâm tư, nguyện vọng",
        "url": "https://danviet.vn/nong-dan-hao-huc-mong-cho-duoc-gap-thu-tuong-tai-hoi-nghi-doi-thoai-de-bay-to-tam-tu-nguyen-vong-20241230142736348-d1203147.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/base64-1703931173487149451258-1735542533533914159935-17355439443152064982684-81-365-1103-2000-crop-1735543987583500389029.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, nhiều nông dân, HTX phấn khởi cho biết, đã rất mong chờ, háo hức và kỳ vọng rất lớn vào Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần này.",
        "date": "2024-12-30"
      },
      {
        "id": "1203129",
        "title": "Bản tin đặc biệt: Thủ tướng Chính phủ đối thoại, khơi dậy khát vọng làm giàu của nông dân",
        "url": "https://danviet.vn/ban-tin-dac-biet-thu-tuong-chinh-phu-doi-thoai-khoi-day-khat-vong-lam-giau-cua-nong-dan-20241230133755047-d1203129.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/sequence-02-00-37-21-19-still022-17355402576481678561860-0-51-1080-1779-crop-1735540266268849903815.jpg",
        "sapo": "Bản tin chuyên đề đặc biệt trên báo Dân Việt hôm nay xin dành toàn bộ thời lượng để thông tin về sự kiện Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024 với chủ đề \"Khơi dậy khát vọng làm giàu để phát triển đất nước phồn vinh, hạnh phúc; vững tin bước vào kỷ nguyên mới\" sẽ diễn ra vào sáng mai 31/12.",
        "date": "2024-12-30"
      },
      {
        "id": "1203028",
        "title": "Chuyên gia Hoàng Trọng Thủy: Hội nghị Thủ tướng đối thoại với nông dân năm 2024 diễn ra vào thời điểm rất nhiều ý nghĩa",
        "url": "https://danviet.vn/chuyen-gia-hoang-trong-thuy-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2024-dien-ra-vao-thoi-diem-rat-nhieu-y-nghia-20241229230622545-d1203028.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/29/ong-hoang-trong-thuy-16888035387891462957197-17354900093701085256884-60-18-1194-1832-crop-17354902313361810580956.jpg",
        "sapo": "Hội nghị Thủ tướng đối thoại với nông dân Việt Nam năm 2024 sẽ chính thức diễn ra, ngày 31/12. Trước thềm diễn ra Hội nghị, phóng viên Dân Việt đã có cuộc trao đổi với chuyên gia nông nghiệp Hoàng Trọng Thủy về Hội nghị lần này.",
        "date": "2024-12-30"
      },
      {
        "id": "801369",
        "title": "Chủ tịch Hội Nông dân Việt Nam Lương Quốc Đoàn: Thủ tướng đối thoại với nông dân, để vững tin bước vào kỷ nguyên mới",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-viet-nam-luong-quoc-doan-thu-tuong-doi-thoai-voi-nong-dan-de-vung-tin-buoc-vao-ky-nguyen-moi-202412291606232-d801369.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/29/800x500-ong-doan-1735492564287649628876.jpg",
        "sapo": "Được sự đồng ý của Thủ tướng Phạm Minh Chính, sáng nay, 31/12, Trung ương Hội Nông dân Việt Nam chủ trì tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024 với chủ đề \"Khơi dậy khát vọng làm giàu để phát triển đất nước phồn vinh, hạnh phúc; vững tin bước vào kỷ nguyên mới\".",
        "date": "2024-12-31"
      },
      {
        "id": "1203080",
        "title": "Phó Trưởng ban Kinh tế Trung ương: Thủ tướng đối thoại với nông dân để khơi thông nguồn lực phục vụ \"tam nông\"",
        "url": "https://danviet.vn/pho-truong-ban-kinh-te-trung-uong-thu-tuong-doi-thoai-voi-nong-dan-de-khoi-thong-nguon-luc-phuc-vu-tam-nong-20241230093441626-d1203080.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/30/duy-hung-1735525328502644301825-0-0-1200-1920-crop-17355260150371966393364.jpeg",
        "sapo": "Theo ông Nguyễn Duy Hưng, Phó Trưởng ban Kinh tế Trung ương, Hội nghị Thủ tướng đối thoại với nông dân Việt Nam năm 2024 được tổ chức trong bối cảnh nông nghiệp, nông dân, nông thôn Việt Nam đạt được nhiều thành tựu dù vừa trải qua rất nhiều khó khăn do thiên tai, biến động thị trường, khẳng định vị trí không thể thiếu được của tam nông.",
        "date": "2024-12-30"
      },
      {
        "id": "1202943",
        "title": "Kiến nghị Chính phủ ban hành chính sách đặc thù, tạo điều kiện cho hợp tác xã, tổ hợp tác phát triển",
        "url": "https://danviet.vn/kien-nghi-chinh-phu-ban-hanh-chinh-sach-dac-thu-de-tao-dieu-kien-cho-cac-htx-tht-phat-trien-20241229121859147-d1202943.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/29/20240927104422-17354492180981302663157-0-0-1600-2560-crop-17354493193731189162677.jpg",
        "sapo": "Trước ngày diễn ra Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024, ông Huỳnh Quốc Hùng, Chủ tịch Hội Nông dân tỉnh Cà Mau đã có những đề xuất liên quan đến cơ chế chính sách hỗ trợ tổ hợp tác, Hợp tác xã.",
        "date": "2024-12-29"
      },
      {
        "id": "847561",
        "title": "Thủ tướng Chính phủ sẽ đối thoại với nông dân vào sáng 31/12",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-se-doi-thoai-voi-nong-dan-nam-2024-vao-sang-31-12-2024122908470584-d847561.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/29/thu-tuong-17354370521391159614458-0-15-476-777-crop-173543713920992854182.jpg",
        "sapo": "Theo thông tin từ Văn phòng Chính phủ, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024 sẽ được tổ chức vào sáng ngày 31/12/2024.",
        "date": "2024-12-29"
      },
      {
        "id": "1202784",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: An Giang quan tâm tới chính sách 1 triệu ha lúa chất lượng cao",
        "url": "https://danviet.vn/nong-dan-an-giang-kien-nghi-ve-de-an-1-trieu-ha-lua-chat-luong-cao-toi-hoi-nghi-thu-tuong-doi-thoai-20241228100344222-d1202784.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/28/le-phuoc-dung-1735355104260505418836-0-0-1593-2549-crop-173535511796470671554.jpg",
        "sapo": "Ngày 31/12 tới, Hội nghị Thủ tướng đối thoại với nông dân Việt Nam năm 2024 chính thức diễn ra tại Thủ đô Hà Nội, kết nối tới các điểm cầu cả nước. Trước thềm hội nghị, ông Lê Phước Dũng, Chủ tịch Hội Nông dân tỉnh An Giang kiến nghị chính sách hỗ trợ đối tượng tham gia đề án 1 triệu ha lúa chất lượng cao...",
        "date": "2024-12-30"
      },
      {
        "id": "1202857",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Niềm tin, động lực phát triển kinh tế tập thể mạnh mẽ",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-niem-tin-dong-luc-phat-trien-kinh-te-tap-the-manh-me-20241228170047548-d1202857.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/28/hoi-nong-dan-viet-nam-2-1734587752977471098524-17353795466481639041992-33-0-833-1280-crop-1735379953327134421501.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, Phóng viên Báo Dân Việt có cuộc trao đổi với ông Nguyễn Tiến Cường – Uỷ viên Ban Thường vụ, Trưởng ban Kinh tế Trung ương Hội Nông dân Việt Nam về ý nghĩa, kết quả các cấp Hội Nông dân Việt Nam thực hiện Quyết định số 182 của Thủ tướng Chính phủ.",
        "date": "2024-12-29"
      },
      {
        "id": "847553",
        "title": "HTX thanh long sạch ở Bình Thuận kiến nghị Thủ tướng về xuất khẩu thanh long, phát triển du lịch canh nông",
        "url": "https://danviet.vn/htx-thanh-long-sach-o-binh-thuan-kien-nghi-thu-tuong-ve-xuat-khau-thanh-long-phat-trien-du-lich-canh-nong-2024122809592388-d847553.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/28/hiep-3-17353544842631221215029-0-0-800-1280-crop-17353544873512074695235.jpg",
        "sapo": "Gửi tâm tư, kiến nghị đến Thủ tướng, ông Đỗ Thanh Hiệp, Giám đốc HTX thanh long sạch Hòa Lệ (thị trấn Ma Lâm, huyện Hàm Thuận Bắc, tỉnh Bình Thuận) kiến nghị những giải pháp nhằm phát triển thanh long bền vững…",
        "date": "2024-12-28"
      },
      {
        "id": "1201324",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: HTX ở Hải Phòng kiến nghị sửa đổi chính sách hỗ trợ sau thiên tai",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-htx-kien-nghi-sua-doi-chinh-sach-ho-tro-sau-thien-tai-20241220065015202-d1201324.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/19/z6147039469522391796fbf69939d468104d30c355e2dd-1734651821387120190018-0-126-721-1280-crop-1734651941887952893632.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân 2024, phóng viên báo Dân Việt có cuộc trao đổi với bà Hoàng Thị Gái, Chủ tịch HĐQT kiêm Giám đốc HTX Sản xuất, kinh doanh dịch vụ tổng hợp nông nghiệp xã An Hòa huyện Vĩnh Bảo, TP Hải Phòng kiến nghị cần sửa đổi chính sách hỗ trợ sau thiên tai...",
        "date": "2024-12-27"
      },
      {
        "id": "1201000",
        "title": "Nông dân, HTX cần hỗ trợ xây dựng thương hiệu nông sản, bổ sung, nâng mức vay tín dụng ưu đãi",
        "url": "https://danviet.vn/nong-dan-htx-can-ho-tro-xay-dung-thuong-hieu-nong-san-bo-sung-nang-muc-vay-tin-dung-uu-dai-20241218113820366-d1201000.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/18/hoi-nghi-thu-tuong-4-17344954196031508781797-283-0-1883-2560-crop-1734496191117652807975.jpg",
        "sapo": "Gửi tâm tư đến Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, Chủ tịch Hội Nông dân huyện Triệu Sơn (Thanh Hóa) bày tỏ mong muốn tỉnh, chính phủ có cơ chế hỗ trợ nông dân, HTX ứng dụng kỹ thuật công nghệ mới; xây dựng thương hiệu nông sản; nâng mức, bổ sung thêm các nguồn tín dụng ưu đãi...",
        "date": "2024-12-19"
      },
      {
        "id": "1199172",
        "title": "Đề xuất giải pháp tháo gỡ khó khăn trong phát triển cây dược liệu, tăng thu nhập cho nông dân",
        "url": "https://danviet.vn/de-xuat-giai-phap-thao-go-kho-khan-trong-phat-trien-cay-duoc-lieu-tang-thu-nhap-cho-nong-dan-20241208154348745-d1199172.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/8/20241207102823-1733647131983508180725-0-343-2250-3943-crop-17336480316192072444228.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng đối thoại với nông dân 2024, HTX Nông nghiệp Tiên Phong xã Yên Trạch (huyện Phú Lương, tỉnh Thái Nguyên) đã có nhiều kiến nghị, đề xuất nhằm tạo điều kiện cho HTX phát triển sản xuất hiệu quả.",
        "date": "2024-12-18"
      },
      {
        "id": "847454",
        "title": "Kiến nghị Thủ tướng Chính phủ cho thí điểm tuyển rửa cát biển để san lấp các dự án đường cao tốc",
        "url": "https://danviet.vn/kien-nghi-thu-tuong-chinh-phu-cho-thi-diem-tuyen-rua-cat-bien-de-san-lap-cac-du-an-duong-cao-toc-2024122410262066-d847454.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/24/tuyen-rua-cac-bien-1-173503786139494403557-93-360-1252-2214-crop-17350380142381832139141.jpg",
        "sapo": "Trước ngày diễn ra Hội nghị Thủ tướng Chính phủ đối thoại với nông dân, ông Võ Tấn Dũng - Chủ tịch HĐQT Công ty Cổ Phần Công Nghệ Cát Sạch MeKong (TP.Cần Thơ) đề xuất được triển khai thí điểm việc tuyển rửa cát biển để san lấp dự án cao tốc vùng nước ngọt.",
        "date": "2024-12-25"
      },
      {
        "id": "1199740",
        "title": "HTX Sơn La mong chính sách hỗ trợ vay vốn lớn, ứng dụng công nghệ cao, tham gia chuỗi sản xuất",
        "url": "https://danviet.vn/htx-son-la-mong-chinh-sach-ho-tro-vay-von-lon-ung-dung-cong-nghe-cao-tham-gia-chuoi-san-xuat-20241211114156216-d1199740.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/12/z60252572352723a5decc4689a25f29c7327ab4c58ea61-17339720513701852210360-107-0-1707-2559-crop-17339720589851356336319.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân 2024, nhiều HTX trên địa bàn tỉnh Sơn La kiến nghị nhà nước có chính sách hỗ trợ đủ mạnh về nguồn vốn đầu tư; ứng dụng công nghệ cao; tham gia chuỗi sản xuất lớn...",
        "date": "2024-12-25"
      },
      {
        "id": "1201449",
        "title": "Nông dân Việt Nam xuất sắc đến từ Hải Dương gửi tâm tư tới Hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-den-tu-hai-duong-gui-tam-tu-toi-hoi-nghi-thu-tuong-doi-thoai-voi-nd-20241220165341858-d1201449.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/20/ong-menh-3-1734687259193135061969-0-0-1126-1802-crop-1734687620035649574921.jpg",
        "sapo": "Trước thêm hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, Nông dân Việt Nam xuất sắc năm 2024, Nguyễn Đức Mệnh, 72 tuổi, Giám đốc Công ty CP Chế biến Nông sản Tân Hương, địa chỉ: Thôn Văn Thai, xã Cẩm Văn, huyện Cẩm Giàng, tỉnh Hải Dương đã chia sẻ với phóng viên Dân Việt điều mong muốn, gửi gắm đến hội nghị.",
        "date": "2024-12-24"
      },
      {
        "id": "1201835",
        "title": "Thủ tướng Chính phủ đồng ý tổ chức Hội nghị đối thoại với nông dân năm 2024",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-dong-y-to-chuc-hoi-nghi-doi-thoai-voi-nong-dan-nam-2024-20241223104348079-d1201835.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/23/img8867-1703922421712731867804-173492487508958114922-0-0-1226-1962-crop-1734925006566719118950.jpg",
        "sapo": "Theo nội dung công văn số 9433/VPCP-NN, Thủ tướng Chính phủ Phạm Minh Chính đồng ý với đề nghị của Trung ương Hội Nông dân Việt Nam về việc tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024.",
        "date": "2024-12-23"
      },
      {
        "id": "847393",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Nông dân Bình Thuận kiến nghị quan tâm phát triển nông nghiệp hữu cơ",
        "url": "https://danviet.vn/doanh-nghiep-nong-dan-binh-thuan-kien-nghi-chinh-phu-quan-tam-phat-trien-nong-nghiep-huu-co-2024122011082968-d847393.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/20/ba-tuon-66-17346674486101340774223-259-0-1509-2000-crop-17346674764751206557883.jpg",
        "sapo": "Trước ngày diễn ra hội nghị Thủ tướng Chính phủ đối thoại với nông dân, anh Nguyễn Minh Tâm-Nông dân Việt Nam xuất sắc 2024 đến từ Bình Thuận kiến nghị Nhà nước quan tâm đầu tư nguồn vốn dài hạn, giúp và kết nối để nông dân liên kết làm nông nghiệp hữu cơ nhằm bảo vệ sức khỏe người tiêu dùng…",
        "date": "2024-12-23"
      },
      {
        "id": "1201776",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Chủ tịch Hội ND Quảng Bình kiến nghị về chính sách đột phá cho vùng DTTS",
        "url": "https://danviet.vn/chu-tich-hoi-nd-quang-binh-kien-nghi-chinh-phu-ve-chinh-sach-dot-pha-cho-vung-dan-toc-thieu-so-20241222211401056-d1201776.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/22/fbimg1706520283228-1706523403234217411480-134-0-1099-1544-crop-17348767261021155246585.jpg",
        "sapo": "Đó là chia sẻ, tâm tư, kiến nghị của ông Trần Tiến Sỹ, Chủ tịch Hội Nông dân tỉnh Quảng Bình trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024.",
        "date": "2024-12-23"
      },
      {
        "id": "1201244",
        "title": "Nông dân Ninh Thuận mong có chính sách bình ổn giá phân bón, nâng cao chất lượng cây, con giống",
        "url": "https://danviet.vn/nong-dan-ninh-thuan-mong-co-chinh-sach-binh-on-gia-phan-bon-nang-cao-chat-luong-cay-con-giong-20241219154537543-d1201244.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/19/base64-17116921718291827991567-17345977828451957780314-46-0-1296-2000-crop-1734597816627962588193.jpg",
        "sapo": "Gửi tới Hội nghị Thủ tướng Chình phủ đối thoại với nông dân năm 2024, nông dân Ninh Thuận mong muốn nhà nước, các nhà khóa học hỗ trợ nông dân ứng dụng khoa học công nghệ; nghiên cứu lai tạo các giống cây trồng, vật nuôi chất lượng cao; cần có chính sách ổn định giá phân bón...",
        "date": "2024-12-20"
      },
      {
        "id": "1191136",
        "title": "Mời gửi ý kiến, đề xuất qua chuyên mục \"Nông dân gửi tâm tư tới Thủ tướng\"",
        "url": "https://danviet.vn/moi-gui-y-kien-de-xuat-qua-chuyen-muc-nong-dan-gui-tam-tu-toi-thu-tuong-20241023163144794-d1191136.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/23/thu-tuong-doi-thoai-2023-140-1703995662414203507700-1704343508947871822403-0-12-399-650-crop-1729675686513670133992.jpg",
        "sapo": "Nhằm có thêm nhiều kênh thông tin để tiếp nhận ý kiến, câu hỏi, đề xuất, nguyện vọng gửi tới Thủ tướng Chính phủ, từ hôm nay 24/10, Báo Nông thôn Ngày nay/điện tử Dân Việt sẽ mở chuyên mục \"Nông dân gửi gắm tâm tư tới Thủ tướng\" để bà con nông dân, các hợp tác xã, bạn đọc trực tiếp gửi ý kiến của mình.",
        "date": "2024-10-24"
      },
      {
        "id": "1191263",
        "title": "Những đổi thay sau Hội nghị Thủ tướng đối thoại với Nông dân năm 2023",
        "url": "https://danviet.vn/nhung-doi-thay-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-bai-1-20241024130313604-d1191263.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/25/thu-tuong-doi-thoai-1-172982513323086851237-101-0-1351-2000-crop-17298251468021440896500.jpg",
        "sapo": "Trung ương Hội Nông dân Việt Nam vừa có báo cáo gửi Thủ tướng Phạm Minh Chính về kết quả thực hiện Kết luận tại Hội nghị Thủ tướng Chính phủ đối thoại với Nông dân Việt Nam năm 2023. Theo đó, sau Hội nghị, các Bộ, ngành Trung ương, địa phương đã tập trung, tích cực thực hiện nhiều giải pháp hỗ trợ nông nghiệp, nông dân, nông thôn.",
        "date": "2024-10-25"
      },
      {
        "id": "846378",
        "title": "Những đổi thay sau Hội nghị Thủ tướng đối thoại với Nông dân 2023: Đột phá từ xây dựng 5 vùng nguyên liệu",
        "url": "https://danviet.vn/nhung-doi-thay-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2023-dot-pha-tu-xay-dung-5-vung-nguyen-lieu-bai-2-2024102522363281-d846378.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/25/vung-nguyen-lieu-4-17298717740941820281749-0-134-760-1350-crop-1729871856446893949895.jpg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với Nông dân năm 2023, Bộ Nông nghiệp PTNT đã rốt ráo thực hiện các giải pháp tháo gỡ khó khăn, vướng mắc, hỗ trợ nông dân; trong đó có hướng dẫn các địa phương xây dựng các vùng nguyên liệu đạt chuẩn, sản xuất hàng hoá tập trung, quy mô lớn theo các tiêu chuẩn và yêu cầu của thị trường.",
        "date": "2024-10-26"
      },
      {
        "id": "1192010",
        "title": "Có 1.000ha cà rốt nhưng thiếu kho lạnh, nông dân Hải Dương kiến nghị Thủ tướng đầu tư cho chế biến, bảo quản nông sản",
        "url": "https://danviet.vn/co-1000ha-ca-rot-nhung-thieu-kho-lanh-nong-dan-hai-duong-kien-nghi-thu-tuong-dau-tu-cho-che-bien-bao-quan-nong-san-20241028183427349-d1192010.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/28/ca-rot-1730115210212297900728-160-0-960-1280-crop-1730115217061850455817.jpg",
        "sapo": "Tạo cơ chế, chính sách xây dựng kho lạnh, khu chế biến, bảo quản nông sản; khuyến khích phát triển các mô hình du lịch miệt vườn, du lịch sinh thái; thường xuyên kiểm tra phát hiện và xử phạt các công ty, đơn vị xả thải ra môi trường, gây ô nhiễm môi trường,... là những kiến nghị, đề xuất của nông dân Hải Dương gửi đến Thủ tướng.",
        "date": "2024-10-29"
      },
      {
        "id": "1192370",
        "title": "Ngư dân Quảng Bình, Bình Thuận kiến nghị Thủ tướng chỉ đạo khơi thông luồng lạch, xử lý dùng chất nổ đánh bắt hải sản",
        "url": "https://danviet.vn/ngu-dan-quang-binh-binh-thuan-kien-nghi-thu-tuong-chi-dao-khoi-thong-luong-lach-xu-ly-dung-chat-no-danh-bat-hai-san-20241030154017635-d1192370.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/30/z4776708890758fe4aa40fe2c5b2de5ed6be5cded0e483-16970952797342119701704-17302771114981507006995-39-36-381-583-crop-17302771278781199955981.jpg",
        "sapo": "Khơi thông luồng lạch, bảo đảm an toàn cho tàu thuyền vào ra được thuận lợi, giảm thiểu rủi ro cho ngư dân; tình trạng đánh bắt sử dụng chất nổ và thuốc nổ trên biển đang diễn ra hết sức phức tạp, ảnh hưởng tới nguồn lợi thủy sản và các tàu, thuyền đánh bắt trên biển là một trong những kiến nghị nông dân gửi đến Thủ tướng.",
        "date": "2024-10-30"
      },
      {
        "id": "1192489",
        "title": "Hội Nông dân Yên Bái kiến nghị Chính phủ có chính sách đặc thù hỗ trợ nông dân bị thiệt hại do bão số 3",
        "url": "https://danviet.vn/hoi-nong-dan-yen-bai-kien-nghi-chinh-phu-co-chinh-sach-dac-thu-ho-tro-nong-dan-bi-thiet-hai-do-bao-so-3-20241031091625531-d1192489.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/31/saubaoso3nuocmatroitrenvungbuoitienvua-15-172705608603136698566-17303407378571030268523-6-297-1070-2000-crop-1730340794466794811178.jpeg",
        "sapo": "Bão số 3 đã làm thiệt hại nặng nề nhiều diện tích đất canh tác, sản xuất nông nghiệp. Để cải tạo, phục hồi đất canh tác phải mất rất nhiều công sức, kinh phí, trong khi chính sách hỗ trợ của Nhà nước chỉ \"được một phần nhỏ\", do đó, Hội Nông dân tỉnh Yên Bái kiến nghị Chính phủ có những chính sách đặc thù để hỗ trợ.",
        "date": "2024-10-31"
      },
      {
        "id": "846538",
        "title": "Nông dân Cần Thơ kiến nghị Chính phủ tăng cường kiểm tra, quản lý chất lượng phân bón, thuốc BVTV",
        "url": "https://danviet.vn/nong-dan-can-tho-kien-nghi-chinh-phu-tang-cuong-quan-ly-chat-luong-phan-bon-thuoc-bvtv-2024110218022546-d846538.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/2/le-ba-phieu-7-17264885026321556384271-17305445619241456062962-0-99-719-1249-crop-1730545206677879462388.jpeg",
        "sapo": "Phân bón, thuốc bảo vệ thực vật là những vật tư không thể thiếu trong sản xuất nông nghiệp. Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, nông dân Cần Thơ kiến nghị Chính phủ chỉ đạo các bộ, ngành, địa phương tăng cường kiểm tra, quản lý chặt chẽ hoạt động kinh doanh, buôn bán phân bón, thuốc BVTV.",
        "date": "2024-11-03"
      },
      {
        "id": "846534",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: Đổi mới hoạt động Quỹ Hỗ trợ nông dân ngày càng hiệu quả",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-doi-moi-hoat-dong-quy-ho-tro-nong-dan-ngay-cang-hieu-qua-2024110216083027-d846534.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/2/quy-ho-tro-nong-dan-17305221378321133999016-23-0-787-1222-crop-17305393592281276106266.jpg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023, các cấp Hội Nông dân Việt Nam đã tiếp tục tập trung đẩy mạnh phát triển nguồn vốn và nâng cao hiệu quả hoạt động Quỹ Hỗ trợ nông dân (HTND). Hoạt động Quỹ HTND đã được Đảng, Nhà nước, các bộ, ngành Trung ương, cấp ủy, chính quyền các địa phương đánh giá cao.",
        "date": "2024-11-04"
      },
      {
        "id": "846623",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: Hàng triệu người dân được tiếp cận các dịch vụ viễn thông",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-hang-trieu-nguoi-dan-duoc-tiep-can-cac-dich-vu-vien-thong-2024110715322603-d846623.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/7/320370kipthoiva-17309682401261360833865-0-3-623-1000-crop-17309682958841023064385.jpg",
        "sapo": "Thực hiện chương trình phổ cập dịch vụ viễn thông công ích nhằm cung cấp dịch vụ viễn thông và Internet với chi phí thấp cho người dân ở các vùng sâu, vùng xa, biên giới và hải đảo đã giúp hàng triệu người dân nông thôn có cơ hội tiếp cận các dịch vụ viễn thông cơ bản để nâng cao chất lượng cuộc sống...",
        "date": "2024-11-08"
      },
      {
        "id": "1193803",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân: Tạo đột phá trong đào tạo nghề, phát triển nông nghiệp, nông thôn bền vững",
        "url": "https://danviet.vn/tao-dot-pha-trong-dao-tao-nghe-de-phat-trien-nong-nghiep-nong-thon-ben-vung-20241107152043244-d1193803.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/7/dao-tao-nghe-may-cho-ld-nong-thon-phu-tho-17309669286831473901883-147-0-1747-2560-crop-17309673957291442159547.jpg",
        "sapo": "Để hỗ trợ nông dân, phục hồi phát triển nông nghiệp, nông thôn bền vững, mới đây Bộ LĐTBXH đã tham vấn để Thủ tướng Chính phủ ban hành nhiều văn bản có liên quan nhằm tăng cường, đổi mới đào tạo nghề cho lao động nông thôn.",
        "date": "2024-11-09"
      },
      {
        "id": "1194461",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: Nông dân được nâng cao kỹ năng số, bán 6.000 tấn nông sản",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-nong-dan-duoc-nang-cao-ky-nang-so-ban-6000-tan-nong-san-20241111143353212-d1194461.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/11/tiktok-1-1693048178955563904789-1731309986433128185567-195-482-1059-1865-crop-17313101455751191834963.jpg",
        "sapo": "Sau Hội nghị Thủ tướng Chính phủ đối thoại với Nông dân Việt Nam năm 2023, Bộ Thông tin và Truyền thông đã triển khai nhiều chương trình tập huấn và nâng cao kỹ năng số cho nông dân, đồng thời hỗ trợ đào tạo, mở trên 5 triệu tài khoản trên sàn thương mại điện tử, tiêu thụ 6.000 tấn nông sản.",
        "date": "2024-11-12"
      },
      {
        "id": "1199041",
        "title": "Tâm tư, kiến nghị gửi tới Thủ tướng: Liên kết sản xuất theo chuỗi giá trị cần đảm bảo lợi ích của nông dân",
        "url": "https://danviet.vn/tam-tu-kien-nghi-gui-toi-thu-tuong-nong-dan-chia-se-moi-quan-tam-ve-lien-ket-theo-chuoi-gia-tri-20241207160728001-d1199041.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/7/lien-ket-san-xuat-3-173356173594299259646-0-0-721-1154-crop-1733561741380277929842.jpg",
        "sapo": "Đó là mong muốn của ông Lù Văn Sợi – đại diện nhóm hộ liên kết sản xuất lúa đặc sản, ở bản Đắc (xã Hua Nà, huyện Than Uyên, tỉnh Lai Châu) muốn gửi tới Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2024.",
        "date": "2024-12-09"
      },
      {
        "id": "1199032",
        "title": "Nông dân Phú Thọ gửi tới Hội nghị Thủ tướng Chính phủ đối thoại với nông dân: Gỡ vướng về chuyển đổi đất lúa",
        "url": "https://danviet.vn/nong-dan-phu-tho-gui-toi-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-go-vuong-ve-chuyen-doi-dat-lua-20241207144451198-d1199032.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/7/rau-an-toan-29-17335562284881676492672-172-0-1772-2560-crop-17335573303201092791242.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân 2024, nhiều hộ nông dân tỉnh Phú Thọ mong muốn, kiến nghị được gỡ vướng chuyển đổi đất lúa, hỗ trợ vốn...để phát triển nông nghiệp xanh, bền vững.",
        "date": "2024-12-10"
      },
      {
        "id": "1199505",
        "title": "Tiếp cận tín dụng ngân hàng, nông dân, doanh nghiệp nông nghiệp còn gặp rào cản mang tính kỹ thuật",
        "url": "https://danviet.vn/tiep-can-tin-dung-ngan-hang-nong-dan-doanh-nghiep-nong-nghiep-con-gap-rao-can-la-rao-can-nao-20241210111724246-d1199505.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/10/cong-ty-long-nhat-5-17338233576421808863491-0-0-1441-2306-crop-17338239394821700346922.jpg",
        "sapo": "Dù là doanh nghiệp nuôi trồng thuỷ sản quy mô lớn tại Quảng Ninh, song Công ty CP Nhật Long cũng khó khăn trong tiếp cận với dòng vốn tín dụng dành cho lĩnh vực nông nghiệp vì còn quá nhiều rào cản mang tính kỹ thuật.",
        "date": "2024-12-11"
      },
      {
        "id": "1199401",
        "title": "Cần có cơ chế hỗ trợ nông dân, doanh nghiệp Thái Nguyên xây dựng vùng nguyên liệu chè, xuất khẩu chè",
        "url": "https://danviet.vn/nu-giam-doc-htx-tre-o-thai-nguyen-de-xuat-co-che-ho-tro-xay-dung-vung-nguyen-lieu-san-xuat-che-20241209174042839-d1199401.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/9/img17337079233741733728891402-1733740640562115116857-321-0-1926-2568-crop-1733740646218525882106.jpg",
        "sapo": "Gửi tâm tư tới Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, chị Đỗ Thị Nguyên, Giám đốc HTX Chè Phúc Nguyên mong muốn nhà nước có cơ chế hỗ trợ HTX trong việc xây dựng vùng nguyên liệu sản xuất chè an toàn nhằm tạo ra chuỗi liên kết sản xuất, giúp nâng cao chất lượng và giá trị sản phẩm trên thị trường.",
        "date": "2024-12-12"
      },
      {
        "id": "1199380",
        "title": "Hợp tác xã ở Đà Nẵng cần vốn ưu đãi, hỗ trợ ứng dụng công nghệ cao phát triển kinh tế tập thể",
        "url": "https://danviet.vn/hop-tac-xa-o-da-nang-can-von-uu-dai-ho-tro-ung-dung-cong-nghe-cao-phat-trien-kinh-te-tap-the-20241209155347501-d1199380.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/9/hinh-2-17337339811041517246048-0-0-1600-2560-crop-1733734278100303460593.jpg",
        "sapo": "Gửi gắm tâm tư đến Hội nghị Thủ tướng Chính phủ đối thoại với Nông dân năm 2024, Hợp tác xã Dịch vụ sản xuất và tiêu thụ rau an toàn Túy Loan mong muốn Thủ tướng, lãnh đạo các Bộ, ngành có cơ chế, chính sách hỗ trợ hợp tác xã tháo gỡ khó khăn về vốn đầu tư, ứng dụng công nghệ cao...",
        "date": "2024-12-13"
      },
      {
        "id": "1199825",
        "title": "Nông dân Hòa Bình gửi tới Hội nghị Thủ tướng đối thoại với nông dân nhiều vấn đề thiết yếu",
        "url": "https://danviet.vn/nong-dan-hoa-binh-gui-toi-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nhieu-van-de-thiet-yeu-20241211171238694-d1199825.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/11/1-1733911454555698491359-160-0-960-1280-crop-17339115191861931267898.jpg",
        "sapo": "Chủ tịch Hội Nông dân tỉnh Hòa Bình Đinh Thị Thảo kiến nghị Thủ tướng Chính phủ về cơ chế, chính sách, nguồn lực hỗ trợ nông dân phát triển tổ hợp tác, hợp tác xã nông nghiệp; đổi mới hình thức tổ chức sản xuất, kinh doanh theo chuỗi giá trị và thúc đẩy hợp tác, liên kết chặt chẽ giữa các địa phương...",
        "date": "2024-12-16"
      },
      {
        "id": "1200737",
        "title": "Cần cơ chế hỗ trợ kỹ thuật công nghệ, vốn đầu tư mạnh mẽ để nông dân phát triển sản xuất",
        "url": "https://danviet.vn/can-co-che-ho-tro-ky-thuat-cong-nghe-von-dau-tu-manh-me-de-nong-dan-phat-trien-san-xuat-20241216204647249-d1200737.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/16/img20241213175444-17343564258231517962275-0-0-720-1152-crop-17343564320231384378310.jpg",
        "sapo": "Gửi tâm tư đến Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024, Chủ tịch Hội Nông dân huyện Phú Lương (tỉnh Thái Nguyên) bày tỏ mong muốn các sở, ngành, địa phương và chính phủ có cơ chế hỗ trợ người nông dân ứng dụng mạnh mẽ kỹ thuật công nghệ cũng như nguồn vốn để nâng cao hiệu quả sản xuất.",
        "date": "2024-12-17"
      }
    ],
    "articleCount": 65
  },
  {
    "year": 2023,
    "id": "2912",
    "ordinal": "Lần thứ 5",
    "pm": "Thủ tướng Phạm Minh Chính",
    "date": "Tháng 12/2023",
    "location": "Hà Nội",
    "theme": "",
    "title": "Hội nghị Thủ tướng đối thoại với Nông dân Việt Nam năm 2023",
    "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/25/thu-tuong-doi-thoai-1-172982513323086851237-101-0-1351-2000-crop-17298251468021440896500.jpg",
    "summary": "Cuối năm 2023, Thủ tướng Chính phủ trực tiếp đối thoại với đại diện nông dân cả nước. Các bài “nhìn lại” tổng hợp những vấn đề nông dân đặt ra và cam kết giải quyết của Chính phủ.",
    "stats": [
      {
        "value": 100,
        "suffix": "+",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/nhin-lai-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2023-channel2912/",
    "api": "https://danviet.vn/api/chu-de/2912",
    "articles": [
      {
        "id": "1191263",
        "title": "Những đổi thay sau Hội nghị Thủ tướng đối thoại với Nông dân năm 2023",
        "url": "https://danviet.vn/nhung-doi-thay-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-bai-1-20241024130313604-d1191263.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/25/thu-tuong-doi-thoai-1-172982513323086851237-101-0-1351-2000-crop-17298251468021440896500.jpg",
        "sapo": "Trung ương Hội Nông dân Việt Nam vừa có báo cáo gửi Thủ tướng Phạm Minh Chính về kết quả thực hiện Kết luận tại Hội nghị Thủ tướng Chính phủ đối thoại với Nông dân Việt Nam năm 2023. Theo đó, sau Hội nghị, các Bộ, ngành Trung ương, địa phương đã tập trung, tích cực thực hiện nhiều giải pháp hỗ trợ nông nghiệp, nông dân, nông thôn.",
        "date": "2024-10-25"
      },
      {
        "id": "846378",
        "title": "Những đổi thay sau Hội nghị Thủ tướng đối thoại với Nông dân 2023: Đột phá từ xây dựng 5 vùng nguyên liệu",
        "url": "https://danviet.vn/nhung-doi-thay-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2023-dot-pha-tu-xay-dung-5-vung-nguyen-lieu-bai-2-2024102522363281-d846378.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/25/vung-nguyen-lieu-4-17298717740941820281749-0-134-760-1350-crop-1729871856446893949895.jpg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với Nông dân năm 2023, Bộ Nông nghiệp PTNT đã rốt ráo thực hiện các giải pháp tháo gỡ khó khăn, vướng mắc, hỗ trợ nông dân; trong đó có hướng dẫn các địa phương xây dựng các vùng nguyên liệu đạt chuẩn, sản xuất hàng hoá tập trung, quy mô lớn theo các tiêu chuẩn và yêu cầu của thị trường.",
        "date": "2024-10-26"
      },
      {
        "id": "846534",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: Đổi mới hoạt động Quỹ Hỗ trợ nông dân ngày càng hiệu quả",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-doi-moi-hoat-dong-quy-ho-tro-nong-dan-ngay-cang-hieu-qua-2024110216083027-d846534.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/2/quy-ho-tro-nong-dan-17305221378321133999016-23-0-787-1222-crop-17305393592281276106266.jpg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023, các cấp Hội Nông dân Việt Nam đã tiếp tục tập trung đẩy mạnh phát triển nguồn vốn và nâng cao hiệu quả hoạt động Quỹ Hỗ trợ nông dân (HTND). Hoạt động Quỹ HTND đã được Đảng, Nhà nước, các bộ, ngành Trung ương, cấp ủy, chính quyền các địa phương đánh giá cao.",
        "date": "2024-11-04"
      },
      {
        "id": "846623",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: Hàng triệu người dân được tiếp cận các dịch vụ viễn thông",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-hang-trieu-nguoi-dan-duoc-tiep-can-cac-dich-vu-vien-thong-2024110715322603-d846623.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/7/320370kipthoiva-17309682401261360833865-0-3-623-1000-crop-17309682958841023064385.jpg",
        "sapo": "Thực hiện chương trình phổ cập dịch vụ viễn thông công ích nhằm cung cấp dịch vụ viễn thông và Internet với chi phí thấp cho người dân ở các vùng sâu, vùng xa, biên giới và hải đảo đã giúp hàng triệu người dân nông thôn có cơ hội tiếp cận các dịch vụ viễn thông cơ bản để nâng cao chất lượng cuộc sống...",
        "date": "2024-11-08"
      },
      {
        "id": "1193803",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân: Tạo đột phá trong đào tạo nghề, phát triển nông nghiệp, nông thôn bền vững",
        "url": "https://danviet.vn/tao-dot-pha-trong-dao-tao-nghe-de-phat-trien-nong-nghiep-nong-thon-ben-vung-20241107152043244-d1193803.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/7/dao-tao-nghe-may-cho-ld-nong-thon-phu-tho-17309669286831473901883-147-0-1747-2560-crop-17309673957291442159547.jpg",
        "sapo": "Để hỗ trợ nông dân, phục hồi phát triển nông nghiệp, nông thôn bền vững, mới đây Bộ LĐTBXH đã tham vấn để Thủ tướng Chính phủ ban hành nhiều văn bản có liên quan nhằm tăng cường, đổi mới đào tạo nghề cho lao động nông thôn.",
        "date": "2024-11-09"
      },
      {
        "id": "1194461",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: Nông dân được nâng cao kỹ năng số, bán 6.000 tấn nông sản",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-nong-dan-duoc-nang-cao-ky-nang-so-ban-6000-tan-nong-san-20241111143353212-d1194461.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/11/tiktok-1-1693048178955563904789-1731309986433128185567-195-482-1059-1865-crop-17313101455751191834963.jpg",
        "sapo": "Sau Hội nghị Thủ tướng Chính phủ đối thoại với Nông dân Việt Nam năm 2023, Bộ Thông tin và Truyền thông đã triển khai nhiều chương trình tập huấn và nâng cao kỹ năng số cho nông dân, đồng thời hỗ trợ đào tạo, mở trên 5 triệu tài khoản trên sàn thương mại điện tử, tiêu thụ 6.000 tấn nông sản.",
        "date": "2024-11-12"
      },
      {
        "id": "1191702",
        "title": "Những đổi thay sau Hội nghị Thủ tướng đối thoại với Nông dân 2023: Niềm vui từ Đề án 1 triệu ha lúa",
        "url": "https://danviet.vn/nhung-doi-thay-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2023-niem-vui-tu-de-an-1-trieu-ha-lua-bai-3-20241027011237758-d1191702.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/26/074854t420copy-1729965775032506736013-12-0-637-1000-crop-17299663873971870801006.jpg",
        "sapo": "Được Thủ tướng Chính phủ phê duyệt cuối năm 2023, Đề án 1 triệu ha lúa chất lượng cao có ý nghĩa quan trọng trong định hướng chuyển đổi phương thức canh tác lúa bền vững ở ĐBSCL nhằm gia tăng giá trị hạt gạo, nâng cao thu nhập và đời sống cho người nông dân, thích ứng với biến đổi khí hậu và giảm phát thải khí nhà kính...",
        "date": "2024-10-27"
      },
      {
        "id": "1191832",
        "title": "Những đổi thay sau Hội nghị Thủ tướng đối thoại với Nông dân 2023: Chuyển đổi mạnh tư duy kinh tế nông nghiệp",
        "url": "https://danviet.vn/nhung-doi-thay-sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2023-chuyen-doi-manh-tu-duy-kinh-te-nong-nghiep-bai-4-20241027212741022-d1191832.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/27/mo-hinh-nnptnt-quang-tri-tao-cam-hung-cho-nong-dan-1704346706949305379864-17300382892341117771346-0-0-875-1401-crop-17300446105051708099027.jpeg",
        "sapo": "Theo Bộ NNPTNT, toàn ngành nông nghiệp đang thực hiện chuyển mạnh từ tư duy sản xuất nông nghiệp sang kinh tế nông nghiệp, từ phát triển đơn ngành sang hợp tác, phát triển đa ngành; thúc đẩy tích hợp đa giá trị trong sản phẩm NLTS; chuyển từ chuỗi cung ứng nông sản sang phát triển các chuỗi ngành hàng.",
        "date": "2024-10-28"
      },
      {
        "id": "1191843",
        "title": "Đổi thay sau Hội nghị Thủ tướng đối thoại với Nông dân 2023: \"Bơm\" 3,7 triệu tỷ đồng cho nông nghiệp, nông thôn",
        "url": "https://danviet.vn/bom-37-trieu-ty-dong-von-cho-nong-nghiep-nong-thon-20241027230517478-d1191843.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/28/agribank-17297537414021401878140-110-0-891-1250-crop-17301573541791688203522.jpg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với Nông dân năm 2023, Ngân hàng Nhà nước tiếp tục đề xuất sửa đổi, bổ sung Nghị định 116; tổ chức triển khai Chương trình cho vay liên kết sản xuất, chế biến và tiêu thụ sản phẩm lúa gạo chất lượng cao và phát thải thấp vùng Đồng bằng sông Cửu Long theo Quyết định 1490/QĐ-TTg...",
        "date": "2024-10-29"
      },
      {
        "id": "1192250",
        "title": "Sau Hội nghị Thủ tướng đối thoại với Nông dân: Bộ Công Thương \"bắt tay\" Tiktok, Alibaba đưa nông sản Việt lên không gian số",
        "url": "https://danviet.vn/bo-cong-thuong-bat-tay-tiktok-alibaba-dua-nong-san-viet-len-khong-gian-so-20241029230900048-d1192250.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/29/buoi-ngan-nguyen-5-17302178620782088727707-157-0-957-1280-crop-1730218017211823235934.png",
        "sapo": "Theo Bộ Công Thương, những chủ trương chính sách chỉ đạo của Thủ tướng tại Hội nghị Thủ tướng đối thoại với nông dân 2023 về hỗ trợ thị trường tiêu thụ, xúc tiến và thay đổi phương thức bán hàng nhằm đa dạng hoá thị trường, tăng giá trị nông sản Việt đã được hiện thực hoá với kết quả thành công rực rỡ.",
        "date": "2024-10-30"
      },
      {
        "id": "1192455",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân năm 2023: Dồn lực cho phát triển kinh tế tập thể",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2023-don-luc-cho-phat-trien-kinh-te-tap-the-20241030230133944-d1192455.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/30/nong-dan-viet-nam-xuat-sac-nam-2024-tai-lam-dong-6-17268872209291533602371-1730303642514338835635-63-245-991-1731-crop-1730303789517698363183.jpeg",
        "sapo": "Sau Hội nghị Thủ tướng đối thoại với Nông dân năm 2023, các cấp Hội Nông dân Việt Nam tập trung đẩy mạnh các hoạt động hướng dẫn, hỗ trợ hội viên, nông dân tham gia phát triển các hình thức kinh tế tập thể trong nông nghiệp, nông thôn; tổ hợp tác, hợp tác xã sản xuất ứng dụng công nghệ cao, chuyển đổi số.",
        "date": "2024-11-01"
      }
    ],
    "articleCount": 11
  },
  {
    "year": 2022,
    "id": "2697",
    "ordinal": "Lần thứ 4",
    "pm": "Thủ tướng Phạm Minh Chính",
    "date": "Tháng 5/2022",
    "location": "Sơn La",
    "theme": "",
    "title": "Hội nghị Thủ tướng đối thoại với nông dân năm 2022",
    "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/27/anh-1-16536473511811074118220-86-0-1336-2000-crop-1653647363942816405471.jpg",
    "summary": "Hội nghị đầu tiên do Thủ tướng Phạm Minh Chính chủ trì, tổ chức tại Sơn La trong bối cảnh dịch Covid-19 được kiểm soát và cả nước bước vào giai đoạn phục hồi, phát triển kinh tế. Khoảng 300 nông dân tiêu biểu trực tiếp đối thoại.",
    "stats": [
      {
        "value": 100,
        "suffix": "+",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-nam-2022-channel2697/",
    "api": "https://danviet.vn/api/chu-de/2697",
    "articles": [
      {
        "id": "1021861",
        "title": "Chủ tịch Hội NDVN Lương Quốc Đoàn: Tiếp sức nông dân, đối thoại đa chiều, tháo gỡ nhiều vấn đề tam nông",
        "url": "https://danviet.vn/chu-tich-hoi-ndvn-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-viet-nam-lan-thu-4-co-nhieu-diem-moi-20220527173150813-d1021861.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/27/anh-1-16536473511811074118220-86-0-1336-2000-crop-1653647363942816405471.jpg",
        "sapo": "Sáng nay, 29/5, Trung ương Hội Nông dân Việt Nam chủ trì, phối hợp tỉnh Sơn La tổ chức chuỗi sự kiện Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần thứ 4; Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 tại tỉnh Sơn La.",
        "date": "2022-05-29"
      },
      {
        "id": "1023864",
        "title": "Chủ tịch UBND nhiều tỉnh, thành phố sẽ trực tiếp đối thoại với nông dân",
        "url": "https://danviet.vn/chu-tich-ubnd-nhieu-tinh-thanh-pho-se-truc-tiep-doi-thoai-voi-nong-dan-20220607140723177-d1023864.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/6/7/chu-tich-ubnd-tinh-bac-giang-le-anh-duong-16545849522941487666041-169-0-968-1279-crop-1654584968792372663203.jpg",
        "sapo": "Ngay sau kết luận của Thủ tướng Phạm Minh Chính tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2022, nhiều tỉnh, thành phố đang khẩn trương chuẩn bị các điều kiện cần thiết để tổ chức Hội nghị Chủ tịch UBND tỉnh đối thoại với nông dân năm 2022.",
        "date": "2022-06-07"
      },
      {
        "id": "1021652",
        "title": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân: Cần có \"cú hích\" đủ mạnh về cơ chế, chính sách",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-can-co-cu-hich-du-manh-ve-co-che-chinh-sach-20220526185105828-d1021652.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/26/son-la-16535647199871277360677-4-32-692-1132-crop-16535654407122118701358.jpg",
        "sapo": "Trao đổi với phóng viên Báo Dân Việt, nhiều cán bộ, hội viên nông dân phấn khởi, đánh giá cao và đặt kỳ vọng rất lớn vào Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần thứ 4 sẽ được tổ chức vào ngày 29/5 tới đây tại tỉnh Sơn La.",
        "date": "2022-05-27"
      },
      {
        "id": "1015704",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Sốt đất nông thôn, cần siết chặt các quy định về phân lô bán nền",
        "url": "https://danviet.vn/sot-dat-nong-thon-siet-ngay-cac-quy-dinh-ve-phan-lo-ban-nen-20220427173911405-d1015704.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/4/27/sot-dat-1651054775930552418515-250-0-1500-2000-crop-16510550263131342335210.jpg",
        "sapo": "Trước thực trạng sốt đất nông thôn, nông dân bán đất ngày càng nhiều, tình trạng thu gom đất nông nghiệp sau đó phân lô bán nền gây nhiều bức xúc, Hội Nông dân xã Long Phước (Bà Rịa – Vũng Tàu) kiến nghị Chính phủ có những giải pháp quyết liệt hơn để quản lý đất đai, siết chặt các quy định về phân lô bán nền.",
        "date": "2022-04-28"
      },
      {
        "id": "1012050",
        "title": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam tại Sơn La có nhiều điểm mới",
        "url": "https://danviet.vn/bi-thu-tinh-uy-son-la-chu-tich-hoi-ndvn-thong-tin-ve-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-20220408180805043-d1012050.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/4/8/277695606560161361942722676128717230905667n-164941153666958973921-40-0-640-960-crop-16494157727151944757835.jpg",
        "sapo": "Chiều nay 8/4, tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Tỉnh ủy Sơn La tổ chức họp Ban chỉ đạo, Ban Tổ chức chuỗi sự kiện Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam, Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 tại tỉnh Sơn La.",
        "date": "2022-04-08"
      },
      {
        "id": "1021744",
        "title": "Nghị quyết “tam nông” và vị thế người nông dân",
        "url": "https://danviet.vn/nghi-quyet-tam-nong-va-vi-the-nguoi-nong-dan-20220527094811813-d1021744.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/27/mohinhtronghoasenhuecuano-1639018261068-1653619559710-16536195598431957829682-8-0-414-650-crop-16536195954061613567092.png",
        "sapo": "Sau gần 14 năm thực hiện Nghị quyết 26 ngày 05 tháng 8 năm 2008 của Hội nghị lần thứ Bảy Ban chấp hành TW đảng khóa X về Nông nghiệp, Nông dân, Nông thôn, chúng ta đã đạt được những thành tựu vô cùng ấn tượng và rất đáng tự hào.",
        "date": "2022-05-27"
      },
      {
        "id": "1024831",
        "title": "Thư cảm ơn của T.Ư Hội NDVN, Tỉnh ủy Sơn La về Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2022",
        "url": "https://danviet.vn/thu-cam-on-cua-tu-hoi-ndvn-tinh-uy-son-la-ve-hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-20220612143606803-d1024831.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/6/12/anh-bai-trang-7-1655017606231680652778-0-154-994-1744-crop-16550191518252135157092.jpg",
        "sapo": "Trung ương Hội Nông dân Việt Nam, Tỉnh ủy Sơn La đã gửi thư cảm ơn, trong đó có thư cảm ơn gửi Báo Nông thôn ngày nay/Báo điện tử Dân Việt về việc thực hiện Chương trình Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2022 thành công tốt đẹp.",
        "date": "2022-06-12"
      },
      {
        "id": "1023955",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân Việt Nam: Ngân hàng hỗ trợ nông dân hoàn thiện hồ sơ vay vốn",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nh-ho-tro-nong-dan-hoan-thien-ho-so-vay-von-20220607222852635-d1023955.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/6/7/ebee0233d4d814864dc9-16546124301391598669014-0-0-1250-2000-crop-1654615424849651126510.jpg",
        "sapo": "Ngay sau khi Ngân hàng Nhà nước Việt Nam (NHNN) ban hành Công văn số 3646/NHNN-TD, ngày 7/6, NHNN Chi nhánh Quảng Ninh đã có buổi làm việc với ông Lê Quang Thắng để xử lý các khó khăn, vướng mắc mà nông dân này đã kiến nghị tại Hội nghị Thủ tướng Chính phủ với nông dân Việt Nam diễn ra ngày 29/5 tại Sơn La.",
        "date": "2022-06-08"
      },
      {
        "id": "1022052",
        "title": "Người dân Sơn La ùn ùn đổ về Lễ khai mạc Festival trái cây và sản phẩm OCOP 2022",
        "url": "https://tv.danviet.vn/nguoi-dan-son-la-un-un-do-ve-le-khai-mac-festival-trai-cay-va-san-pham-ocop-2022-20220528225453832.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/1-16537526891381999075569-0-0-1040-1663-crop-1653753110663152561024.jpg",
        "sapo": "Tối ngày 28/5, hàng nghìn người đổ về quảng trường Tây Bắc tham dự và theo dõi Lễ khai mạc  Festival trái cây và sản phẩm OCOP Việt Nam 2022. Nhiều đoạn đường dẫn vào quảng trường bị ùn ứ. Nhiều người nói rằng, chưa bao giờ thấy TP.Sơn La đông như vậy!.",
        "date": "2022-05-28"
      },
      {
        "id": "1022059",
        "title": "Thủ tướng Phạm Minh Chính tham gia múa vòng xòe đoàn kết tại Sơn La",
        "url": "https://tv.danviet.vn/thu-tuong-pham-minh-chinh-tham-gia-mua-vong-xoe-doan-ket-tai-son-la-20220528232316667.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/6-16537544289271758615269-0-3-1164-1865-crop-1653754930046975131964.jpg",
        "sapo": "Cuối chương trình Lễ khai mạc Festival trái cây và sản phẩm OCOP Việt Nam 2022, Thủ tướng Chính phủ Phạm Minh Chính cùng Chủ tịch Hội Nông dân Việt Nam Lương Quốc Đoàn đã tham gia múa vòng xòe đoàn kết cùng đông đảo nghệ sĩ và người dân Sơn La.",
        "date": "2022-05-28"
      },
      {
        "id": "1022060",
        "title": "Hình ảnh Thủ tướng Phạm Minh Chính khảo sát phương án nâng cấp sân bay 2.500 tỷ đồng tại Sơn La",
        "url": "https://tv.danviet.vn/thu-tuong-pham-minh-chinh-khao-sat-phuong-an-nang-cap-san-bay-2500-ty-dong-tai-son-la-20220528234644506.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/3-1653754462272420565080-83-0-1333-2000-crop-1653754701501973356730-4-0-1217-1941-crop-16537564915711844071805.jpg",
        "sapo": "Chiều ngày 28/5, Thủ tướng Chính phủ Phạm Minh Chính đã khảo sát Cảng hàng không Nà Sản (huyện Mai Sơn, tỉnh Sơn La), đồng thời nghe báo cáo về phương án nâng cấp, cải tạo sân bay được xây dựng từ thời Pháp này.",
        "date": "2022-05-28"
      },
      {
        "id": "1022070",
        "title": "Loạt khoảnh khắc đẹp tại Lễ khai mạc Festival trái cây và sản phẩm OCOP năm 2022",
        "url": "https://tv.danviet.vn/loat-khoanh-khac-dep-tai-le-khai-mac-festival-trai-cay-va-san-pham-ocop-nam-2022-20220529011027794.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/3-16537612165151284981931-0-0-1250-2000-crop-1653761344507281013631.jpg",
        "sapo": "Nhiều tiết mục văn nghệ đặc sắc đã diễn ra tại Lễ khai mạc Festival trái cây và sản phẩm OCOP năm 2022. Đây là chương trình nằm trong chuỗi Hội nghị Thủ tướng Chính phủ đối thoại với nông dân 2022 được tổ chức tại Sơn La.",
        "date": "2022-05-29"
      },
      {
        "id": "1022132",
        "title": "Hình ảnh Thủ tướng Phạm Minh Chính tham dự Hội nghị đối thoại với nông dân Việt Nam",
        "url": "https://tv.danviet.vn/hinh-anh-thu-tuong-pham-minh-chinh-tham-du-hoi-nghi-doi-thoai-voi-nong-dan-viet-nam-20220529131853326.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/3-16538048863751741462055-0-0-1250-2000-crop-16538050245821217268577.jpg",
        "sapo": "Sáng nay (29/5) tại tỉnh Sơn La, Thủ tướng Chính phủ Phạm Minh Chính đã tham dự Hội nghị đối thoại với nông dân Việt Nam lần thứ 4. Đây là sự kiện được mong chờ nhất trong năm của nông dân Việt Nam.",
        "date": "2022-05-29"
      },
      {
        "id": "1023293",
        "title": "Mỗi dự án chế biến nông lâm thủy sản được hỗ trợ tới 15 tỷ đồng",
        "url": "https://danviet.vn/moi-du-an-che-bien-nong-lam-thuy-san-duoc-ho-tro-toi-15-ty-dong-20220604102234219-d1023293.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/6/4/che-bien-rau-1653014069388-16530140706642030948206-16543126311341641433966-20-0-436-665-crop-16543126402231499439451.jpg",
        "sapo": "Tại Hội nghị Thủ tướng đối thoại với nông dân ngày 29/5 tổ chức tại Sơn La, nông dân Nguyễn Thị Trâm đến từ Lương Tài (Bắc Ninh) có hỏi về chính sách hỗ trợ đối với các dự án chế biến nông sản dành cho các doanh nghiệp nhỏ và siêu nhỏ. Liên quan đến câu hỏi này, Bộ KHĐT đã có trả lời bằng văn bản,",
        "date": "2022-06-04"
      },
      {
        "id": "1023153",
        "title": "Sau Hội nghị Thủ tướng đối thoại với nông dân, Bộ LĐTBXH xây dựng đề án đổi mới đào tạo nghề lao động nông thôn",
        "url": "https://danviet.vn/sau-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-bo-ldtbxh-xay-dung-de-an-doi-moi-dao-tao-nghe-lao-dong-nong-thon-20220603133232627-d1023153.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/6/3/ed325b9334d0dd8e84c1-16542316922831417260581-0-29-680-1117-crop-16542371960541293268133.jpg",
        "sapo": "Tại Hội nghị Thủ tướng đối thoại với ND ngày 29/5 vừa qua, nhiều nông dân đã đặt câu hỏi liên quan đến việc đào tạo nghề cho lao động nông thôn. Liên quan đến vấn đề này, Bộ Bộ Lao động – Thương binh và Xã hội (LĐTBXH) đã có trả lời như sau.",
        "date": "2022-06-03"
      },
      {
        "id": "1022053",
        "title": "Thủ tướng Chính phủ Phạm Minh Chính dự lễ khai mạc Festival trái cây và sản phẩm OCOP năm 2022",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-pham-minh-chinh-du-le-khai-mac-festival-trai-cay-va-san-pham-ocop-nam-2022-20220528225542848-d1022053.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/fa69d3578244421a1b55-1653752130200303758194-161-157-1268-1929-crop-16537532535691423309440.jpg",
        "sapo": "Tối ngày 28/5, tại thành phố Sơn La, Thủ tướng Chính phủ Phạm Minh Chính dự Lễ khai mạc Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 do tỉnh Sơn La phối hợp với Trung ương Hội Nông dân Việt Nam tổ chức.",
        "date": "2022-05-28"
      },
      {
        "id": "1022071",
        "title": "Tổng thuật: Thủ tướng đối thoại với nông dân năm 2022",
        "url": "https://danviet.vn/tong-thuat-thu-tuong-doi-thoai-voi-nong-dan-nam-2022-20220529013108203-d1022071.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/52f57a437a5fba01e34e-1653799401133508010672-520-323-1244-1481-crop-1653799429867765340494.jpg",
        "sapo": "Ngày 29/5, sự kiện được mong chờ nhất trong năm của nông dân Việt Nam chính thức diễn ra, người đứng đầu Chính phủ và đại diện các bộ ngành sẽ trực tiếp đối thoại với nông dân để tìm ra đáp án và động lực thúc đẩy nông nghiệp, nông thôn cất cánh.",
        "date": "2022-05-29"
      },
      {
        "id": "1021760",
        "title": "Bộ trưởng Bộ NNPTNT Lê Minh Hoan: Nông dân luôn ở vị trí trung tâm của nông nghiệp, nông thôn",
        "url": "https://danviet.vn/bo-truong-le-minh-hoan-nong-dan-luon-o-vi-tri-trung-tam-cua-nong-nghiep-nong-thon-20220527104720547-d1021760.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/27/anh2-1653618878088971567878-0-0-1250-2000-crop-16536231266711016315932.jpg",
        "sapo": "Trao đổi với Dân Việt về sự kiện Hội nghị Thủ tướng đối thoại với nông dân Việt Nam vào ngày 29/5, Bộ trưởng Bộ NNPTNT Lê Minh Hoan khẳng định, Hội nghị diễn ra ngay sau khi Chính phủ phê duyệt Chiến lược phát triển nông nghiệp, nông thôn bền vững đến năm 2030, tầm nhìn đến năm 2030 nên càng có ý nghĩa lớn.",
        "date": "2022-05-28"
      },
      {
        "id": "1022900",
        "title": "Mở “lối ra” cho nông sản: Cần chính sách thu hút doanh nghiệp đầu tư cho chế biến sâu",
        "url": "https://danviet.vn/mo-loi-ra-cho-nong-san-can-chinh-sach-thu-hut-doanh-nghiep-dau-tu-cho-che-bien-sau-20220602102644724-d1022900.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/6/2/nha-may-10-1654139093503239574469-0-0-1250-2000-crop-1654140302022628511678.jpg",
        "sapo": "Sản xuất nông nghiệp của chúng ta vẫn chủ yếu đang ở dạng sản xuất thô, các sản phẩm nông sản xuất khẩu cũng dưới dạng thô, chưa có chế biến sâu, nên giá trị thu về còn thấp. Xin Thủ tướng cho biết, Chính phủ có giải pháp gì để hỗ trợ chế biến nông sản cho nông dân?",
        "date": "2022-06-02"
      },
      {
        "id": "1022455",
        "title": "Giá thức ăn chăn nuôi phi mã, nông dân \"treo\" chuồng, Thủ tướng chỉ đạo phát triển vùng nguyên liệu ngô, đậu tương",
        "url": "https://danviet.vn/gia-thuc-an-chan-nuoi-phi-ma-nong-dan-treo-chuong-thu-tuong-chi-dao-trong-ngo-dau-tuong-20220531100748885-d1022455.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/31/thu-tuong-doi-thoai-voi-nong-dan-1-16539663680561747547874-0-0-1250-2000-crop-16539663813451990507664.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần thứ tư ngày 29/5 tại Sơn La, Thủ tướng Phạm Minh Chính chỉ đạo các ngành chức năng tìm giải pháp, điều chỉnh chính sách để phát triển vùng nguyên liệu ngô, đậu tương, liên kết trồng ngô, đậu tương, từ đó giảm phụ thuộc vào nhập khẩu.",
        "date": "2022-05-31"
      },
      {
        "id": "1022359",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Nông dân hài lòng, phấn khởi và nhiều kỳ vọng sau đối thoại",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nong-dan-hai-long-va-nhieu-ky-vong-sau-doi-thoai-20220530172731421-d1022359.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/30/anh-thu-tuong-1653905506058414556587-42-0-1292-2000-crop-16539055743511331018505.jpg",
        "sapo": "Nhiều nông dân phấn khởi và bày tỏ tin tưởng, sau Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam, với những chỉ đạo sát sao của người đứng đầu Chính phủ, sự vào cuộc tích cực của Hội Nông dân Việt Nam và lãnh đạo các bộ, ngành, những vướng mắc, khó khăn của người nông dân dần được tháo gỡ.",
        "date": "2022-05-30"
      },
      {
        "id": "1022360",
        "title": "Chuyên gia nông nghiệp Hoàng Trọng Thủy: Mong có 3 “đầu kéo” mạnh cho nông nghiệp, nông dân, nông thôn",
        "url": "https://danviet.vn/chuyen-gia-mong-doi-co-3-dau-keo-du-manh-cho-linh-vuc-nong-nghiep-nong-dan-nong-thon-20220530173512982-d1022360.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/30/thu-tuong-6-16539054416271091523473-0-0-1250-2000-crop-16539054756291872026561.jpeg",
        "sapo": "“Tôi rất đồng tình với gợi ý của Thủ tướng là người nông dân phải chủ động vươn mình, phát huy lợi thế, bớt tư tưởng trông chờ. Sự đổi mới, sáng tạo cũng phải bắt đầu từ bản thân người nông dân chứ không ai khác” – chuyên gia nông nghiệp Hoàng Trọng Thủy nhấn mạnh khi trao đổi với phóng viên Dân Việt.",
        "date": "2022-05-30"
      },
      {
        "id": "1022347",
        "title": "Giám đốc Học viện Nông nghiệp Việt Nam: Cần có cơ chế \"đặt hàng\" đào tạo nông dân",
        "url": "https://danviet.vn/giam-doc-hoc-vien-nong-nghiep-viet-nam-noi-ve-co-che-dat-hang-dao-tao-nong-dan-20220530161746135-d1022347.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/30/nguyen-thi-lan-16539018169871285788763-49-0-1299-2000-crop-1653902233332996945935.jpg",
        "sapo": "Trao đổi thêm về vấn đề đào tạo nghề hiệu quả cho lao động nông thôn tại Hội nghị Thủ tướng đối thoại với nông dân Việt Nam lần thứ tư ngày 29/5, GS.TS Nguyễn Thị Lan, Đại biểu Quốc hội, Giám đốc Học viện Nông nghiệp Việt Nam cho biết, các địa phương cần \"đặt hàng\" các cơ sở giáo dục đào tạo nhân lực ngành nông nghiệp.",
        "date": "2022-05-30"
      },
      {
        "id": "1022254",
        "title": "Lời cảm ơn của Ban Tổ chức Hội nghị Thủ tướng đối thoại với nông dân Việt Nam năm 2022",
        "url": "https://danviet.vn/loi-cam-on-cua-ban-to-chuc-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-viet-nam-nam-2022-20220530093810998-d1022254.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/30/2d76775fd64d16134f5c-1653790121880807719464-0-29-780-1278-crop-16538781769621531241428.jpg",
        "sapo": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2022 diễn ra ngày 29/5 tại tỉnh Sơn La do Trung ương Hội Nông dân Việt Nam chủ trì, phối hợp với tỉnh Sơn La tổ chức; Báo Nông thôn Ngày nay/điện tử Dân Việt thực hiện đã thành công tốt đẹp.",
        "date": "2022-05-30"
      },
      {
        "id": "1022090",
        "title": "Video: Thủ tướng Phạm Minh Chính kết luận tại Hội nghị đối thoại với nông dân năm 2022",
        "url": "https://danviet.vn/video-thu-tuong-pham-minh-chinh-ket-luan-tai-hoi-nghi-doi-thoai-voi-nong-dan-nam-2022-20220529071803736-d1022090.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/thu-tuong-ket-luan-9-van-de-lon-tai-hoi-nghi-doi-thoai-voi-nong-dan-16538083840761334749276-177-0-1377-1920-crop-1653808395635215764859.jpg",
        "sapo": "Sáng 29/5 tại tỉnh Sơn La, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần thứ 4 đã diễn ra với chủ đề \"Tiếp sức, hỗ trợ nông dân, phục hồi, phát triển nông nghiệp, nông thôn bền vững\". Thủ tướng Phạm Minh Chính đã có phần phát biểu tại Hội nghị với những kết luận quan trọng.",
        "date": "2022-05-29"
      },
      {
        "id": "1022066",
        "title": "Phát triển kinh tế nông thôn để nông dân “ly nông không ly hương”",
        "url": "https://danviet.vn/phat-trien-kinh-te-nong-thon-de-nguoi-nong-dan-ly-nong-khong-ly-huong-20220529002329359-d1022066.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/anh-hn-thu-tuong-doi-thoai-16537582047251423504885-0-0-406-650-crop-1653758215454459870010.jpg",
        "sapo": "Đại dịch Covid-19 đã gây ra làn sóng di cư hồi hương. Đây cũng là trăn trở của nhiều cán bộ, hội viên nông dân gửi đến Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần thứ 4, năm 2022, do Trung ương Hội Nông dân Việt Nam chủ trì, phối hợp tỉnh Sơn La tổ chức sáng nay 29/5.",
        "date": "2022-05-29"
      },
      {
        "id": "1022117",
        "title": "Bộ trưởng Bộ Công thương Nguyễn Hồng Diên: Để xuất khẩu nông sản sang Trung Quốc, trước hết cần thay đổi tư duy sản xuất",
        "url": "https://danviet.vn/bo-truong-cong-thuong-nguyen-hong-dien-de-xuat-khau-nong-san-sang-trung-quoc-can-thay-doi-tu-duy-20220529113402734-d1022117.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/bo-truong-bo-cong-thuong-16537978121931707380809-86-0-1336-2000-crop-16537985830701374424181.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam, Bộ trưởng Bộ Công thương Nguyễn Hồng Diên cho biết, để giải quyết việc xuất khẩu nông sản sang chính ngạch Trung Quốc, điều trước hết cần chuyển đổi tư duy sản xuất nông nghiệp. Đó là chuyển đổi từ tư duy sản xuất tự phát sang sản xuất theo tín hiệu thị trường.",
        "date": "2022-05-29"
      },
      {
        "id": "1021734",
        "title": "Video: Những kỳ vọng khi Thủ tướng Phạm Minh Chính đối thoại với nông dân",
        "url": "https://tv.danviet.vn/video-nhung-ky-vong-khi-thu-tuong-pham-minh-chinh-doi-thoai-voi-nong-dan-20220527085112093.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/2-16537392895821489768486-16537401183581218447119-1653788415528492915339-254-426-1071-1732-crop-1653788474037426234329.jpeg",
        "sapo": "Nhiều tâm tư và kỳ vọng được gửi gắm tới Thủ tướng Chính phủ Phạm Minh Chính khi Hội nghị Thủ tướng đối thoại với nông dân lần thứ 4 được tổ chức tại Sơn La với chủ đề \"Tiếp sức, hỗ trợ nông dân, phục hồi, phát triển nông nghiệp, nông thôn bền vững\".",
        "date": "2022-05-29"
      },
      {
        "id": "1022073",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Nông dân sản xuất, kinh doanh mong được vay vốn kịp thời, thuận lợi",
        "url": "https://danviet.vn/trong-dau-tay-lai-800-trieu-vu-chang-trai-nguoi-thai-son-la-mong-vay-von-kip-thoi-thuan-loi-20220529015458365-d1022073.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/dau-tay-son-la-1653761348717345256213-0-0-720-1152-crop-1653761356972542196506.jpg",
        "sapo": "Mặc dù mới làm quen với cây dâu tây từ năm 2019, xong hầu như vụ nào anh Vì Văn Tùng và các thành viên HTX Đông Sang (Mộc Châu - Sơn La) cũng thu lãi cao. Vào mùa thu hoạch, thương lái tíu tít đến tận vườn thu mua, vì vậy HTX rất mong muốn mở rộng diện tích sản xuất nhằm tăng thu nhập.",
        "date": "2022-05-29"
      },
      {
        "id": "1022044",
        "title": "Chủ tịch Hội NDVN Lương Quốc Đoàn: Kết nối, quảng bá trái cây và sản phẩm OCOP Việt Nam ra thế giới",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-viet-nam-luong-quoc-doan-dua-trai-cay-san-pham-ocop-viet-nam-ra-the-gioi-20220528213600691-d1022044.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/chu-tich-hoi-nong-dan-viet-nam-1653752480552384755383-58-0-701-1029-crop-16537525307701734272858.jpg",
        "sapo": "Đó là nhấn mạnh của Chủ tịch Hội Nông dân Việt Nam Lương Quốc Đoàn tại Lễ khai mạc Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 do Trung ương Hội Nông dân Việt Nam phối hợp với tỉnh Sơn La tổ chức vào tối nay, ngày 28/5, tại Quảng trường Tây Bắc, TP Sơn La.",
        "date": "2022-05-28"
      },
      {
        "id": "1021623",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Xây dựng Lào Cai thành Trung tâm logictics, nông sản sang Trung Quốc nhanh hơn",
        "url": "https://danviet.vn/tam-tu-kien-nghi-gui-thu-tuong-de-nghi-xay-dung-trung-tam-logictics-tai-lao-cai-20220526165549665-d1021623.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/26/lao-cai-16535579138741803255555-0-0-393-629-crop-16535579213371166049572.jpg",
        "sapo": "Gửi tâm tư, kiến nghị đến Thủ tướng trước thềm Hội nghị Thủ tướng đối thoại với nông dân lần thứ tư tại Sơn La ngày 29/5, Hội Nông dân tỉnh Lào Cai đề nghị Chính phủ đầu tư xây dựng Trung tâm logictics tại tỉnh Lào Cai, góp phần phục vụ hoạt động xuất khẩu nông sản sang Trung Quốc.",
        "date": "2022-05-28"
      },
      {
        "id": "1022026",
        "title": "Hình ảnh Thủ tướng Phạm Minh Chính thăm mô hình sản xuất nông nghiệp tiêu biểu tại Sơn La",
        "url": "https://danviet.vn/thu-tuong-pham-minh-chinh-tham-mo-hinh-san-xuat-nong-nghiep-tieu-bieu-tai-son-la-20220528191609837-d1022026.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/6-16537392896351097726412-83-0-1333-2000-crop-1653739941091470499912.jpg",
        "sapo": "Chiều nay (28/5), Thủ tướng Chính phủ Phạm Minh Chính đã đến thăm một số mô hình sản xuất nông nghiệp tiêu biểu tại huyện Mai Sơn (tỉnh Sơn La).",
        "date": "2022-05-28"
      },
      {
        "id": "1021998",
        "title": "Hình ảnh Sơn La sẵn sàng cho Lễ khai mạc Festival trái cây và sản phẩm OCOP Việt Nam 2022",
        "url": "https://danviet.vn/hinh-anh-son-la-san-sang-cho-le-khai-mac-festival-trai-cay-va-san-pham-ocop-viet-nam-2022-20220528162127194-d1021998.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/5-16537289873371864795469-93-0-1343-2000-crop-16537295954691183656744.jpg",
        "sapo": "Mọi công tác chuẩn bị cho Festival trái cây và sản phẩm OCOP Việt Nam 2022 đã hoàn tất và sẵn sàng cho Lễ khai mạc diễn ra vào tối nay (28/5). Đây là chương trình nằm trong chuỗi sự kiện Thủ tướng Chính phủ đối thoại với nông dân diễn ra vào sáng ngày 29/5.",
        "date": "2022-05-28"
      },
      {
        "id": "1021962",
        "title": "Tâm tư, kiến nghị Thủ tướng: Cần giải pháp hỗ trợ HTX trong việc chuyển đổi đất công ích phục vụ sản xuất",
        "url": "https://danviet.vn/tam-tu-kien-nghi-thu-tuong-can-giai-phap-ho-tro-htx-trong-viec-chuyen-doi-dat-cong-ich-phuc-vu-san-xuat-20220528114353229-d1021962.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/img20220528113356-1653712547431110404676-240-355-1261-1988-crop-16537128975181576599658.jpg",
        "sapo": "Đó là một trong những tâm tư, kiến nghị của nông dân Phạm Văn Lộc - Chủ nhiệm Dự án hệ sinh thái nông nghiệp bền vững UCA tại Hà Nội và một số tỉnh thành trên cả nước.",
        "date": "2022-05-28"
      },
      {
        "id": "1021966",
        "title": "Hàng trăm tác phẩm “trình làng” tại triển lãm “Ảnh đẹp về trái cây” ở Sơn La",
        "url": "https://tv.danviet.vn/hang-tram-tac-pham-trinh-lang-tai-trien-lam-anh-dep-ve-trai-cay-o-son-la-20220528122355367.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/hang-tram-tac-pham-trinh-lang-trien-lam-anh-dep-ve-trai-cay-o-son-la-1653715311459593942552-0-192-1080-1920-crop-16537153285071787020610.jpg",
        "sapo": "Sáng 28/5, Tại Quảng trường Tây Bắc, thành phố Sơn La (Sơn La), Ban Tổ chức chuỗi sự kiện tỉnh Sơn La đã tổ chức khai mạc triển lãm “Ảnh đẹp về trái cây” trong chương trình “Festival trái cây và thương hiệu sản phẩm OCOP Việt Nam năm 2022 tại tỉnh Sơn La”.",
        "date": "2022-05-28"
      },
      {
        "id": "1021953",
        "title": "Thủ tướng Phạm Minh Chính: Đưa Mộc Châu thành trung tâm kinh tế lớn, trung tâm phát triển của Tây Bắc",
        "url": "https://danviet.vn/thu-tuong-du-le-khoi-cong-to-hop-thien-duong-sua-moc-chau-20220528104938295-d1021953.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/b2-1653710228000962647841-0-0-400-640-crop-1653710235649817401716.jpeg",
        "sapo": "Trong chuỗi sự kiện Thủ tướng đối thoại với nông dân, sáng nay 28/5, Thủ tướng Chính phủ Phạm Minh Chính đã dự lễ khởi công tổ hợp \"Thiên đường sữa Mộc Châu” tại Mộc Châu (Sơn La).",
        "date": "2022-05-28"
      },
      {
        "id": "1021957",
        "title": "Nông dân xã vùng cao Sơn La đi từ 3 giờ sáng háo hức được đối thoại với Thủ tướng Chính phủ",
        "url": "https://danviet.vn/ghi-nhanh-nong-dan-hao-hung-ve-son-la-de-duoc-doi-thoai-voi-thu-tuong-chinh-phu-20220528111851718-d1021957.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/thu-tupng-1653714054748889250162-0-0-352-563-crop-16537143220561268970489.png",
        "sapo": "Ghi nhanh của PV Dân Việt cho thấy, ngay từ sáng sớm ngày 28/5, nhiều nông dân từ khắp các tỉnh, thành cả nước đã về Sơn La để tham dự Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam lần thứ 4 sẽ diễn ra vào sáng mai 29/5.",
        "date": "2022-05-28"
      },
      {
        "id": "1021960",
        "title": "Thủ tướng thị sát dự án cao tốc nghìn tỷ Hòa Bình-Mộc Châu, xây dựng cầu Hoà Sơn thành điểm nhấn trên sông Đà",
        "url": "https://danviet.vn/thu-tuong-thi-sat-du-an-cao-toc-nghin-ty-hoa-binh-moc-chau-20220528114007685-d1021960.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/28/img5404-1653705046179867338964-1653709956742-165370995684918030970-0-0-1250-2000-crop-16537110993761990291253.jpg",
        "sapo": "Ngày 28/5, Thủ tướng Phạm Minh Chính đi kiểm tra, khảo sát, dự lễ khởi công một số công trình, dự án lớn trên địa bàn tỉnh Sơn La, thị sát hiện trường dự án cao tốc Hòa Bình - Mộc Châu.",
        "date": "2022-05-28"
      },
      {
        "id": "1021709",
        "title": "Festival trái cây, sản phẩm OCOP Việt Nam năm 2022 tại Sơn La được truyền hình trực tiếp trên VTV1 Đài Truyền hình Việt Nam",
        "url": "https://danviet.vn/festival-trai-cay-san-pham-ocop-viet-nam-nam-2022-tai-son-la-duoc-truyen-hinh-truc-tiep-tren-vtv1-dai-truyen-hinh-viet-nam-20220527005515317-d1021709.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/27/img-3790-1653586659642393787259-83-0-1333-2000-crop-16535866855121251169360.jpg",
        "sapo": "Tối ngày (26/5), tại Quảng trường Tây Bắc, tại Sơn La đã diễn ra buổi tổng duyệt chương trình nghệ thuật khai mạc Festival trái cây, sản phẩm OCOP Việt Nam năm 2022 tại Sơn La.",
        "date": "2022-05-27"
      },
      {
        "id": "1021657",
        "title": "44 điểm cầu trong nước, quốc tế theo dõi Festival \r\ntrái cây lớn nhất từ trước đến nay tại Sơn La",
        "url": "https://danviet.vn/44-diem-cau-trong-nuoc-quoc-te-theo-doi-festival-trai-cay-lon-nhat-tu-truoc-den-nay-tai-son-la-20220526191253056-d1021657.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/26/son-la-1653580020790645835890-25-0-608-933-crop-1653580032316793784937.jpg",
        "sapo": "Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 sẽ bắt đầu từ ngày 28/5 đến ngày 1/6 tại Sơn La. Chương trình nằm trong chuỗi sự kiện Thủ tướng Chính phủ đối thoại với nông dân Việt Nam.",
        "date": "2022-05-27"
      },
      {
        "id": "829298",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: \"Kho báu triệu đô\" rất cần cơ chế, chính sách đặc thù",
        "url": "https://danviet.vn/cay-duoc-lieu-kho-bau-trieu-do-rat-can-co-che-chinh-sach-dac-thu-2022052616540048-d829298.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/26/2607192076219658757155804300590137173988094n-16535579094561531941992-0-0-1121-1794-crop-16535581998631780042128.jpg",
        "sapo": "Thiên nhiên ưu đãi đã ban tặng cho Việt Nam tới hơn 5.000 loài thảo dược, dược liệu quý. Nhưng tiếc thay người Việt lại chưa biết biến \"món quà từ thiên đường\" thành vàng, thành những hàng hóa có giá trị cao, dễ sử dụng rộng rãi.",
        "date": "2022-05-27"
      },
      {
        "id": "1021588",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: \"Ngấm đòn\" biến đổi khí hậu, dân vùng ĐBSCL mong được hỗ trợ sinh kế",
        "url": "https://danviet.vn/chu-be-ca-long-khong-lo-tren-song-hau-chuyen-huong-nuoi-toan-ca-la-de-tang-thu-nhap-20220526143631459-d1021588.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/26/nuoi-ca-dac-san-1653547491954888574582.jpg",
        "sapo": "Do biến đổi khí hậu, xây dựng thủy điện ở thượng nguồn, lượng nước về Đồng bằng sông Cửu Long (ĐBSCL) có nhiều biến động đã tác động đến nguồn lợi thủy sản, sinh kế của người dân. Bà con ở đây rất mong Thủ tướng Chính phủ có thêm chính sách, biện pháp thiết thực để hỗ trợ, đảm bảo sinh kế cho người dân yên tâm sản xuất.",
        "date": "2022-05-26"
      },
      {
        "id": "1021562",
        "title": "Kỳ vọng có thông điệp, chính sách mạnh mẽ hơn cho lĩnh vực tam nông",
        "url": "https://danviet.vn/ky-vong-co-thong-diep-chinh-sach-manh-me-hon-cho-tam-nong-20220526112252065-d1021562.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/26/nha-bao-luu-quang-dinh-16535384528711217003968-0-0-400-640-crop-1653538642129349876541.jpg",
        "sapo": "Sau 3 lần đối thoại trực tiếp với nông dân các địa phương, nhiều vấn đề đã được người đứng đầu Chính phủ chỉ đạo xử lý, giải quyết kịp thời. Tại Hội nghị Thủ tướng đối thoại với nông dân lần thứ 4, bà con bày tỏ mong muốn Chính phủ, các bộ ngành có thông điệp mạnh mẽ hơn, quyết sách lớn hơn cho lĩnh vực tam nông.",
        "date": "2022-05-26"
      },
      {
        "id": "1021538",
        "title": "Qua 3 lần Thủ tướng đối thoại với nông dân, nhiều rào cản phát triển nông nghiệp được gỡ bỏ",
        "url": "https://danviet.vn/qua-3-lan-thu-tuong-doi-thoai-voi-nong-dan-nhieu-rao-can-phat-trien-nong-nghiep-duoc-go-20220526093406633-d1021538.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/26/thu-tuong-doi-thoai-voi-nong-dan-16531120755912097064608-0-0-937-1500-crop-16535320647171842915605.jpg",
        "sapo": "Ngày 29/5 tới, Hội nghị Thủ tướng đối thoại với nông dân Việt Nam lần thứ tư sẽ được tổ chức tại Sơn La. Qua 3 lần đối thoại, Hội nghị đã đạt được nhiều thành công, góp phần thúc đẩy phát triển nông nghiệp, nông thôn, nâng cao đời sống người dân.",
        "date": "2022-05-26"
      },
      {
        "id": "1021484",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Giám đốc HTX trồng khoai sọ đặc sản mong được hỗ trợ vốn đầu tư công nghệ cao",
        "url": "https://danviet.vn/giam-doc-htx-trong-khoai-so-dac-san-son-la-mong-duoc-ho-tro-von-dau-tu-cong-nghe-cao-20220525190507192-d1021484.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/25/khoai-so-son-la-2-16534795464631194420247-0-216-447-931-crop-16534795812291534536680.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2022, anh Lương Quốc Huy – Giám đốc HTX Hưng Thịnh, xã Muổi Nọi, huyện Thuận Châu (Sơn La) mong muốn Thủ tướng, lãnh đạo các Bộ, ngành có cơ chế, chính sách hỗ trợ nông dân tháo gỡ khó khăn về vốn, đầu tư công nghệ cao để giảm chi phí sản xuất.",
        "date": "2022-05-25"
      },
      {
        "id": "1021084",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Tổ chức lại hệ thống thú y, khuyến nông giúp nông dân yên tâm sản xuất",
        "url": "https://danviet.vn/thieu-can-bo-thu-y-khuyen-nong-nong-dan-loay-hoay-ung-pho-dich-benh-20220523180950942-d1021084.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/25/6img9866-16534408947861943397857-98-211-1216-2000-crop-16534412837351986605215.jpg",
        "sapo": "Gửi tâm tư, kiến nghị đến Thủ tướng trước thềm Hội nghị Thủ tướng đối thoại với nông dân lần thứ tư tại Sơn La ngày 29/5 tới, nhiều chuyên gia, nông nghiệp mong muốn Chính phủ, ngành chức năng, các địa phương kiện toàn lại hệ thống thú y, khuyến nông cơ sở phục vụ cho việc giám sát dịch bệnh, chuyển giao tiến bộ kỹ thuật.",
        "date": "2022-05-25"
      },
      {
        "id": "1017988",
        "title": "PGS.TS Đào Thế Anh: Cần quyết sách nhanh cho các vấn đề tam nông ở Hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/can-quyet-sach-nhanh-mang-tinh-lien-nganh-giai-quyet-van-de-gia-vat-tu-nong-nghiep-tang-phi-ma-20220509120011287-d1017988.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/23/thu-tuong-doi-thoai-voi-nong-dan-16533214515531464322286-63-0-1313-2000-crop-16533218996731031733807.jpg",
        "sapo": "Trao đổi với Dân Việt, PGS.TS Đào Thế Anh, Phó Giám đốc Viện Khoa học Nông nghiệp Việt Nam cho rằng, Hội nghị Thủ tướng đối thoại với nông dân lần thứ tư tại Sơn La vào ngày 29/5 tới được tổ chức đúng thời điểm nền kinh tế, trong đó có nông nghiệp đang phục hồi sau dịch Covid-19 nên có ý nghĩa rất lớn.",
        "date": "2022-05-24"
      },
      {
        "id": "1020930",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Giám đốc hợp tác xã mong được thuê đất lâu dài để yên tâm sản xuất",
        "url": "https://danviet.vn/tam-tu-kien-nghi-gui-thu-tuong-giam-doc-hop-tac-xa-mong-duoc-thue-dat-lau-dai-de-yen-tam-san-xuat-20220523081533282-d1020930.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/23/ha-nam4-16413131754591684134382-16413146533791269374251-16532676632311744897567-0-64-366-650-crop-16532756388281886372401.jpeg",
        "sapo": "Anh Hoàng Văn Thường, Giám đốc HTX chăn nuôi và nuôi trồng thủy sản Bình Thành, xã Tiêu Động, huyện Bình Lục (Hà Nam) mong muốn Thủ tướng Chính phủ, lãnh đạo các Bộ, ngành sẽ có cơ chế, chính sách \"mở\" cho HTX để được thuê đất lâu dài, từ đó người dân yên tâm sản xuất.",
        "date": "2022-05-23"
      },
      {
        "id": "1020560",
        "title": "Thủ tướng sẽ đối thoại với nông dân vào ngày 29/5",
        "url": "https://danviet.vn/thu-tuong-se-doi-thoai-voi-nong-dan-vao-ngay-29-5-20220521112102916-d1020560.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/21/thu-tuong-16531133455431904340664-0-68-370-660-crop-1653113513698655408304.jpeg",
        "sapo": "Ngày 29/5 tới, Hội nghị Thủ tướng đối thoại với nông dân Việt Nam sẽ được tổ chức tại Sơn La. Đây là lần thứ tư người đứng đầu Chính phủ trực tiếp đối thoại, giải đáp các tâm tư, nguyện vọng, vướng mắc của nông dân trong quá trình phát triển nông nghiệp, nông thôn.",
        "date": "2022-05-22"
      },
      {
        "id": "1017390",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Vẫn còn nông dân \"sống dở, chết dở\" vì phân bón giả",
        "url": "https://danviet.vn/kinh-doanh-buon-ban-phan-bon-gia-tran-lan-khap-noi-20220506121157115-d1017390.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/6/dam-16323703177311571930535-16518133339832100703018-0-0-972-1555-crop-16518133385351402617916.jpg",
        "sapo": "Hiện nay, tình trạng kinh doanh, buôn bán phân bón giả vẫn còn tồn tại khiến cơ quan chức năng đau đầu, đẩy nhiều nông dân vào tình cảnh \"sống dở, chết dở\".",
        "date": "2022-05-06"
      },
      {
        "id": "1015212",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Làm thế nào để người trẻ không “bỏ rừng xuống phố”?",
        "url": "https://danviet.vn/hotgirl-9x-chia-se-kinh-nghiem-cua-nguoi-tre-bo-pho-ve-que-20220425153853523-d1015212.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/4/25/y3-1650875379915804845436-808-0-1839-1650-crop-1650875387173365011486.jpg",
        "sapo": "\"Gần đây xu thế người trẻ \"bỏ phố về quê\" được nhắc đến nhiều nhưng người ta lại ít nhắc đến việc người trẻ ở lại quê làm giàu. Mỗi lần về quê chỉ thấy toàn người già, trẻ em, tôi luôn tự hỏi liệu có cách nào níu chân người trẻ không bỏ rừng xuống phố không?\"",
        "date": "2022-04-25"
      },
      {
        "id": "1017233",
        "title": "Tâm tư, kiến nghị gửi Thủ tướng: Mất trắng vì thiên tai, nông dân mong muốn gì?",
        "url": "https://danviet.vn/mat-trang-vi-thien-tai-nong-dan-mong-muon-gi-20220505150705566-d1017233.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/5/ava-1-1651738299287316607346-33-0-433-640-crop-16517383065971113844865.jpg",
        "sapo": "“Thiên tai, rủi ro về thời tiết là điều không ai mong muốn, xảy ra thiệt hại thì phải gánh chịu nhưng chúng tôi rất mong muốn được Nhà nước, Chính phủ hỗ trợ và đồng hành để có thể “vực dậy” sau mỗi lần mất trắng” – đó là tâm tư, chia sẻ của chị Lò Thị Duyên, thành viên HTX Hợp lực Pản Phong.",
        "date": "2022-05-05"
      },
      {
        "id": "1017150",
        "title": "Sự kiện Thủ tướng đối thoại với nông dân tại Sơn La sẽ tạo sức lan tỏa rất lớn",
        "url": "https://danviet.vn/su-kien-thu-tuong-doi-thoai-voi-nong-dan-tai-son-la-se-tao-suc-lan-toa-rat-lon-20220505095912342-d1017150.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/5/img0203-1651719387825390977194-83-0-1333-2000-crop-16517194248041160216876.jpg",
        "sapo": "Sáng 5/5, tại tỉnh Sơn La, Trung ương Hội Nông dân Việt Nam phối hợp với Tỉnh ủy Sơn La tổ chức họp Ban chỉ đạo, Ban Tổ chức chuỗi sự kiện Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam; Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 tại tỉnh Sơn La.",
        "date": "2022-05-05"
      },
      {
        "id": "1014938",
        "title": "Chuẩn bị chu đáo Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2022 tại Sơn La",
        "url": "https://danviet.vn/chuan-bi-chu-dao-hoi-nghi-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-nam-2022-tai-son-la-20220423181225033-d1014938.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/4/23/dsc03430-16507118195351213790019-0-173-997-1768-crop-1650712086192942959956.jpg",
        "sapo": "Chiều nay (23/4), tại Hà Nội, Trung ương Hội Nông dân Việt Nam, UBND tỉnh Sơn La tổ chức họp Ban Tổ chức chuỗi sự kiện Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam, Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 tại tỉnh Sơn La nhằm rà soát công tác chuẩn bị cho hội nghị.",
        "date": "2022-04-23"
      },
      {
        "id": "999248",
        "title": "Nhìn lại ba lần Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/nhin-lai-ba-lan-thu-tuong-doi-thoai-voi-nong-dan-20220128103729061-d999248.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/1/28/phuc-1643340912712301032781-0-0-1250-2000-crop-16433409299571051840506.jpg",
        "sapo": "Thủ tướng Chính phủ Phạm Minh Chính đã đồng ý việc Trung ương Hội Nông dân Việt Nam tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam năm 2022.",
        "date": "2022-01-28"
      },
      {
        "id": "1007629",
        "title": "Chuẩn bị Hội nghị Thủ tướng đối thoại với nông dân và Festival trái cây tại Sơn La",
        "url": "https://danviet.vn/chuan-bi-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-va-festival-trai-cay-tai-son-la-20220317161423794-d1007629.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/3/17/img9747-16475079562722027521246-70-0-1320-2000-crop-1647507991612782208337.jpg",
        "sapo": "Chiều nay (17/3), tại trung tâm Hội nghị tỉnh Sơn La, đồng chí Đinh Khắc Đính, Phó Chủ tịch BCH Trung ương Hội Nông dân Việt Nam cùng đoàn công tác đã làm việc với Tỉnh uỷ Sơn La về việc chuẩn bị tổ chức Hội nghị Thủ tướng đối thoại nông dân; Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 tai tỉnh Sơn La.",
        "date": "2022-03-17"
      },
      {
        "id": "1007753",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Sơn La cử 4 Phó Chủ tịch tỉnh tham gia Ban tổ chức",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-son-la-cu-4-pho-chu-tich-tinh-tham-gia-ban-to-chuc-20220318103116382-d1007753.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/3/18/img9826-16475718403921375619632-83-0-1333-2000-crop-1647571872463339812002.jpg",
        "sapo": "Năm nay, Hội nghị Thủ tướng đối thoại với nông dân sẽ được tổ chức tại tỉnh Sơn La. Để tổ chức thành công sự kiện quan trọng này, tỉnh Sơn La cử 4 Phó Chủ tịch UBND tỉnh tham gia Ban Tổ chức cùng Trung ương Hội Nông dân Việt Nam và Báo Nông thôn Ngày nay/Dân Việt.",
        "date": "2022-03-18"
      },
      {
        "id": "828389",
        "title": "Kỳ vọng đột phá mới cho nông nghiệp, nông dân, nông thôn qua hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/ky-vong-ve-buoc-dot-pha-moi-cho-tam-nong-thong-qua-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-2022040911081702-d828389.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/4/9/2779007448328842576875301603767834671941308n-1649413077254954867790-22-0-472-720-crop-16494767397921958893966.jpg",
        "sapo": "Để hiểu rõ hơn về công tác chuẩn bị và những kỳ vọng, mục tiêu đặt ra tại Hội nghị Thủ tướng đối thoại với nông dân, Festival trái cây và thương hiệu sản phẩm OCOP Việt Nam năm 2022 tại Sơn La, PV Dân Việt đã có cuộc trao đổi với ông Nguyễn Thành Công - Phó Chủ tịch UBND tỉnh Sơn La.",
        "date": "2022-04-09"
      },
      {
        "id": "1013123",
        "title": "Sơn La kiểm tra tiến độ một số dự án đón Thủ tướng lên đối thoại với nông dân",
        "url": "https://danviet.vn/son-la-kiem-tra-tien-do-mot-so-du-an-don-thu-tuong-len-doi-thoai-voi-nong-dan-20220414184258434-d1013123.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/4/14/2-16499357954782067577451-111-0-1361-2000-crop-16499358552891558314756.jpg",
        "sapo": "Hôm nay (14/4), đồng chí Nguyễn Hữu Đông, Uỷ viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh uỷ, Trưởng đoàn Đại biểu Quốc hội tỉnh Sơn La cùng đoàn công tác đã kiểm tra tiến độ một số dự án tại huyện Mai Sơn dự kiến được chọn cho chương trình đón tiếp Thủ tướng Chính phủ lên đối thoại với nông dân tại Sơn La.",
        "date": "2022-04-14"
      }
    ],
    "articleCount": 59
  },
  {
    "year": 2020,
    "id": "2258",
    "ordinal": "Lần thứ 3",
    "pm": "Thủ tướng Nguyễn Xuân Phúc",
    "date": "Tháng 9/2020",
    "location": "TP Buôn Ma Thuột, Đắk Lắk",
    "theme": "",
    "title": "Hội nghị Thủ tướng đối thoại với nông dân năm 2020",
    "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/thu-tuong-pham-minh-chinh-di-tham-gian-hang-tai-festival-trai-cay-va-san-pham-ocop-viet-nam-nam-2022-165378665829149434847-0-0-1080-1728-crop-16537866656871589687220.jpg",
    "summary": "Lần thứ ba Thủ tướng trực tiếp đối thoại với nông dân, tổ chức tại Buôn Ma Thuột (Đắk Lắk) trong bối cảnh cả nước vừa chống dịch Covid-19 vừa duy trì sản xuất nông nghiệp.",
    "stats": [
      {
        "value": 100,
        "suffix": "+",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2020-channel2258/",
    "api": "https://danviet.vn/api/chu-de/2258",
    "articles": [
      {
        "id": "1022095",
        "title": "Video: Thủ tướng Phạm Minh Chính đi thăm gian hàng tại Festival trái cây và sản phẩm OCOP Việt Nam năm 2022",
        "url": "https://tv.danviet.vn/video-thu-tuong-pham-minh-chinh-di-tham-gian-hang-tai-festival-trai-cay-va-san-pham-ocop-viet-nam-nam-2022-20220529081527352.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/thu-tuong-pham-minh-chinh-di-tham-gian-hang-tai-festival-trai-cay-va-san-pham-ocop-viet-nam-nam-2022-165378665829149434847-0-0-1080-1728-crop-16537866656871589687220.jpg",
        "sapo": "Tối 28/5, sau khi tham dự lễ khai mạc Festival trái cây và sản phẩm OCOP Việt Nam năm 2022 ở Sơn La, Thủ tướng Chính phủ Phạm Minh Chính đã đi thăm các gian hàng tại lễ hội.",
        "date": "2022-05-29"
      },
      {
        "id": "1022064",
        "title": "Video: Thủ tướng Phạm Minh Chính thăm mô hình trồng xoài, trung tâm chế biến rau quả ở Sơn La",
        "url": "https://tv.danviet.vn/video-thu-tuong-pham-minh-chinh-tham-mo-hinh-trong-xoai-trung-tam-che-bien-rau-qua-o-son-la-20220529001708182.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/29/thu-tuong-pham-minh-chinh-tham-mo-hinh-trong-xoai-trung-tam-che-bien-rau-qua-o-son-la-165375812934039046104-0-192-1080-1920-crop-16537581399411350012798.jpg",
        "sapo": "Tiếp tục chuỗi sự kiện Thủ tướng đối thoại với nông dân ở Sơn La, chiều 28/5, Thủ tướng Chính phủ Phạm Minh Chính đã đi thăm mô hình thâm canh cây xoài hữu cơ của HTX Dịch vụ nông nghiệp Nà Hạ và Trung tâm Chế biến rau quả Doveco tại xã Hát Lót, huyện Mai Sơn, tỉnh Sơn La.",
        "date": "2022-05-29"
      },
      {
        "id": "910901",
        "title": "Nông dân háo hức chờ được đối thoại với Thủ tướng  giữa thủ phủ Tây Nguyên",
        "url": "https://danviet.vn/nong-dan-hao-huc-cho-duoc-doi-thoai-voi-thu-tuong-giua-thu-phu-tay-nguyen-20200928103803464-d910901.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/anh-1-16012636821291184495907-crop-1601264151280801066644.jpg",
        "sapo": "14 giờ chiều nay, 28/9, người đứng đầu Chính phủ và đại diện các bộ ngành sẽ trực tiếp đối thoại với nông dân, tạo động lực khơi dậy tiềm năng nông nghiệp của khu vực miền Trung - Tây Nguyên.",
        "date": "2020-09-28"
      },
      {
        "id": "911048",
        "title": "Thủ tướng Nguyễn Xuân Phúc gợi ý nông dân Ninh Thuận làm du lịch sinh thái nông nghiệp với cây măng tây xanh",
        "url": "https://danviet.vn/thu-tuong-nguyen-xuan-phuc-goi-y-nong-dan-ninh-thuan-lam-du-lich-sinh-thai-nong-nghiep-voi-cay-mang-tay-xanh-20200929083016058-d911048.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/ky-1601289402569416782911-crop-1601343764665635134406.jpg",
        "sapo": "Trả lời câu hỏi của nông dân Hùng Ky (Ninh Thuận) về tiềm năng du lịch sinh thái ở miền Trung - Tây Nguyên tại Hội nghị Thủ tướng đối thoại với nông dân tổ chức ngày 28/9 tại Đắk Lắk, Thủ tướng Chính phủ Nguyễn Xuân Phúc gợi ý, Ninh Thuận có thể làm giàu, làm du lịch từ chính sản phẩm măng tây xanh.",
        "date": "2020-09-29"
      },
      {
        "id": "910843",
        "title": "Video: Nông dân được đối thoại với Thủ tướng và cơ hội vượt thách thức, đẩy mạnh giá trị nông sản",
        "url": "https://danviet.vn/video-nong-dan-duoc-doi-thoai-voi-thu-tuong-va-co-hoi-vuot-thach-thuc-day-manh-gia-tri-nong-san-20200927213557371-d910843.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/27/053-img1008-1601216047815515302776-crop-1601216055743783366490.jpg",
        "sapo": "Hội nghị Thủ tướng đối thoại với nông dân lần 3 diễn ra trong bối cảnh dịch Covid-19 mang tới nhiều thách thức mới. Vì vậy hơn lúc nào hết, các kiến nghị của nông dân càng cấp thiết mong được trực tiếp gửi đến người lãnh đạo cao nhất của Chính phủ để Thủ tướng cùng đại diện các ngành chức năng tập trung các giải pháp tháo gỡ.",
        "date": "2020-09-28"
      },
      {
        "id": "911011",
        "title": "Những kiến nghị của bà con nông dân tại Hội nghị sẽ được đưa vào Dự thảo văn kiện trình Đại hội",
        "url": "https://danviet.vn/nhung-kien-nghi-cua-ba-con-nong-dan-tai-hoi-nghi-se-duoc-dua-vao-du-thao-van-kien-trinh-dai-hoi-20200928203150792-d911011.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/sequence-0100211115still001-16012995965531987440913-crop-16012996068041582882610.jpg",
        "sapo": "Tại Hội nghị Thủ tướng đối thoại với Nông dân lần thứ 3, người đứng đầu Chính phủ đã nhấn mạnh, Hội nghị lần này diễn ra đúng thời điểm diễn ra Đại hội Đảng bộ các tỉnh, thành. Do đó, những kiến nghị, đề xuất của bà con nông dân nêu lên, các tỉnh, thành nghiên cứu, đưa vào các dự thảo văn kiện trình Đại hội Đảng.",
        "date": "2020-09-28"
      },
      {
        "id": "911014",
        "title": "Bản tin thời sự Dân Việt ngày 29/9: Hàng trăm nông dân miền Trung - Tây Nguyên náo nức đối thoại với Thủ tướng",
        "url": "https://danviet.vn/ban-tin-thoi-su-dan-viet-ngay-29-9-hang-tram-nong-dan-mien-trung-tay-nguyen-nao-nuc-doi-thoai-voi-thu-tuong-20200928210811949-d911014.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/sequence-0100211115still001-16012995965531987440913-crop-16013016732741217533463.jpg",
        "sapo": "Chiều 28/9, sự kiện được mong chờ nhất trong năm của nông dân miền Trung - Tây Nguyên đã chính thức diễn ra, người đứng đầu Chính phủ và đại diện các bộ ngành đã trực tiếp đối thoại với nông dân để tìm ra đáp án và động lực thúc đẩy nông nghiệp, nông thôn miền Trung - Tây Nguyên cất cánh.",
        "date": "2020-09-29"
      },
      {
        "id": "911117",
        "title": "Mắc ca Việt Nam cần phải được đầu tư thương hiệu hơn nữa",
        "url": "https://danviet.vn/mac-ca-viet-nam-can-phai-duoc-dau-tu-thuong-hieu-hon-nua-20200929144756668-d911117.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/29/phong-su-204265609still150-16013655133051843249238-crop-1601365519292269208852.jpg",
        "sapo": "Đó là nhận định của Thủ tướng Nguyễn Xuân Phúc về loại cây trồng chiến lược của vùng Tây nguyên, cây Mắc ca. Theo đánh giá của Thủ tướng Nguyễn Xuân Phúc, mắc ca là cây trồng đa mục tiêu, mang lại giá trị kinh tế cao nếu đẩy mạnh chế biến sâu, nhưng nhất thiết phải được đầu tư xây dựng thương hiệu cho sản phẩm này.",
        "date": "2020-09-29"
      },
      {
        "id": "910536",
        "title": "Thủ tướng đối thoại với nông dân: Nông nghiệp miền Trung - Tây Nguyên là mỏ vàng cần khai thác",
        "url": "https://danviet.vn/truc-tiep-thu-tuong-doi-thoai-voi-nong-dan-20200925150443218-d910536.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/z2098671484887e75945a77b95cff9c32e4da74e9872bc-16012794849051093122535-crop-16012828835852672985.jpg",
        "sapo": "Đúng 14 giờ chiều 28/9, sự kiện được mong chờ nhất trong năm của nông dân miền Trung - Tây Nguyên chính thức diễn ra, người đứng đầu Chính phủ và đại diện các bộ ngành sẽ trực tiếp đối thoại với nông dân để tìm ra đáp án và động lực thúc đẩy nông nghiệp, nông thôn miền Trung - Tây Nguyên cất cánh.",
        "date": "2020-09-28"
      },
      {
        "id": "911003",
        "title": "Thủ tướng Nguyễn Xuân Phúc biểu dương Báo NTNN/Dân Việt gánh vác thành công tổ chức Hội nghị đối thoại với Nông dân",
        "url": "https://danviet.vn/thu-tuong-chinh-phu-nguyen-xuan-phuc-thuong-xuyen-doi-thoai-lang-nghe-tam-tu-cua-nong-dan-20200928194051527-d911003.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/1-thu-tuong--16012956454422143170617-crop-16012956565931972494013.jpg",
        "sapo": "\"Các đồng chí lãnh đạo địa phương cần thường xuyên đối thoại với bà con nông dân; với các cấp Hội Nông dân để lắng nghe, tìm hiểu tâm tư của bà con, qua đó kịp thời tháo gỡ khó khăn, giúp bà con phát triển sản xuất thuận lợi, hiệu quả\".",
        "date": "2020-09-28"
      },
      {
        "id": "911065",
        "title": "Thủ tướng cùng lãnh đạo các địa phương sẽ thường xuyên lắng nghe, đối thoại với nông dân",
        "url": "https://danviet.vn/thu-tuong-cung-lanh-dao-cac-dia-phuong-se-thuong-xuyen-lang-nghe-doi-thoai-voi-nong-dan-20200929094430323-d911065.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/29/5-thu-tuong--16013468069161196810136-crop-1601346818169448144940.jpeg",
        "sapo": "Thủ tướng Nguyễn Xuân Phúc đã nhấn mạnh điều này tại Hội nghị đối thoại lần thứ 3 với nông dân tại TP. Buôn Ma Thuột, Đắk Lắk vào chiều 28/9. Hơn 1.400 câu hỏi của nông dân cả nước, trong đó đa số là câu hỏi của nông dân miền Trung - Tây Nguyên đã được gửi tới cuộc đối thoại.",
        "date": "2020-09-29"
      },
      {
        "id": "911058",
        "title": "Bộ trưởng Nguyễn Xuân Cường: Hoan nghênh 2 tập đoàn lớn đầu tư nuôi lợn cụ kị tại Tây Nguyên",
        "url": "https://danviet.vn/bo-truong-nguyen-xuan-cuong-hoan-nghenh-2-tap-doan-lon-dau-tu-nuoi-lon-cu-ki-tai-tay-nguyen-20200929091854762-d911058.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/29/2-bo-truong-nguyen-xuan-cuong-16013455793901574773888-crop-160134558938546643114.jpg",
        "sapo": "Tây Nguyên hoàn toàn có thể phát triển chăn nuôi, do vậy các tỉnh phải bố trí lại, cân đối cơ cấu giữa chăn nuôi và trồng trọt. Chúng ta có 2,5 triệu tấn sắn, 1,5 tấn ngô, sao không đầu tư cho phát triển chăn nuôi?",
        "date": "2020-09-29"
      },
      {
        "id": "910914",
        "title": "Video: Hàng trăm đại diện nông dân cả nước về dự Hội nghị đối thoại với Thủ tướng",
        "url": "https://danviet.vn/hang-tram-nong-dan-san-xuat-gioi-da-ve-du-hoi-nghi-doi-thoai-voi-thu-tuong-20200928115156682-d910914.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/phong-su-203224020still148-1601268588211539351625-crop-16012685933811687496037.jpg",
        "sapo": "Chiều nay 28/9, Hội nghị Thủ tướng đối thoại với nông dân lần thứ 3 sẽ chính thức diễn ra. Ngay từ lúc này, hàng trăm đại diện nông dân trên toàn quốc đã háo hức về TP.Buôn Ma Thuột (Đắk Lắk) để trực tiếp gửi tới Thủ tướng những tâm tư, nguyện vọng của mình và kỳ vọng vào một “cú hích” cho nền nông sản Việt cất cánh.",
        "date": "2020-09-28"
      },
      {
        "id": "910880",
        "title": "Chiều nay 28/9, Thủ tướng đối thoại với nông dân: Người dân Tây Nguyên mong chờ quyết sách đột phá cho toàn vùng",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-lan-thu-3-ky-vong-nong-nghiep-phat-trien-ben-vung-20200928072000136-d910880.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/28/01-16012519258482001720011-crop-16012519660461571225349.jpg",
        "sapo": "14 giờ chiều hôm nay, 28/9, Hội nghị Thủ tướng đối thoại với nông dân lần thứ 3 sẽ diễn ra tại TP.Buôn Ma Thuột (Đắk Lắk). Sự kiện này đang được nông dân Tây Nguyên háo hức chờ đợi.",
        "date": "2020-09-28"
      },
      {
        "id": "910580",
        "title": "Chiều nay 28/9, Thủ tướng đối thoại với nông dân: Kỳ vọng có nhiều đề xuất, giải pháp thực hiện mục tiêu kép",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-ky-vong-co-nhieu-de-xuat-giai-phap-thuc-hien-muc-tieu-kep-20200925182356123-d910580.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/25/nqh07444-1601032855891503390460-crop-160103294575724891293.jpg",
        "sapo": "Trước thềm hội nghị, phóng viên Dân Việt đã phỏng vấn đồng chí Thào Xuân Sùng - Ủy viên T.Ư Đảng, Bí thư Đảng đoàn, Chủ tịch Ban Chấp hành T.Ư Hội NDVN.",
        "date": "2020-09-28"
      },
      {
        "id": "910581",
        "title": "Những vấn đề “nóng” nông dân gửi tới Thủ tướng",
        "url": "https://danviet.vn/nhung-van-de-nong-nong-dan-gui-toi-thu-tuong-20200925182717124-d910581.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/25/anh-tr3-16010331311561622417952-crop-16010331700651785212181.jpg",
        "sapo": "Làm thế nào để tiêu thụ nông sản hiệu quả, tình trạng phân bón giả, kém chất lượng vẫn hoành hành, vấn đề tranh chấp đất lâm nghiệp, phá rừng ở Tây Nguyên, phát triển nghề nuôi biển ở miền Trung là những vấn đề nông dân muốn kiến nghị tại Hội nghị Thủ tướng đối thoại với nông dân lần thứ 3.",
        "date": "2020-09-26"
      },
      {
        "id": "910582",
        "title": "Thủ tướng và nông dân đối thoại sẽ tạo áp lực tích cực cho các bộ ngành",
        "url": "https://danviet.vn/thu-tuong-va-nong-dan-doi-thoai-se-tao-ap-luc-tich-cuc-cho-cac-bo-nganh-20200925182931983-d910582.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/25/bt-cuong-1-16010328558802038038833-crop-16010333213551039899398.jpg",
        "sapo": "Theo Bộ trưởng Bộ NNPTNT Nguyễn Xuân Cường, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân là một sự kiện rất bổ ích, có ý nghĩa tích cực, đồng thời tạo động lực cho các bộ ngành nhanh chóng thúc đẩy, đưa các chính sách vào thực tiễn cuộc sống.",
        "date": "2020-09-27"
      },
      {
        "id": "910568",
        "title": "Nông nghiệp miền Trung - Tây Nguyên cần “cú hích” để tạo đột phá (bài cuối): Tăng liên kết và chế biến sâu",
        "url": "https://danviet.vn/nong-nghiep-mien-trung-tay-nguyen-can-cu-hich-de-tao-dot-pha-bai-cuoi-tang-lien-ket-va-che-bien-sau-20200925170257749-d910568.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/25/1-16010280131576906852-crop-16010280420221076087201.jpg",
        "sapo": "TS Trần Công Thắng (ảnh) - Viện trưởng Viện Chính sách và Chiến lược phát triển nông nghiệp nông thôn, Bộ NNPTNT, cho rằng khu vực miền Trung - Tây Nguyên cần một chính sách có tính đột phá để trở thành một trung tâm nông nghiệp công nghệ cao mới.",
        "date": "2020-09-26"
      },
      {
        "id": "910391",
        "title": "Nông dân miền Trung - Tây Nguyên háo hức chờ đối thoại với Thủ tướng",
        "url": "https://danviet.vn/nong-dan-mien-trung-tay-nguyen-hao-huc-cho-doi-thoai-voi-thu-tuong-20200924163323968-d910391.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/24/tr8-1-1600939865907207691387-crop-16009399502661388661064.jpg",
        "sapo": "Đến thời điểm này, mọi công việc chuẩn bị cho hội nghị đã hoàn tất, sẵn sàng cho cuộc gặp mặt giữa người đứng đầu Chính phủ và nông dân miền Trung - Tây Nguyên.",
        "date": "2020-09-25"
      },
      {
        "id": "910234",
        "title": "Nông nghiệp miền Trung - Tây Nguyên cần “cú hích” để tạo đột phá (bài 2): Đánh thức tiềm năng chăn nuôi",
        "url": "https://danviet.vn/nong-nghiep-mien-trung-tay-nguyen-can-cu-hich-de-tao-dot-pha-bai-2-danh-thuc-tiem-nang-chan-nuoi-20200923174220125-d910234.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/23/3-hung-nhon--1600857483194531020669-crop-16008576890861995091055.jpg",
        "sapo": "Trong khi các vùng chăn nuôi lớn như Đông Nam Bộ, Đồng bằng sông Hồng đang gặp khó khăn trong việc mở rộng quy mô, xây dựng vùng chăn nuôi tập trung, an toàn dịch bệnh vì đất đai nhỏ hẹp, xen kẽ trong khu dân cư... thì khu vực Tây Nguyên lại “hóa giải” được hết các vướng mắc đó.",
        "date": "2020-09-24"
      },
      {
        "id": "910387",
        "title": "Nông nghiệp miền Trung - Tây Nguyên cần \"cú hích\" để tạo đột phá (bài 3): Hướng đến trung tâm nông nghiệp công nghệ cao",
        "url": "https://danviet.vn/nong-nghiep-mien-trung-tay-nguyen-can-cu-hich-de-tao-dot-pha-bai-3-huong-den-trung-tam-nong-nghiep-cong-nghe-cao-20200924162926062-d910387.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/24/hoa-160093968221493671748-crop-16009397330361193254605.jpg",
        "sapo": "Theo TS Trần Công Thắng - Viện trưởng Viện Chính sách và Phát triển nông nghiệp nông thôn (Bộ NNPTNT), nếu có những chính sách đột phá, khu vực miền Trung - Tây Nguyên có thể là một trung tâm nông nghiệp công nghệ cao trong tương lai.",
        "date": "2020-09-25"
      },
      {
        "id": "910042",
        "title": "Nông nghiệp miền Trung - Tây Nguyên: Cần “cú hích” để tạo đột phá",
        "url": "https://danviet.vn/nong-nghiep-mien-trung-tay-nguyen-can-cu-hich-de-tao-dot-pha-20200922171152876-d910042.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/22/anh-chinh-thay-1-16007693591992000847403-crop-16007694020821282168581.jpg",
        "sapo": "LTS. Hội nghị Thủ tướng Chính phủ đối thoại với nông dân lần thứ 3 sẽ được tổ chức tại Đắk Lắk vào ngày 28/9 tới. Theo đánh giá, hội nghị lần này sẽ góp phần tháo gỡ những vướng mắc, rào cản trong quá trình phát triển nông nghiệp, nông thôn ở miền Trung - Tây Nguyên, tạo động lực đánh thức những tiềm năng trời ban.",
        "date": "2020-09-23"
      },
      {
        "id": "818296",
        "title": "Sẵn sàng cho Hội nghị Thủ tướng đối thoại với nông dân lần 3",
        "url": "https://danviet.vn/san-sang-cho-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-lan-3-2020092218371811-d818296.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/22/pct-1600774084191607735484-crop-1600774118934571325403.jpg",
        "sapo": "Hội nghị Thủ tướng đối thoại với nông dân lần thứ 3 với chủ đề: \"Cùng nỗ lực, vượt thách thức, giữ vững tăng trưởng giá trị nông sản Việt giúp nông nghiệp thịnh vượng, nông dân giàu có, nông thôn văn minh, hiện đại\" sẽ được tổ chức tại Đắk Lắk vào ngày 28/9 tới.",
        "date": "2020-09-22"
      },
      {
        "id": "909932",
        "title": "Ngày 28/9, Thủ tướng Chính phủ đối thoại với nông dân lần thứ 3 tại Đắk Lắk",
        "url": "https://danviet.vn/ngay-28-9-thu-tuong-chinh-phu-doi-thoai-voi-nong-dan-lan-thu-3-tai-dak-lak-20200922091314188-d909932.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/22/2-thu-tuong--16007397266081717196203-crop-1600740061594916281977.jpg",
        "sapo": "Theo Ban Tổ chức Hội nghị Thủ tướng đối thoại với nông dân lần thứ 3 năm 2020, ngày 28/9 tới đây tại TP. Buôn Ma Thuột (Đắk Lắk) sẽ diễn ra sự kiện Thủ tướng Chính phủ Nguyễn Xuân Phúc trực tiếp đối thoại với nông dân lần thứ 3 năm 2020.",
        "date": "2020-09-22"
      },
      {
        "id": "909863",
        "title": "Chuẩn bị diễn ra Hội nghị Thủ tướng đối thoại Nông dân lần thứ 3: Hơn 1.500 câu hỏi đã được gửi đến Thủ tướng",
        "url": "https://danviet.vn/chuan-bi-dien-ra-hoi-nghi-thu-tuong-doi-thoai-nong-dan-lan-thu-3-hon-1500-cau-hoi-da-duoc-gui-den-thu-tuong-20200921172606797-d909863.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/9/21/sequence-0100073215still003-16006838562031394188682-crop-16006838677081602314051.jpg",
        "sapo": "Nối tiếp thành công của các Hội nghị Thủ tướng đối thoại với Nông dân, năm nay, Trung ương Hội Nông dân Việt Nam tiếp tục giao cho Báo Nông thôn Ngày nay/Báo Điện tử Dân Việt tổ chức Hội nghị Thủ tướng đối thoại với Nông dân lần thứ 3 tại Đắk Lắk.",
        "date": "2020-09-21"
      },
      {
        "id": "900366",
        "title": "Người dân Tây Nguyên mong muốn Thủ tướng tháo gỡ điều gì ở Hội nghị đối thoại lần thứ 3?",
        "url": "https://danviet.vn/nguoi-dan-tay-nguyen-mong-muon-thu-tuong-thao-go-dieu-gi-o-hoi-nghi-doi-thoai-lan-thu-3-20200726205410038-d900366.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/7/26/ktrau7enzd-15957706444011724088185-crop-15957709819701364507528.jpg",
        "sapo": "Nhiều người dân các tỉnh Tây Nguyên mong muốn Thủ tướng Chính phủ cùng các bộ, ban ngành giải quyết, tháo gỡ những vấn đề nóng, ảnh hưởng trực tiếp đến kinh tế, an ninh trật tự, đời sống người nông dân tại Hội nghị Thủ tướng đối thoại với nông dân lần thứ 3 tổ chức ngày 28/9 tại Đăk Lăk.",
        "date": "2020-09-21"
      },
      {
        "id": "899959",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Tạo áp lực tích cực cho các bộ ngành",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-tao-ap-luc-tich-cuc-cho-cac-bo-nganh-20200723175352288-d899959.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/7/23/058-img1032-15955014167351084311633-crop-15955014407371162268431.jpg",
        "sapo": "Theo Bộ trưởng Bộ Nông nghiệp và Phát triển nông thôn (NNPTNT) Nguyễn Xuân Cường, Hội nghị Thủ tướng Chính phủ đối thoại với nông dân sẽ tạo áp lực tích cực cho các bộ ngành, nỗ lực tìm các giải pháp tháo gỡ nút thắt, tạo động lực để phát triển nông nghiệp, nông thôn.",
        "date": "2020-07-24"
      },
      {
        "id": "896260",
        "title": "Phối hợp tổ chức tốt Hội nghị Thủ tướng đối thoại với nông dân năm 2020 tại Đắk Lắk",
        "url": "https://danviet.vn/phoi-hop-to-chuc-tot-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-nam-2020-tai-dak-lak-20200628204918672-d896260.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/7/15/4-1594798625344115413934-crop-15947986553011238441239.jpg",
        "sapo": "Sáng nay (ngày 15/7), Trung ương Hội Nông dân Việt Nam phối hợp UBND tỉnh Đắk Lắk họp bàn về việc phối hợp tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với Nông dân Việt Nam 2020.",
        "date": "2020-07-15"
      },
      {
        "id": "817217",
        "title": "Dự kiến có 600 đại biểu tham dự Hội nghị Thủ tướng đối thoại với nông dân lần 3",
        "url": "https://danviet.vn/du-kien-co-600-dai-bieu-tham-du-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-lan-3-2020071517302762-d817217.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/7/16/thu-tuong-15948581587091031051128-crop-1594858166240541631880.jpg",
        "sapo": "Sáng 15/7, Trung ương Hội Nông dân Việt Nam phối hợp UBND tỉnh Đăk Lăk họp bàn về việc phối hợp tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam 2020.",
        "date": "2020-07-16"
      },
      {
        "id": "898513",
        "title": "Mời bạn đọc, bà con đặt câu hỏi đối thoại với Thủ tướng tại \"Hội nghị Thủ tướng đối thoại với nông dân lần 3\"",
        "url": "https://danviet.vn/moi-ban-doc-ba-con-dat-cau-hoi-doi-thoai-voi-thu-tuong-tai-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-lan-3-20200714102414627-d898513.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/7/14/thu-tuong-15946969793101169077983-crop-1594696986181613639019.jpg",
        "sapo": "Ngày 24/6, Văn phòng Chính phủ đã có công văn truyền đạt ý kiến của Thủ tướng Chính phủ Nguyễn Xuân Phúc về việc đồng ý tổ chức Hội nghị Thủ tướng đối thoại với nông dân lần thứ 3 sẽ diễn ra tại tỉnh Đắk Lắk (dự kiến diễn ra vào tháng 8/2020).",
        "date": "2020-07-14"
      },
      {
        "id": "895972",
        "title": "Lần thứ 3 Thủ tướng đối thoại với nông dân tại Đăk Lăk",
        "url": "https://danviet.vn/lan-thu-3-thu-tuong-doi-thoai-voi-nong-dan-tai-dak-lak-20200626152354691-d895972.html",
        "img": "https://danviet.ex-cdn.com/files/f1/2020/6/26/d1d6c6e5bb0646581f17-1593159509127254825637-crop-15931597447321461629266.jpg",
        "sapo": "Thủ tướng Chính phủ vừa có ý kiến về việc tổ chức Hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam. Theo đó, hội nghị đối thoại lần này sẽ tổ chức tại Đăk Lăk.",
        "date": "2020-06-26"
      }
    ],
    "articleCount": 31
  },
  {
    "year": 2019,
    "id": "2051",
    "ordinal": "Lần thứ 2",
    "pm": "Thủ tướng Nguyễn Xuân Phúc",
    "date": "Tháng 12/2019",
    "location": "Cần Thơ",
    "theme": "",
    "title": "Hội nghị Thủ tướng đối thoại với nông dân năm 2019",
    "cover": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-09/157583980139401-thumbnail.jpg",
    "summary": "Hội nghị lần thứ hai, tổ chức tại Cần Thơ với khoảng 600 đại biểu là nông dân và đại diện các Bộ, ngành, địa phương, nơi nông dân nói thẳng những khó khăn của nông nghiệp, nông thôn với người đứng đầu Chính phủ.",
    "stats": [
      {
        "value": 100,
        "suffix": "+",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-2019-channel2051/",
    "api": "https://danviet.vn/api/chu-de/2051",
    "articles": [
      {
        "id": "774764",
        "title": "Video: Khi nông dân được đối thoại với Thủ tướng Chính phủ",
        "url": "https://danviet.vn/video-khi-nong-dan-duoc-doi-thoai-voi-thu-tuong-chinh-phu-77771039612-d774764.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-09/157583980139401-thumbnail.jpg",
        "sapo": "Là sự kiện quan trọng được trông đợi trong năm, Hội nghị Thủ tướng đối thoại với nông dân diễn ra ngày 10/12 tại Cần Thơ là dịp để nông dân cả nước và những người quan tâm tới nông dân – nông nghiệp – nông thôn được gặp và trực tiếp bày tỏ tâm tư nguyện vọng với người đứng đầu Chính phủ.",
        "date": "2019-12-10"
      },
      {
        "id": "770832",
        "title": "Thủ tướng đối thoại với nông dân: Gửi gắm tâm tư từ ruộng đồng",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-gui-gam-tam-tu-tu-ruong-dong-77771035441-d770832.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-11-25/157467944470302-thumbnail.jpg",
        "sapo": "Ngày 10/12/2019, tại TP.Cần Thơ, Thủ tướng Chính phủ Nguyễn Xuân Phúc sẽ trực tiếp đối thoại với nông dân về những vấn đề thiết thực trong quá trình phát triển nông nghiệp, nông dân, nông thôn. Hiện, đã có nhiều câu hỏi nông dân cả nước muốn gửi đến Thủ tướng liên quan đến những vấn đề đang “nóng” như: tiêu thụ nông sản, tác động của biến đổi khí hậu, bảo tồn và phát huy các giá trị văn hóa trong bối cảnh hội nhập...",
        "date": "2019-11-26"
      },
      {
        "id": "772457",
        "title": "Nông dân muốn nói thật với Thủ tướng: Trồng lúa được 70.000đ/ngày",
        "url": "https://danviet.vn/nong-dan-muon-noi-that-voi-thu-tuong-trong-lua-duoc-70000dngay-77771037167-d772457.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-01/15752179738414-thumbnail.jpg",
        "sapo": "LTS: Ngày 10/12 tới đây, tại TP. Cần Thơ sẽ diễn ra Hội nghị Thủ tướng đối thoại với nông dân mang chủ đề “Tháo gỡ vướng mắc, liên kết 6 nhà, kiến tạo chuỗi giá trị nông sản”. Sự kiện này do Trung ương Hội Nông dân Việt Nam phối hợp với UBND TP. Cần Thơ chủ trì. Báo Nông thôn Ngày nay/Dân Việt tổ chức. \r\nTrước thềm diễn ra sự kiện này, PV Báo NTNN/Dân Việt đã ghi nhận những ý kiến, kiến nghị, đề xuất của bà con nông dân muốn gửi gắm đến Thủ tướng Chính phủ, mong muốn Chính phủ sớm có những quyết",
        "date": "2019-12-02"
      },
      {
        "id": "772460",
        "title": "GS Võ Tòng Xuân: Đừng đổ lỗi do nông dân chạy theo phong trào",
        "url": "https://danviet.vn/gs-vo-tong-xuan-dung-do-loi-do-nong-dan-chay-theo-phong-trao-77771037170-d772460.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-01/157519912797240-thumbnail.jpg",
        "sapo": "Liên quan đến những khó khăn của người dân sản xuất nông nghiệp ở ĐBSCL, phóng viên Báo NTNN/Dân Việt đã có cuộc phỏng vấn GS Võ Tòng Xuân- Hiệu trưởng Trường ĐH Nam Cần Thơ, nhà khoa học về lĩnh vực nông nghiệp.",
        "date": "2019-12-02"
      },
      {
        "id": "772812",
        "title": "Thủ tướng đối thoại với ND: Làng quê đáng sống vắng bóng thanh niên",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nd-lang-que-dang-song-vang-bong-thanh-nien-77771037551-d772812.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-02/15752856748670-thumbnail.jpg",
        "sapo": "Ghi nhận của phóng viên Báo NTNN/Dân Việt tại các vùng quê ở Nghệ An, Hà Tĩnh, có một thực trạng buồn là dù nhiều làng quê đang đẹp lên từng ngày, nhưng lại thiếu vắng lực lượng lao động chính là thanh niên. Lý do là vì người đi trước kéo người sau rời bỏ làng quê lên thành phố hoặc đi xuất ngoại làm ăn....",
        "date": "2019-12-03"
      },
      {
        "id": "773142",
        "title": "Thủ tướng đối thoại với ND: Rác thải thuốc BVTV hủy hoại môi trường",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nd-rac-thai-thuoc-bvtv-huy-hoai-moi-truong-77771037891-d773142.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-03/157536648757694-thumbnail.jpg",
        "sapo": "Rác thải tràn lan chất đống như núi khắp nơi. Tình trạng lạm dụng, phun thuốc trừ cỏ la liệt... đang tàn phá nhiều vùng sản xuất nông nghiệp, ảnh hưởng đến cuộc sống, sinh hoạt của những người đang sống ở nông thôn.",
        "date": "2019-12-04"
      },
      {
        "id": "773564",
        "title": "Tái cơ cấu nông nghiệp: Thủ tướng sẽ đối thoại với nông dân về 3 vấn đề lớn của tam nông",
        "url": "https://danviet.vn/tai-co-cau-nong-nghiep-thu-tuong-se-doi-thoai-voi-nong-dan-ve-3-van-de-lon-cua-tam-nong-77771038329-d773564.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-04/157545161260080-thumbnail.jpg",
        "sapo": "Ngày 10/12 tới, tại Thành phố Cần Thơ, Trung ương Hội Nông dân Việt Nam phối hợp với UBND TP. Cần Thơ chủ trì Hội nghị “Thủ tướng đối thoại với nông dân” chủ đề “Tháo gỡ vướng mắc, liên kết 6 nhà, kiến tạo chuỗi giá trị nông sản”. Báo Nông thôn Ngày nay/Dân Việt là đơn vị được giao tổ chức hội nghị.",
        "date": "2019-12-04"
      },
      {
        "id": "773574",
        "title": "Tái cơ cấu nông nghiệp: Thủ tướng đối thoại với ND- Nhiều điểm nóng mong Chính phủ tháo gỡ",
        "url": "https://danviet.vn/tai-co-cau-nong-nghiep-thu-tuong-doi-thoai-voi-nd-nhieu-diem-nong-mong-chinh-phu-thao-go-77771038339-d773574.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-04/157545280570683-thumbnail.jpg",
        "sapo": "Chia sẻ với PV Báo NTNN/Dân Việt, nhiều nông dân tỏ ra rất vui mừng khi biết thông tin Thủ tướng sẽ đối thoại trực tiếp với nông dân lần thứ 2 tại TP.Cần Thơ vào ngày 10/12.",
        "date": "2019-12-05"
      },
      {
        "id": "774414",
        "title": "TP. Cần Thơ: Sẵn sàng cho Hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/tp-can-tho-san-sang-cho-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-77771039234-d774414.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-08/157576184454226-thumbnail.jpg",
        "sapo": "Bí thư Thành uỷ Cần Thơ Trần Quốc Trung cho biết, các lực lượng chức năng của thành phố Cần Thơ đã phối hợp tốt với Trung ương Hội Nông dân; Báo Nông thôn Ngày nay/Dân Việt hoàn thành cơ bản công tác chuẩn bị cho Hội nghị Thủ tướng Chính phủ đối thoại với nông dân sẽ diễn ra vào ngày 10/12 tới đây.",
        "date": "2019-12-08"
      },
      {
        "id": "776141",
        "title": "Lời cảm ơn của BTC Hội nghị Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/loi-cam-on-cua-btc-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-77771041067-d776141.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-13/157622980756502-thumbnail.jpg",
        "sapo": "Ngày 10/12/2019, tại TP. Cần Thơ đã diễn ra Hội nghị Thủ tướng đối thoại với nông dân, với chủ đề “Tháo gỡ vướng mắc, liên kết 6 nhà, kiến tạo chuỗi giá trị nông sản”. Hội nghị do Trung ương Hội Nông dân Việt Nam phối hợp với UBND TP. Cần Thơ chủ trì; Báo Nông thôn Ngày nay/Dân Việt tổ chức thực hiện.",
        "date": "2019-12-13"
      },
      {
        "id": "774817",
        "title": "Lắng nghe sự thật, quyết liệt suy nghĩ và hành động",
        "url": "https://danviet.vn/lang-nghe-su-that-quyet-liet-suy-nghi-va-hanh-dong-77771039668-d774817.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-09/15758609633435-thumbnail.jpg",
        "sapo": "Khi nông dân được quyền mời đối thoại, góp ý, “bỏ phiếu hài lòng” đối với chính sách thì họ luôn nhìn vào sự thật, suy nghĩ về sự thật, nói lên sự thật và hy vọng những hành động quyết liệt để giải quyết những vấn đề khó...",
        "date": "2019-12-09"
      },
      {
        "id": "774934",
        "title": "Chuyên gia \"hiến kế\" trước thềm HN Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/chuyen-gia-hien-ke-truoc-them-hn-thu-tuong-doi-thoai-voi-nong-dan-77771039789-d774934.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-09/157588172064373-thumbnail.jpg",
        "sapo": "Trước thềm Hội nghị Thủ tướng đối thoại với nông dân, ông Hồ Xuân Hùng, Chủ tịch Tổng hội NN&PTNT đã dành thời gian chia sẻ với phóng viên NTNN về những vấn đề Thủ tướng Chính phủ nên ưu tiên giải quyết trước để đảm bảo chất lượng cuộc sống cho người dân.",
        "date": "2019-12-09"
      },
      {
        "id": "774984",
        "title": "Sẵn sàng cho cuộc đối thoại của Thủ tướng với nông dân",
        "url": "https://danviet.vn/san-sang-cho-cuoc-doi-thoai-cua-thu-tuong-voi-nong-dan-77771039841-d774984.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-09/157588767020806-thumbnail.jpg",
        "sapo": "Ngày mai, 10/12, Hội nghị Thủ tướng đối thoại với nông dân chủ đề: “Tháo gỡ vướng mắc, liên kết 6 nhà, kiến tạo chuỗi giá trị nông sản” sẽ chính thức diễn ra tại TP.Cần Thơ. Thời điểm này, mọi công tác chuẩn bị đã hoàn tất, sẵn sàng cho cuộc đối thoại cởi mở và thẳng thắn.",
        "date": "2019-12-09"
      },
      {
        "id": "775041",
        "title": "Thủ tướng đối thoại với nông dân: Nếu có khát vọng chúng ta sẽ thành công",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-neu-co-khat-vong-chung-ta-se-thanh-cong-77771039900-d775041.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-10/157595831572175-thumbnail.jpg",
        "sapo": "Kết luận Hội nghị Thủ tướng đối thoại với nông dân với chủ đề “Tháo gỡ vướng mắc, liên kết 6 nhà, kiến tạo chuỗi giá trị nông sản” tổ chức sáng 10/12, Thủ tướng Chính phủ đánh giá cao tâm huyết, trách nhiệm, khát vọng vươn lên của nông dân nước ta. Theo Thủ tướng, đây là điều rất quan trọng đối với một giai cấp, một dân tộc, nếu không có khát vọng, chúng ta không thể thành công.",
        "date": "2019-12-10"
      },
      {
        "id": "775063",
        "title": "Nhóm thanh niên khởi nghiệp trẻ Cần Thơ muốn kể dự án với Thủ tướng",
        "url": "https://danviet.vn/nhom-thanh-nien-khoi-nghiep-tre-can-tho-muon-ke-du-an-voi-thu-tuong-77771039926-d775063.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-10/157592188514482-thumbnail.jpg",
        "sapo": "Sống xanh, sống sạch, sống đẹp, sống sáng tạo và sống khỏe là 5 thông điệp gắn với 5 sản phẩm trà độc đáo mà nhóm khởi nghiệp nông nghiệp trẻ TP. Cần Thơ mang đến Hội nghị Thủ tướng đối thoại với nông dân.",
        "date": "2019-12-10"
      },
      {
        "id": "775067",
        "title": "Sáng nay 10/12: Thủ tướng trực tiếp đối thoại với nông dân",
        "url": "https://danviet.vn/sang-nay-1012-thu-tuong-truc-tiep-doi-thoai-voi-nong-dan-77771039930-d775067.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-10/157593436121251-thumbnail.jpg",
        "sapo": "Hôm nay, ngày 10/12, tại TP.Cần Thơ, Thủ tướng Chính phủ sẽ trực tiếp đối thoại với nông dân về 3 nhóm vấn đề lớn của tam nông, gồm: Vấn đề tiêu thụ nông sản, sản xuất nông nghiệp sạch theo hướng nâng cao giá trị, phát triển bền vững; Vấn đề về đất đai, đầu tư xây dựng cơ sở hạ tầng nông thôn, biến đổi khí hậu, ô nhiễm môi trường; Vấn đề về vốn, đảm bảo an sinh xã hội cho bà con nông dân…",
        "date": "2019-12-10"
      },
      {
        "id": "775243",
        "title": "Thủ tướng sẽ đối thoại với nông dân lần thứ 3 ở miền Trung",
        "url": "https://danviet.vn/thu-tuong-se-doi-thoai-voi-nong-dan-lan-thu-3-o-mien-trung-77771040117-d775243.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-10/15759670272980-thumbnail.jpg",
        "sapo": "Tiếp nối thành công của hai cuộc đối thoại với nông dân ở tỉnh Hải Dương năm 2018 và đối thoại vừa diễn ra sáng 10/12 tại TP.Cần Thơ, dự kiến, Thủ tướng sẽ có cuộc đối thoại với nông dân lần thứ 3 ở miền Trung.",
        "date": "2019-12-10"
      },
      {
        "id": "775467",
        "title": "Các bộ trưởng hứa gì tại hội nghị Thủ tướng đối thoại với nông dân?",
        "url": "https://danviet.vn/cac-bo-truong-hua-gi-tai-hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-77771040354-d775467.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2019/images/2019-12-11/15760372247932-thumbnail.jpg",
        "sapo": "Tại Hội nghị Thủ tướng đối thoại với nông dân do Trung ương Hội Nông dân Việt Nam phối hợp với TP.Cần Thơ chủ trì, báo Nông thôn Ngày nay/Dân Việt là đơn vị thực hiện, vốn tín dụng, tích tụ ruộng đất, tiêu thụ nông sản là những vấn đề được nhiều nông dân quan tâm đặt câu hỏi. Ngay sau đó, lãnh đạo nhiều bộ, ngành đã có những giải đáp thỏa đáng.",
        "date": "2019-12-11"
      }
    ],
    "articleCount": 18
  },
  {
    "year": 2018,
    "id": "1378",
    "onlyYear": 2018,
    "ordinal": "Lần thứ 1",
    "pm": "Thủ tướng Nguyễn Xuân Phúc",
    "date": "Tháng 4/2018",
    "location": "Hải Dương",
    "theme": "Tháo gỡ vướng mắc; Khơi dòng động lực; Tiếp đà 30 năm Đổi mới",
    "title": "Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2018",
    "cover": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-11/152342361395250-thumbnail.jpg",
    "summary": "Lần đầu tiên trong lịch sử, Thủ tướng Chính phủ trực tiếp đối thoại với nông dân Việt Nam. Hội nghị do Trung ương Hội Nông dân Việt Nam phối hợp với Văn phòng Chính phủ và UBND tỉnh Hải Dương tổ chức, với 600 đại biểu gồm nông dân và lãnh đạo các Bộ, ngành.",
    "stats": [
      {
        "value": 100,
        "suffix": "+",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-channel1378/",
    "api": "",
    "articles": [
      {
        "id": "609632",
        "title": "Các Bộ trưởng sẽ hành động gì sau Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/cac-bo-truong-se-hanh-dong-gi-sau-thu-tuong-doi-thoai-voi-nong-dan-7777865346-d609632.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-11/152342361395250-thumbnail.jpg",
        "sapo": "Ngày 9.4, Thủ tướng Chính phủ Nguyễn Xuân Phúc đã chủ trì buổi đối thoại với nông dân Việt Nam. Tham dự buổi đối thoại còn có các thành viên Chính phủ. Tại buổi đối thoại này, các Bộ trưởng cho biết sẽ có những hành động cụ thể để giải quyết những khó khăn, bức xúc của nông dân.",
        "date": "2018-04-11"
      },
      {
        "id": "609220",
        "title": "Thủ tướng đối thoại với nông dân: \"Chúng tôi đã thấy rất rõ vấn đề\"",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-chung-toi-da-thay-rat-ro-van-de-7777864905-d609220.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-10/152332187173285-thumbnail.jpg",
        "sapo": "“Chính phủ, Thủ tướng Chính phủ sẽ tiếp tục quan tâm sâu sắc hơn nữa đến nông nghiệp, nông thôn, nông dân”, Thủ tướng Nguyễn Xuân Phúc nhấn mạnh khi phát biểu kết luận tại buổi Thủ tướng Chính phủ đối thoại với nông dân Việt Nam diễn ra vào ngày hôm qua 9.4 tại Hải Dương.",
        "date": "2018-04-10"
      },
      {
        "id": "609013",
        "title": "Tuần sau, ngân hàng sẽ trả lời dứt điểm với một số ND về vốn vay",
        "url": "https://danviet.vn/tuan-sau-ngan-hang-se-tra-loi-dut-diem-voi-mot-so-nd-ve-von-vay-7777864681-d609013.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152324965533451-thumbnail.jpg",
        "sapo": "Tại hội nghị Thủ tướng Chính phủ đối thoại với nông dân Việt Nam do Trung ương Hội Nông dân Việt Nam, phối hợp UBND tỉnh Hải Dương tổ chức vào sáng 9/4, rất nhiều nông dân (ND) đã chia sẻ rằng: ND chúng tôi không thiếu sự chăm chỉ, nhưng rất bí bách về vốn. Mặc dù đã có nhiều gói cho vay ưu đãi lĩnh vực tam nông, nhưng đáng buồn là đến nay không có nhiều ND tiếp cận được, hoặc chỉ vay được rất ít.",
        "date": "2018-04-09"
      },
      {
        "id": "609160",
        "title": "Toàn cảnh: Thủ tướng đối thoại với nông dân Việt Nam",
        "url": "https://danviet.vn/toan-canh-thu-tuong-doi-thoai-voi-nong-dan-viet-nam-7777864838-d609160.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152327791891973-thumbnail.jpg",
        "sapo": "Sáng 9.4, tại tỉnh Hải Dương, lần đầu tiên Thủ tướng Chính phủ đối thoại với nông dân Việt Nam.Đây là dịp để nông dân đề xuất, kiến nghị trực tiếp với người đứng đầu Chính phủ tháo gỡ những khó khăn, vướng mắc nhằm phát triển nhanh, bền vững lĩnh vực nông nghiệp, nông dân, nông thôn.",
        "date": "2018-04-09"
      },
      {
        "id": "609149",
        "title": "CLIP: Thủ tướng đi thăm, đối thoại, tháo gỡ khó khăn cho nông dân",
        "url": "https://danviet.vn/clip-thu-tuong-di-tham-doi-thoai-thao-go-kho-khan-cho-nong-dan-7777864825-d609149.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152327842814809-thumbnail.jpg",
        "sapo": "Sáng nay 9.4, tại tỉnh Hải Dương, lần đầu tiên Thủ tướng Chính phủ đối thoại với nông dân Việt Nam. Đây là dịp để nông dân đề xuất, kiến nghị trực tiếp với người đứng đầu Chính phủ tháo gỡ những khó khăn, vướng mắc nhằm phát triển nhanh, bền vững lĩnh vực nông nghiệp, nông dân, nông thôn.",
        "date": "2018-04-09"
      },
      {
        "id": "609148",
        "title": "Thủ tướng kêu gọi “6 nhà” tham gia sản xuất, tiêu thụ nông sản",
        "url": "https://danviet.vn/thu-tuong-keu-goi-6-nha-tham-gia-san-xuat-tieu-thu-nong-san-7777864824-d609148.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/15232721829774-thumbnail.jpg",
        "sapo": "Lần đầu tiên, Thủ tướng Chính phủ trực tiếp đối thoại với nông dân Việt Nam nhằm giải đáp kịp thời những khó khăn, vướng mắc của người dân trong quá trình sản xuất. Tại cuộc đối thoại, Thủ tướng kêu gọi sự tham gia của “6 nhà” để nâng cao năng lực cạnh tranh, đẩy mạnh xuất khẩu cho nông sản Việt.",
        "date": "2018-04-09"
      },
      {
        "id": "609143",
        "title": "Cuộc đối thoại lịch sử chưa bao giờ có giữa Thủ tướng với nông dân",
        "url": "https://danviet.vn/cuoc-doi-thoai-lich-su-chua-bao-gio-co-giua-thu-tuong-voi-nong-dan-7777864819-d609143.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152327015314366-thumbnail.jpg",
        "sapo": "\"Chưa bao giờ có một cuộc đối thoại giữa Thủ tướng, các lãnh đạo Bộ, ngành trực tiếp với những người sản xuất như hôm nay. Nông nghiệp Việt Nam trong những năm qua đã đạt được nhiều thành tựu, phải cảm ơn chính những người nông dân đang ngày đêm trực tiếp sản xuất để đưa đất nước từ từ một nước thiếu ăn sang đủ ăn. Thậm chí, không chỉ đủ ăn mà còn xuất khẩu nông lâm thuỷ sản đạt trên 30 tỷ USD\".",
        "date": "2018-04-09"
      },
      {
        "id": "609138",
        "title": "Thủ tướng Nguyễn Xuân Phúc: Điều tra, xử lý nghiêm vụ Thuận Phong",
        "url": "https://danviet.vn/thu-tuong-nguyen-xuan-phuc-dieu-tra-xu-ly-nghiem-vu-thuan-phong-7777864814-d609138.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152327086085581-thumbnail.jpg",
        "sapo": "Tại Hội nghị Thủ tướng Đối thoại với nông dân Việt Nam diễn ra sáng nay tại Hải Dương, trả lời câu hỏi của các nông dân, Thủ tướng Nguyễn Xuân Phúc cho biết giao điều tra xử lý nghiêm vụ phân bón Thuận Phong.",
        "date": "2018-04-09"
      },
      {
        "id": "609093",
        "title": "Bà Trương Thị Mai: Về quê khởi nghiệp không phải là thất bại!",
        "url": "https://danviet.vn/ba-truong-thi-mai-ve-que-khoi-nghiep-khong-phai-la-that-bai-7777864768-d609093.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152326538098896-thumbnail.jpg",
        "sapo": "Giải đáp những thắc mắc của về vấn đề tri thức trẻ ở nông thôn cũng như việc hưởng lương hưu của nông dân, bà Trương Thị Mai nhấn mạnh: “Về quê khởi nghiệp không phải là thất bại hay thiệt thòi” và “Cần thiết phải có quỹ lương hưu dành cho nông dân để họ có thể sống tốt khi về già”.",
        "date": "2018-04-09"
      },
      {
        "id": "609035",
        "title": "Phó Thủ tướng Vũ Đức Đam: Xây dựng Hệ trí thức Việt số hoá kết nối ND",
        "url": "https://danviet.vn/pho-thu-tuong-vu-duc-dam-xay-dung-he-tri-thuc-viet-so-hoa-ket-noi-nd-7777864703-d609035.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/15232558521633-thumbnail.jpg",
        "sapo": "Tại cuộc đối thoại, Phó Thủ tướng Vũ Đức Đam cho hay, thời gian tới, Chính phủ có chủ trương xây dựng Hệ trí thức Việt số hóa. Theo đó, tất cả những cách thức làm ăn hiệu quả sẽ được đưa lên đây, tất cả nông dân sẽ được kết nối với nhau thông qua hệ thống này. Đây sẽ là lối đi cho các hộ nông dân riêng lẻ.",
        "date": "2018-04-09"
      },
      {
        "id": "609018",
        "title": "Thủ tướng kết luận tại hội nghị Đối thoại với nông dân",
        "url": "https://danviet.vn/thu-tuong-ket-luan-tai-hoi-nghi-doi-thoai-voi-nong-dan-7777864686-d609018.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152325090745125-thumbnail.jpg",
        "sapo": "Trong buổi sáng nay (9.4), với chủ đề “Tháo gỡ vướng mắc; Khơi dòng động lực; Tiếp đà 30 năm Đổi mới”, Thủ tướng Nguyễn Xuân Phúc tôi và các đồng chí lãnh đạo các Bộ, ngành đã cùng trao đổi thắng thắn, cởi mở với bà con nông dân về rất nhiều nội dung, trong đó những vấn đề lớn, tầm chiến lược liên quan đến phát triển nông nghiệp, nông thôn và đời sống người dân nông thôn.",
        "date": "2018-04-09"
      },
      {
        "id": "609015",
        "title": "Bộ trưởng Bộ Công Thương: Trung Quốc-thị trường lớn của nông sản VN",
        "url": "https://danviet.vn/bo-truong-bo-cong-thuong-trung-quocthi-truong-lon-cua-nong-san-vn-7777864683-d609015.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152325028657821-thumbnail.jpg",
        "sapo": "Bộ trưởng Bộ Công Thương Trần Tuấn Anh cho rằng, để nông sản Việt không bị lệ thuộc vào thị trường Trung Quốc, cách duy nhất là chúng ta phải tích cực tìm kiếm, khai thác nhiều thị trường mới. Và chỉ khi nào chúng ta có được sự cạnh tranh về giá của sản phẩm, cũng như đáp ứng đầy đủ tiêu chuẩn về chất lượng sản phẩm, kể cả vệ sinh an toàn thực phẩm thì lúc đó chúng ta sẽ không phụ thuộc vào bất kỳ thị trường nào.",
        "date": "2018-04-09"
      },
      {
        "id": "608985",
        "title": "CLIP: Thủ tướng trực tiếp trả lời câu hỏi của nông dân Hải Dương",
        "url": "https://danviet.vn/clip-thu-tuong-truc-tiep-tra-loi-cau-hoi-cua-nong-dan-hai-duong-7777864650-d608985.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152324445163452-thumbnail.jpg",
        "sapo": "Trao đổi tại Hội nghị đối thoại giữa Thủ tướng với nông dân diễn ra sáng nay (9.4) tại Hải Dương, Thủ tướng Chính phủ Nguyễn Xuân Phúc khẳng định: Từ nông thôn tới đồng bằng, miền núi tới miền xuôi sản xuất nông nghiệp đã có sự tăng trưởng mạnh mẽ, nhiều loại nông sản xuất khẩu có giá trị cao. Nhưng ở đâu đó, vào thời điểm nào đó, vẫn xuất hiện tình trạng được mùa mất giá nông sản và chúng ta phải tìm cách khắc phục.",
        "date": "2018-04-09"
      },
      {
        "id": "608952",
        "title": "Ảnh: Thủ tướng thăm gia đình chính sách và nông dân giỏi Hải Dương",
        "url": "https://danviet.vn/anh-thu-tuong-tham-gia-dinh-chinh-sach-va-nong-dan-gioi-hai-duong-7777864616-d608952.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152324231033673-thumbnail.jpg",
        "sapo": "Sáng 9.4, trước khi tham dự Hội nghị đối thoại với nông dân có chủ đề “Tháo gỡ vướng mắc, khơi dòng động lực, tiếp đà 30 năm đổi mới”, Thủ tướng Nguyễn Xuân Phúc đã đi thăm, trao quà động viên gia đình chính sách và thăm cơ sở sơ chế, đóng gói bảo quản rau củ quả của nông dân giỏi Tăng Xuân Trường, một mô hình sản xuất kinh doanh tiêu biểu của tỉnh Hải Dương.",
        "date": "2018-04-09"
      },
      {
        "id": "608938",
        "title": "Bài phát biểu của Chủ tịch TƯ Hội NDVN: Kiến nghị 7 vấn đề \"nóng\"",
        "url": "https://danviet.vn/bai-phat-bieu-cua-chu-tich-tu-hoi-ndvn-kien-nghi-7-van-de-nong-7777864602-d608938.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152323869324476-thumbnail.jpg",
        "sapo": "Sáng nay (9/4), tại Khách sạn Nam Cường (TP.Hải Dương) đã diễn ra hội nghị Thủ tướng Chính phủ đối thoại với nông dân, với chủ đề \"Tháo gỡ vướng mắc, khơi dòng động lực, tiếp đà 30 năm đổi mới\". Khai mạc Hội nghị, đồng chí Thào Xuân Sùng, Uỷ viên BCH Trung ương Đảng, Bí thư Đảng đoàn, Chủ tịch BCH Trung ương Hội NDVN đã có bài phát biểu chỉ ra 7 vấn đề còn vướng mắc, cũng như kiến nghị 7 vấn đề căn cơ nhất có liên quan đến nông nghiệp, nông dân và nông thôn.",
        "date": "2018-04-09"
      },
      {
        "id": "608900",
        "title": "Thủ tướng đối thoại với nông dân: Nông dân cần gì nhất ở Chính phủ?",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-nong-dan-can-gi-nhat-o-chinh-phu-7777864561-d608900.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152320834195833-thumbnail.jpg",
        "sapo": "Hôm nay 9.4, tại tỉnh Hải Dương, lần đầu tiên, Trung ương Hội Nông dân Việt Nam chủ trì, phối hợp với Văn phòng Chính phủ, UBND tỉnh Hải Dương chỉ đạo, tổ chức Hội nghị “Thủ tướng Chính phủ đối thoại với nông dân Việt Nam” và giao Báo Nông thôn Ngày nay là đơn vị trực tiếp thực hiện sự kiện này.",
        "date": "2018-04-09"
      },
      {
        "id": "608883",
        "title": "Thủ tướng đối thoại với nông dân: Giải quyết ngay bức xúc của ND",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-giai-quyet-ngay-buc-xuc-cua-nd-7777864543-d608883.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-09/152324919165194-thumbnail.jpg",
        "sapo": "Sáng nay 9.4, tại tỉnh Hải Dương, lần đầu tiên Thủ tướng Chính phủ đối thoại với nông dân Việt Nam. Đây là dịp để nông dân đề xuất, kiến nghị trực tiếp với người đứng đầu Chính phủ tháo gỡ những khó khăn, vướng mắc nhằm phát triển nhanh, bền vững lĩnh vực nông nghiệp, nông dân, nông thôn.",
        "date": "2018-04-09"
      },
      {
        "id": "608799",
        "title": "Sáng nay 9.4, 600 đại biểu dự buổi Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/sang-nay-94-600-dai-bieu-du-buoi-thu-tuong-doi-thoai-voi-nong-dan-7777864455-d608799.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-08/152317376931936-thumbnail.jpg",
        "sapo": "Sáng hôm nay, ngày 9.4 tại tỉnh Hải Dương diễn ra cuộc đối thoại của Thủ tướng với nông dân. Đây là lần đầu tiên người đứng đầu Chính phủ tổ chức đối thoại với nông dân.",
        "date": "2018-04-09"
      },
      {
        "id": "608794",
        "title": "CLIP: Đối thoại với Thủ tướng - cơ hội và kỳ vọng của nông dân",
        "url": "https://danviet.vn/clip-doi-thoai-voi-thu-tuong-co-hoi-va-ky-vong-cua-nong-dan-7777864450-d608794.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-08/152317136654540-thumbnail.jpg",
        "sapo": "Lần đầu tiên sau rất nhiều năm, một cuộc đối thoại giữa Thủ tướng Chính phủ với nông dân Việt Nam được tổ chức, là nơi để hơn 500 nông dân có dịp trực tiếp bày tỏ tâm tư nguyện vọng. Để rồi, dựa trên chính những đề xuất thiết thực đó, người đứng đầu Chính phủ và các bộ ban ngành có thể đưa ra những quyết sách để thúc đẩy nông nghiệp phát triển cũng như giúp đời sống người nông dân ngày càng tốt hơn.",
        "date": "2018-04-09"
      },
      {
        "id": "608508",
        "title": "Tôi sẽ nói thật với Thủ tướng về khó khăn của người nuôi lợn",
        "url": "https://danviet.vn/toi-se-noi-that-voi-thu-tuong-ve-kho-khan-cua-nguoi-nuoi-lon-7777864154-d608508.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-06/152303318168576-thumbnail.jpg",
        "sapo": "Từng được mệnh danh là \"vua lợn organic\", ông Tô Hiến Thành - Chủ tịch HĐQT kiêm Tổng Giám đốc HTX Trường Thành  ở xã Danh Thắng, huyện Hiệp Hòa (Bắc Giang) đang rất kỳ vọng tại buổi Thủ tướng đối thoại với nông dân diễn ra vào ngày 9.4 tại Hải Dương.",
        "date": "2018-04-08"
      },
      {
        "id": "608461",
        "title": "Thủ tướng đối thoại với nông dân: Hành động để tăng thu nhập của ND",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-hanh-dong-de-tang-thu-nhap-cua-nd-7777864101-d608461.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-06/152301861581319-thumbnail.jpg",
        "sapo": "\"Chỉ riêng trong năm 2017, Thủ tướng Chính phủ Nguyễn Xuân Phúc đã dự 17 hội nghị, diễn đàn về các vấn đề liên quan đến ngành nông nghiệp\".",
        "date": "2018-04-08"
      },
      {
        "id": "608866",
        "title": "Ngày 9.4, Thủ tướng đối thoại với nông dân: Mong ước đã lâu",
        "url": "https://danviet.vn/ngay-94-thu-tuong-doi-thoai-voi-nong-dan-mong-uoc-da-lau-7777864525-d608866.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-08/152318893179645-thumbnail.jpg",
        "sapo": "Xác định rằng, những khó khăn của nông dân, vướng mắc trong phát triển nông nghiệp, xây dựng nông thôn mới hiện nay, Thủ tướng và Chính phủ không thể giải quyết ngay, và không phải khó khăn nào cũng đưa lên Thủ tướng. Nhưng nhiều cán bộ, hội viên, nông dân tin tưởng rằng cuộc đối thoại lần đầu tiên được tổ chức giữa Thủ tướng với nông dân sẽ không thất vọng bởi qua sự kiện này để làm tăng thêm sự chú ý của toàn xã hội, tăng thêm sự quan tâm của Đảng, Nhà nước đối với nông nghiệp, nông dân, nông",
        "date": "2018-04-08"
      },
      {
        "id": "608789",
        "title": "Thủ tướng đối thoại với nông dân: Nông dân cần gì nhất ở Chính phủ?",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-nong-dan-can-gi-nhat-o-chinh-phu-7777864445-d608789.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-08/152316988236196-thumbnail.jpg",
        "sapo": "“Nếu hỏi nông dân rằng bây giờ họ cần gì ở Chính phủ nhất, chắc chắn nông dân sẽ nói: cần nhất là thị trường, cần hỗ trợ bán hàng và tôi nghĩ chúng ta nên tập trung làm tốt việc này”.",
        "date": "2018-04-08"
      },
      {
        "id": "608459",
        "title": "Thủ tướng đối thoại với nông dân: Hành động, kiến tạo với tam nông",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-hanh-dong-kien-tao-voi-tam-nong-7777864099-d608459.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-06/152301839973480-thumbnail.jpg",
        "sapo": "“Xây dựng Chính phủ hành động, kiến tạo, liêm chính, phục vụ phát triển và phục vụ nhân dân…”, đó là thông điệp mạnh mẽ của Thủ tướng Chính phủ Nguyễn Xuân Phúc đưa ra trong phiên họp thường kỳ của Chính phủ thảo luận về vấn đề hoàn thiện thể chế trước khi thảo luận các vấn đề kinh tế - xã hội diễn ra trong hai ngày 1-2.6.2016. Tinh thần này được người đứng đầu Chính phủ nêu lên trong các cuộc đối thoại, trao đổi, gặp mặt giới trí thức, công nhân và sắp tới là nông dân (ND)…",
        "date": "2018-04-07"
      },
      {
        "id": "608460",
        "title": "Chủ tịch Hội NDVN: 2 nhóm vấn đề, 5 giải pháp cần Thủ tướng tháo gỡ",
        "url": "https://danviet.vn/chu-tich-hoi-ndvn-2-nhom-van-de-5-giai-phap-can-thu-tuong-thao-go-7777864100-d608460.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-06/152301850272974-thumbnail.jpg",
        "sapo": "Ngày 9.4 tới, Trung ương Hội Nông dân Việt Nam (T.Ư Hội NDVN) chủ trì, phối hợp với Văn phòng Chính phủ, UBND tỉnh Hải Dương chỉ đạo, tổ chức Hội nghị Thủ tướng đối thoại với ND, chủ đề “Tháo gỡ khó khăn, Khơi dòng động lực, Tiếp đà 30 năm đổi mới”. Báo NTNN đã phỏng vấn đồng chí Thào Xuân Sùng - Ủy viên T.Ư Đảng, Bí thư Đảng đoàn, Chủ tịch Ban Chấp hành T.Ư NDVN.",
        "date": "2018-04-07"
      },
      {
        "id": "608109",
        "title": "Thủ tướng đối thoại với nông dân: 4 vấn đề nóng cần giải quyết",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-4-van-de-nong-can-giai-quyet-7777863721-d608109.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-05/152292958489202-thumbnail.jpg",
        "sapo": "Là người có nhiều nghiên cứu cũng như tham gia quản lý lâu năm trong ngành nông nghiệp, TS Đặng Kim Sơn - nguyên Viện trưởng Viện Chính sách và Chiến lược phát triển nông nghiệp nông thôn hiểu rất rõ những “được – mất” của ngành này. Nhân sự kiện Thủ tướng đối thoại với nông dân sắp diễn ra (ngày 9.4), phóng viên NTNN đã có cuộc trò chuyện với ông Sơn về vấn đề này.",
        "date": "2018-04-06"
      },
      {
        "id": "608147",
        "title": "Thủ tướng đối thoại với nông dân: Nhiều câu hỏi về nạn phân bón giả",
        "url": "https://danviet.vn/thu-tuong-doi-thoai-voi-nong-dan-nhieu-cau-hoi-ve-nan-phan-bon-gia-7777863761-d608147.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-05/152294089985191-thumbnail.jpg",
        "sapo": "Theo Ban Tổ chức hội nghị Thủ tướng đối thoại với nông dân (sẽ diễn ra ngày 9.4 tại tỉnh Hải Dương), đến thời điểm này đã có khoảng 1.000 câu hỏi được gửi về để Ban Tổ chức tổng hợp, chuẩn bị để nông dân trao đổi với Thủ tướng, trong đó nhiều hơn cả là nhóm câu hỏi về quản lý chất lượng vật tư nông nghiệp, cụ thể là tình trạng sản xuất- kinh doanh phân bón giả.",
        "date": "2018-04-06"
      },
      {
        "id": "607770",
        "title": "Hội nghị Thủ tướng đối thoại với nông dân: Phấn khởi và kỳ vọng",
        "url": "https://danviet.vn/hoi-nghi-thu-tuong-doi-thoai-voi-nong-dan-phan-khoi-va-ky-vong-7777863361-d607770.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-05/152289368111115-thumbnail.jpg",
        "sapo": "Trao đổi với Báo Nông Thôn Ngày Nay/Dân Việt, nhiều đại biểu nông dân Việt Nam xuất sắc bày tỏ phấn khởi và mong chờ được tham dự hội nghị đối thoại giữa Thủ tướng với nông dân.",
        "date": "2018-04-05"
      },
      {
        "id": "607462",
        "title": "Ngày 9.4, lần đầu tiên Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/ngay-94-lan-dau-tien-thu-tuong-doi-thoai-voi-nong-dan-7777863036-d607462.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-03/152275623664739-thumbnail.jpg",
        "sapo": "Lần đầu tiên, Thủ tướng Chính phủ sẽ có cuộc đối thoại với nông dân. Cuộc đối thoại dự kiến diễn ra vào ngày 9.4 tại tỉnh Hải Dương. “Đây là dịp để nông dân đề xuất, kiến nghị trực tiếp với người đứng đầu Chính phủ tháo gỡ những khó khăn, vướng mắc nhằm phát triển nhanh, bền vững lĩnh vực nông nghiệp, nông dân, nông thôn” - nhà báo Lưu Quang Định, Tổng Biên tập Báo NTNN/Dân Việt, Phó Ban tổ chức cuộc đối thoại khẳng định.",
        "date": "2018-04-04"
      },
      {
        "id": "607646",
        "title": "Sẽ có 600 đại biểu dự buổi Thủ tướng đối thoại với nông dân",
        "url": "https://danviet.vn/se-co-600-dai-bieu-du-buoi-thu-tuong-doi-thoai-voi-nong-dan-7777863228-d607646.html",
        "img": "https://danviet.ex-cdn.com/files/f1/upload/2-2018/images/2018-04-04/152282336231605-thumbnail.jpg",
        "sapo": "Theo thông tin từ Ban Tổ chức hội nghị Thủ tướng đối thoại với nông dân, ngày 9.4 tới hội nghị sẽ diễn ra tại tỉnh Hải Dương với 600 đại biểu tham dự, gồm: nông dân, lãnh đạo các Bộ, ban, ngành của Trung ương, các cơ quan ban, ngành tỉnh Hải Dương; lãnh đạo 63 hội nông dân tỉnh, thành; các chuyên gia, nhà khoa học; đại diện các doanh nghiệp; phóng viên các cơ quan thông tấn, báo chí.",
        "date": "2018-04-04"
      }
    ],
    "articleCount": 30
  }
];

/* ===== src/js/utils.js ===== */
/* Tiện ích dùng chung: biến cấu hình, escape/format, đếm số, hiện dần khi cuộn */
(function () {
    var T = window.TT = window.TT || {};
    T.site = window.SITE || {};
    T.events = window.EVENTS || []; // mới nhất -> cũ nhất
    T.FIRST_PAGE = 7; // 1 bài nổi bật + 6 bài
    T.NEXT_PAGE = 6;
    T.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    T.state = { token: 0 }; // bỏ kết quả API về muộn của năm đã chuyển đi
    var reduceMotion = T.reduceMotion;

    function esc(str) {
        return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }
    function fmt(n) { return Number(n).toLocaleString("vi-VN"); }

    function fmtDate(iso) {
        var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
        return m ? m[3] + "/" + m[2] + "/" + m[1] : "";
    }

    function countUp(el) {
        var target = parseFloat(el.getAttribute("data-count")) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        var token = el._ct = (el._ct || 0) + 1; // lần chạy mới huỷ lần cũ
        if (reduceMotion) { el.textContent = fmt(target) + suffix; return; }
        var start = null;
        el.textContent = "0" + suffix;
        function step(ts) {
            if (token !== el._ct) return;
            if (!start) start = ts;
            var p = Math.min((ts - start) / 1400, 1);
            el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3)))) + suffix;
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // Lặp lại: rời màn hình thì ẩn, cuộn quay lại thì hiện lại từ đầu
    var revealIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            var el = en.target;
            if (en.isIntersecting) {
                el.classList.add("is-in");
                el.querySelectorAll("[data-count]").forEach(countUp);
            } else {
                el.classList.remove("is-in");
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    function observeReveal(root) {
        root.querySelectorAll("[data-reveal]").forEach(function (el) { revealIo.observe(el); });
    }

    T.esc = esc;
    T.fmt = fmt;
    T.fmtDate = fmtDate;
    T.countUp = countUp;
    T.observeReveal = observeReveal;
})();

/* ===== src/js/render.js ===== */
/* Dựng HTML: cột năm, chi tiết kỳ Hội nghị, thẻ bài báo */
(function () {
    var T = window.TT = window.TT || {};
    var esc = T.esc, fmtDate = T.fmtDate, events = T.events;

    function renderYears() {
        document.getElementById("years").innerHTML = events.map(function (ev, i) {
            return '<button type="button" class="year' + (i === 0 ? " year--latest" : "") + '" data-year="' + ev.year + '">' +
                '<span class="year__num">' + ev.year + '</span>' +
                '<span class="year__meta"><b>' + esc(ev.ordinal) + '</b><small>' + esc(ev.location) + '</small></span>' +
            '</button>';
        }).join("");
    }

    function thumb(img, date) {
        var year = (date || "").slice(0, 4);
        return (img ? '<img src="' + esc(img) + '" alt="" loading="lazy">' : '<span class="post__ph">Dân Việt</span>') +
            (year ? '<span class="post__year">' + year + '</span>' : '');
    }

    function renderPost(a, lead, i) {
        var date = fmtDate(a.date);
        if (lead) {
            return '<a class="post post--lead" data-reveal="zoom" style="--d:' + (i * 0.07) + 's" href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
                '<div class="post__thumb">' + thumb(a.img, a.date) + '</div>' +
                '<div class="post__body">' +
                    '<h4 class="post__title">' + esc(a.title) + '</h4>' +
                    (a.sapo ? '<p class="post__sapo">' + esc(a.sapo) + '</p>' : '') +
                    (date ? '<span class="post__date">' + date + '</span>' : '') +
                    '<span class="post__go">Đọc trên Dân Việt →</span>' +
                '</div></a>';
        }
        return '<a class="post" data-reveal="' + (i % 2 ? "right" : "left") + '" style="--d:' + (i * 0.07) + 's" href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
            '<div class="post__thumb">' + thumb(a.img, a.date) + '</div>' +
            '<div class="post__body">' +
                '<h4 class="post__title">' + esc(a.title) + '</h4>' +
                (date ? '<span class="post__date">' + date + '</span>' : '') +
            '</div></a>';
    }

    function renderDetail(ev) {
        var facts = [
            ["Thời gian", ev.date],
            ["Địa điểm", ev.location],
            ["Chủ trì đối thoại", ev.pm]
        ].filter(function (r) { return r[1]; });

        var stats = (ev.stats || []).map(function (s) {
            return '<div><b data-count="' + s.value + '" data-suffix="' + esc(s.suffix || "") + '">0</b><span>' + esc(s.label) + '</span></div>';
        }).join("");

        return '' +
            '<div class="banner" data-reveal="zoom">' +
                (ev.cover ? '<img src="' + esc(ev.cover) + '" alt="' + esc(ev.title) + '">' : '') +
                '<span class="banner__year" aria-hidden="true">' + ev.year + '</span>' +
                '<span class="banner__tag">' + esc(ev.ordinal) + '</span>' +
            '</div>' +
            '<div class="info">' +
                '<div data-reveal="left">' +
                    '<h3 class="info__title">' + esc(ev.title) + '</h3>' +
                    (ev.theme ? '<p class="info__theme"><small>Chủ đề Hội nghị</small>“' + esc(ev.theme) + '”</p>' : '') +
                    '<p class="info__summary">' + esc(ev.summary) + '</p>' +
                    (ev.link ? '<a class="btn btn--outline info__link" href="' + esc(ev.link) + '" target="_blank" rel="noopener">Xem thêm trên Dân Việt ↗</a>' : '') +
                '</div>' +
                '<aside class="facts-card" data-reveal="right" style="--d:.15s">' +
                    '<dl>' + facts.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join("") + '</dl>' +
                    (stats ? '<div class="mini-stats">' + stats + '</div>' : '') +
                '</aside>' +
            '</div>' +
            '<div class="press">' +
                '<div class="press__head" data-reveal><h3>Bài báo tư liệu <em>Hội nghị ' + ev.year + '</em></h3><span class="press__count"></span></div>' +
                '<div class="press__list"></div>' +
                '<div class="press__more" data-reveal><button class="btn btn--outline" type="button">Xem thêm bài</button></div>' +
            '</div>';
    }

    T.renderYears = renderYears;
    T.renderPost = renderPost;
    T.renderDetail = renderDetail;
})();

/* ===== src/js/api.js ===== */
/* Gọi API CMS Dân Việt (phân trang) */
(function () {
    var T = window.TT = window.TT || {};

    // https://danviet.vn/api/chu-de/<id> (trang 1), .../<id>/p<n> (trang n); 20 bài/trang, đúng thứ tự biên tập.

    function pageUrl(api, n) { return n === 1 ? api : api.replace(/\/$/, "") + "/p" + n; }

    function createApiSource(api) {
        var page = 0, totalPages = null;
        var src = { total: null, hasMore: function () { return totalPages === null || page < totalPages; } };
        src.fetchNext = function () {
            var ctrl = window.AbortController ? new AbortController() : null;
            var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 8000);
            return fetch(pageUrl(api, page + 1), ctrl ? { signal: ctrl.signal } : {})
                .then(function (res) {
                    if (!res.ok) throw new Error("HTTP " + res.status);
                    return res.json();
                })
                .then(function (d) {
                    clearTimeout(timer);
                    if (!d || !d.success || !Array.isArray(d.data)) throw new Error("API không hợp lệ");
                    page += 1;
                    totalPages = Number(d.total_pages) || page;
                    src.total = Number(d.total) || null;
                    return d.data.map(function (a) {
                        return { id: String(a.id), title: String(a.title || "").trim(), url: a.link, img: a.image || "", sapo: a.sapo || "", date: String(a.push_date || "").slice(0, 10) };
                    });
                }, function (err) { clearTimeout(timer); throw err; });
        };
        return src;
    }

    T.createApiSource = createApiSource;
})();

/* ===== src/js/press.js ===== */
/* Danh sách bài báo + nút "Xem thêm bài" (API, bản dự phòng) */
(function () {
    var T = window.TT = window.TT || {};
    var renderPost = T.renderPost, createApiSource = T.createApiSource, observeReveal = T.observeReveal;
    var FIRST_PAGE = T.FIRST_PAGE, NEXT_PAGE = T.NEXT_PAGE;
    var detailEl = document.getElementById("detail");

    function setupPress(ev, token) {
        var list = detailEl.querySelector(".press__list");
        var moreBtn = detailEl.querySelector(".press__more button");
        var countEl = detailEl.querySelector(".press__count");
        var items = ev.articles.slice(); // hiện ngay bản lưu sẵn
        var fallback = ev.articles.slice();
        var live = ev.api ? createApiSource(ev.api) : null;
        var liveReady = false, exhausted = false, shown = 0;

        function total() {
            return liveReady && live.total && !exhausted ? Math.max(live.total, items.length) : items.length;
        }
        function refreshUi() {
            countEl.textContent = ""; // không hiển thị số tin bài
            moreBtn.parentNode.style.display = shown < total() ? "" : "none";
            moreBtn.disabled = false;
            moreBtn.textContent = "Xem thêm bài";
            if (!total()) list.innerHTML = '<p class="press__note">Đang cập nhật bài viết cho kỳ Hội nghị này.</p>';
        }
        function draw(reset, count) {
            if (reset) { list.innerHTML = ""; shown = 0; }
            var take = count || (shown === 0 ? FIRST_PAGE : NEXT_PAGE);
            var next = items.slice(shown, shown + take);
            list.insertAdjacentHTML("beforeend", next.map(function (a, i) { return renderPost(a, shown + i === 0, i); }).join(""));
            shown += next.length;
            observeReveal(list);
            refreshUi();
        }
        // Tải thêm trang API cho tới khi đủ `count` bài
        function ensure(count) {
            if (!liveReady || exhausted || items.length >= count || !live.hasMore()) return Promise.resolve();
            return live.fetchNext().then(function (more) {
                if (token !== T.state.token) return;
                var seen = {}, added = 0;
                items.forEach(function (a) { seen[a.id] = true; });
                more.forEach(function (a) { if (!seen[a.id]) { seen[a.id] = true; items.push(a); added++; } });
                if (!added) { // API trả toàn bài trùng (vd. cache) -> dùng bản lưu sẵn
                    exhausted = true;
                    fallback.forEach(function (a) { if (!seen[a.id]) items.push(a); });
                    return;
                }
                return ensure(count);
            });
        }

        moreBtn.addEventListener("click", function () {
            var want = shown + NEXT_PAGE;
            if (liveReady && items.length < want && live.hasMore()) {
                moreBtn.disabled = true;
                moreBtn.textContent = "Đang tải…";
            }
            ensure(want).catch(function (err) { console.warn("Không tải thêm được từ API:", err); })
                .then(function () { if (token === T.state.token) draw(false); });
        });

        draw(true);
        if (!live) return;

        live.fetchNext().then(function (first) {
            if (token !== T.state.token || !first.length) return;
            var same = first.length >= shown && items.slice(0, shown).every(function (a, i) { return first[i].id === a.id; });
            items = first;
            liveReady = true;
            if (same) { refreshUi(); return; } // bài đang hiện không đổi: khỏi vẽ lại
            var keep = Math.max(shown, FIRST_PAGE);
            ensure(keep).catch(function () {}).then(function () { if (token === T.state.token) draw(true, keep); });
        }).catch(function (err) {
            console.warn("Không gọi được API, dùng dữ liệu lưu sẵn:", err);
        });
    }

    T.setupPress = setupPress;
})();

/* ===== src/js/effects.js ===== */
/* Hiệu ứng: hero vào sân khấu, parallax chuột, tiến trình cuộn, menu mobile */
(function () {
    var T = window.TT = window.TT || {};
    var reduceMotion = T.reduceMotion;

    // Hiệu ứng toàn trang: hero, parallax, thanh tiến trình, menu, nút lên đầu
    T.initEffects = function () {
        // Hero: rời màn hình thì reset, cuộn lên lại thì chạy lại hiệu ứng vào sân khấu
        var heroEl = document.querySelector(".hero");
        if (heroEl) {
            new IntersectionObserver(function (entries) {
                var on = entries[0].isIntersecting;
                if (!on) { heroEl.classList.add("is-off"); return; }
                if (heroEl.classList.contains("is-off")) {
                    void heroEl.offsetWidth;
                    requestAnimationFrame(function () { heroEl.classList.remove("is-off"); });
                }
            }, { threshold: 0, rootMargin: "-5% 0px -5% 0px" }).observe(heroEl);
            // Sau màn mở đầu, các lần phát lại không cần chờ
            setTimeout(function () { document.documentElement.style.setProperty("--intro", "0s"); }, 3500);
        }

        // Parallax theo chuột ở hero
        var hero = document.querySelector(".hero");
        var visual = document.querySelector(".hero__visual");
        if (hero && visual && !reduceMotion && window.matchMedia("(hover: hover)").matches) {
            hero.addEventListener("mousemove", function (e) {
                var r = hero.getBoundingClientRect();
                visual.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
                visual.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
            });
            hero.addEventListener("mouseleave", function () {
                visual.style.setProperty("--mx", 0);
                visual.style.setProperty("--my", 0);
            });
        }

        // Thanh trên, menu di động, nút lên đầu
        var topbar = document.querySelector(".topbar");
        var toTop = document.querySelector(".to-top");
        var nav = document.getElementById("topnav");
        var toggle = document.querySelector(".topbar__toggle");
        var ticking = false;
        var progress = document.querySelector(".progress");
        var hex = document.querySelector(".hero__hex");
        window.addEventListener("scroll", function () {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(function () {
                ticking = false;
                var max = document.documentElement.scrollHeight - window.innerHeight;
                progress.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
                if (hex && !reduceMotion && window.scrollY < 1200) hex.style.transform = "translateY(" + (window.scrollY * 0.18).toFixed(1) + "px)";
                topbar.classList.toggle("is-scrolled", window.scrollY > 10);
                toTop.classList.toggle("is-visible", window.scrollY > 700);
            });
        }, { passive: true });
        toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        nav.addEventListener("click", function (e) {
            if (e.target.closest("a")) { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
        });
    };
})();

/* ===== src/js/main.js ===== */
/* Khởi tạo trang: chọn năm, điều hướng theo #năm */
(function () {
    var T = window.TT = window.TT || {};
    var events = T.events, site = T.site, reduceMotion = T.reduceMotion, observeReveal = T.observeReveal;
    var yearsEl = document.getElementById("years");
    var detailEl = document.getElementById("detail");

    function findEvent(year) {
        for (var i = 0; i < events.length; i++) if (String(events[i].year) === String(year)) return events[i];
        return null;
    }

    function select(year, opts) {
        var ev = findEvent(year);
        if (!ev) return;
        opts = opts || {};
        T.state.token += 1;
        yearsEl.querySelectorAll(".year").forEach(function (b) {
            var on = b.getAttribute("data-year") === String(ev.year);
            b.classList.toggle("is-active", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
            if (on && yearsEl.scrollWidth > yearsEl.clientWidth) {
                yearsEl.scrollTo({ left: b.offsetLeft - 20, behavior: reduceMotion ? "auto" : "smooth" });
            }
        });
        detailEl.innerHTML = T.renderDetail(ev);
        observeReveal(detailEl);
        T.setupPress(ev, T.state.token);
        if (opts.updateHash) history.replaceState(null, "", "#" + ev.year);
        if (opts.scroll) {
            document.getElementById("archive").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        }
    }

    function init() {
        if (site.kicker) document.getElementById("hero-kicker").textContent = site.kicker;
        if (site.desc) document.getElementById("hero-desc").textContent = site.desc;
        if (events[0] && events[0].cover) document.getElementById("hero-img").src = events[0].cover;

        T.renderYears();

        yearsEl.addEventListener("click", function (e) {
            var btn = e.target.closest(".year");
            if (btn) select(btn.getAttribute("data-year"), { updateHash: true });
        });
        // Liên kết dạng #2025 ở nơi khác trên trang
        document.addEventListener("click", function (e) {
            var a = e.target.closest('a[href^="#20"]');
            if (!a) return;
            e.preventDefault();
            select(a.getAttribute("href").slice(1), { updateHash: true, scroll: true });
        });

        var fromHash = (location.hash || "").replace("#", "");
        select(findEvent(fromHash) ? fromHash : events[0].year);
        if (findEvent(fromHash)) {
            setTimeout(function () { document.getElementById("archive").scrollIntoView(); }, 50);
        }

        // Hiện dần các khối [data-reveal] mỗi lần cuộn tới
        observeReveal(document);

        T.initEffects();

        // Màn mở đầu chỉ chạy 1 lần/phiên
        try { sessionStorage.setItem("ttdt-intro", "1"); } catch (e) {}
    }

    // Chạy sau khi DOM sẵn sàng (script có thể được nạp ở <head> hoặc cuối <body>)
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
