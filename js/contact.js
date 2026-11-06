(function () {
    const select = document.querySelector('form select[name="service"]');
    if (!select) return;

    const requested = new URLSearchParams(window.location.search).get('service');
    if (!requested) return;

    const match = Array.from(select.options).find(o => o.text.trim() === requested.trim());
    if (match) match.selected = true;
})();