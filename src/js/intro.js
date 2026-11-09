/* Bật màn mở đầu 1 lần/phiên (chạy sớm trong <head>, bỏ qua nếu giảm chuyển động hoặc có ?nointro) */
try {
    if (!sessionStorage.getItem("ttdt-intro") && location.search.indexOf("nointro") === -1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.classList.add("has-intro");
    }
} catch (e) {}
