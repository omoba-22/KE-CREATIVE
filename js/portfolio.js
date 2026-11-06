(function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;

    const cards = document.querySelectorAll('.portfolio-card[data-category]');

    function applyFilter(filter) {
        cards.forEach(card => {
            card.classList.toggle('hidden', card.dataset.category !== filter);
        });
        document.querySelectorAll('.video-wrapper video').forEach(v => {
            if (v.closest('.portfolio-card.hidden')) v.pause();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
        });
    });

    const activeBtn = document.querySelector('.filter-btn.active') || filterBtns[0];
    activeBtn.classList.add('active');
    applyFilter(activeBtn.dataset.filter);

    const requested = new URLSearchParams(window.location.search).get('tab');
    if (requested) {
        const tabBtn = document.querySelector(`.filter-btn[data-filter="${requested}"]`);
        if (tabBtn) tabBtn.click();
    }
})();