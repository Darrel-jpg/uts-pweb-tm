document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("data-container");
    const BASE_URL = window.location.origin;

    function loadData(page = 1, updateURL = true) {
        fetch(`${BASE_URL}/pegawai/${page}`, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
            .then(res => res.text())
            .then(html => {
                container.innerHTML = html;
                if (updateURL) {
                    history.pushState(null, '', `${BASE_URL}/pegawai/${page}`);
                }
            });
    }

    loadData();

    // klik pagination (termasuk tombol prev/next)
    container.addEventListener("click", e => {
        if (e.target.closest(".page-link")) {
            e.preventDefault();
            const page = e.target.closest(".page-link").dataset.page;
            loadData(page);
        }
    });

    // menangani tombol back browser
    window.addEventListener("popstate", () => {
        const pathParts = window.location.pathname.split("/");
        const page = parseInt(pathParts[pathParts.length - 1]) || 1;
        loadData(page, false);
    });
});