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
