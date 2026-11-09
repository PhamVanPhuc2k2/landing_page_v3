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
