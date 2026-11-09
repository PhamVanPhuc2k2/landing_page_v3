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
