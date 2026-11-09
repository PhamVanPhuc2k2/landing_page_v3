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
