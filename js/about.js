(function () {
    /* count-up stats */
    const counters = document.querySelectorAll('.count');

    if (counters.length && 'IntersectionObserver' in window) {
        const animate = el => {
            const target = Number(el.dataset.target);
            const suffix = el.dataset.suffix || '';
            const start = performance.now();
            const duration = 1600;

            const tick = now => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        counters.forEach(c => {
            c.textContent = '0' + (c.dataset.suffix || '');
            observer.observe(c);
        });
    }

    /* brands slider arrows (mobile) */
    const grid = document.getElementById('brandsGrid');
    const prev = document.getElementById('brandsPrev');
    const next = document.getElementById('brandsNext');

    if (grid && prev && next) {
        const update = () => {
            const max = grid.scrollWidth - grid.clientWidth - 4;
            prev.disabled = grid.scrollLeft <= 4;
            next.disabled = grid.scrollLeft >= max;
        };
        prev.addEventListener('click', () => grid.scrollBy({ left: -grid.clientWidth * 0.7, behavior: 'smooth' }));
        next.addEventListener('click', () => grid.scrollBy({ left: grid.clientWidth * 0.7, behavior: 'smooth' }));
        grid.addEventListener('scroll', update);
        window.addEventListener('resize', update);
        update();
    }
})();