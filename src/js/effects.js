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
