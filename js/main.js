(function () {
    var site = window.SITE || {};
    var events = window.EVENTS || []; // mới nhất -> cũ nhất
    var FIRST_PAGE = 7; // 1 bài nổi bật + 6 bài
    var NEXT_PAGE = 6;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var yearsEl = document.getElementById("years");
    var detailEl = document.getElementById("detail");
    var currentToken = 0; // bỏ kết quả API về muộn của năm đã chuyển đi

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

    /* ---------------- Render ---------------- */

    function renderYears() {
        yearsEl.innerHTML = events.map(function (ev, i) {
            return '<button type="button" class="year' + (i === 0 ? " year--latest" : "") + '" data-year="' + ev.year + '">' +
                '<span class="year__num">' + ev.year + '</span>' +
                '<span class="year__meta"><b>' + esc(ev.ordinal) + '</b><small>' + esc(ev.location) + '</small></span>' +
            '</button>';
        }).join("");
    }

    function thumb(img) {
        return img ? '<img src="' + esc(img) + '" alt="" loading="lazy">' : '<span class="post__ph">Dân Việt</span>';
    }

    function renderPost(a, lead, i) {
        var date = fmtDate(a.date);
        if (lead) {
            return '<a class="post post--lead" data-reveal="zoom" style="--d:' + (i * 0.07) + 's" href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
                '<div class="post__thumb">' + thumb(a.img) + '</div>' +
                '<div class="post__body">' +
                    '<h4 class="post__title">' + esc(a.title) + '</h4>' +
                    (a.sapo ? '<p class="post__sapo">' + esc(a.sapo) + '</p>' : '') +
                    (date ? '<span class="post__date">' + date + '</span>' : '') +
                    '<span class="post__go">Đọc trên Dân Việt →</span>' +
                '</div></a>';
        }
        return '<a class="post" data-reveal="' + (i % 2 ? "right" : "left") + '" style="--d:' + (i * 0.07) + 's" href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
            '<div class="post__thumb">' + thumb(a.img) + '</div>' +
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
                    (ev.link ? '<a class="btn btn--outline info__link" href="' + esc(ev.link) + '" target="_blank" rel="noopener">Xem chuyên trang trên Dân Việt ↗</a>' : '') +
                '</div>' +
                '<aside class="facts-card" data-reveal="right" style="--d:.15s">' +
                    '<dl>' + facts.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join("") + '</dl>' +
                    (stats ? '<div class="mini-stats">' + stats + '</div>' : '') +
                '</aside>' +
            '</div>' +
            '<div class="press">' +
                '<div class="press__head" data-reveal><h3>Bài báo tư liệu</h3><span class="press__count"></span></div>' +
                '<div class="press__list"></div>' +
                '<div class="press__more" data-reveal><button class="btn btn--outline" type="button">Xem thêm bài</button></div>' +
            '</div>';
    }

    /* ---------------- API CMS Dân Việt ---------------- */
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

    /* ---------------- Danh sách bài + xem thêm ---------------- */

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
            countEl.textContent = total() ? fmt(total()) + " bài" : "";
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
                if (token !== currentToken) return;
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
                .then(function () { if (token === currentToken) draw(false); });
        });

        draw(true);
        if (!live) return;

        live.fetchNext().then(function (first) {
            if (token !== currentToken || !first.length) return;
            var same = first.length >= shown && items.slice(0, shown).every(function (a, i) { return first[i].id === a.id; });
            items = first;
            liveReady = true;
            if (same) { refreshUi(); return; } // bài đang hiện không đổi: khỏi vẽ lại
            var keep = Math.max(shown, FIRST_PAGE);
            ensure(keep).catch(function () {}).then(function () { if (token === currentToken) draw(true, keep); });
        }).catch(function (err) {
            console.warn("Không gọi được API, dùng dữ liệu lưu sẵn:", err);
        });
    }

    /* ---------------- Chọn năm ---------------- */

    function findEvent(year) {
        for (var i = 0; i < events.length; i++) if (String(events[i].year) === String(year)) return events[i];
        return null;
    }

    function select(year, opts) {
        var ev = findEvent(year);
        if (!ev) return;
        opts = opts || {};
        currentToken += 1;
        yearsEl.querySelectorAll(".year").forEach(function (b) {
            var on = b.getAttribute("data-year") === String(ev.year);
            b.classList.toggle("is-active", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
            if (on && yearsEl.scrollWidth > yearsEl.clientWidth) {
                yearsEl.scrollTo({ left: b.offsetLeft - 20, behavior: reduceMotion ? "auto" : "smooth" });
            }
        });
        detailEl.innerHTML = renderDetail(ev);
        observeReveal(detailEl);
        setupPress(ev, currentToken);
        if (opts.updateHash) history.replaceState(null, "", "#" + ev.year);
        if (opts.scroll) {
            document.getElementById("archive").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        }
    }

    /* ---------------- Số đếm ở hero ---------------- */

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

    /* ---------------- Khởi tạo ---------------- */

    function init() {
        if (site.kicker) document.getElementById("hero-kicker").textContent = site.kicker;
        if (site.desc) document.getElementById("hero-desc").textContent = site.desc;
        if (events[0] && events[0].cover) document.getElementById("hero-img").src = events[0].cover;

        renderYears();

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

        // Màn mở đầu chỉ chạy 1 lần/phiên
        try { sessionStorage.setItem("ttdt-intro", "1"); } catch (e) {}

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
    }

    init();
})();
