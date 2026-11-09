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
