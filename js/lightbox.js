(function () {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const img = document.getElementById('lightboxImg');
    const video = document.getElementById('lightboxVideo');
    const caption = document.getElementById('lightboxCaption');

    function open(type, src, title) {
        caption.textContent = title || '';
        if (type === 'image') {
            img.src = src;
            img.style.display = 'block';
            video.style.display = 'none';
            video.pause();
            video.src = '';
        } else {
            video.src = src;
            video.style.display = 'block';
            img.style.display = 'none';
            img.src = '';
            video.play().catch(() => { });
        }
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        video.pause();
        video.src = '';
        img.src = '';
    }

    document.querySelectorAll('.lightbox-trigger').forEach(el => {
        el.addEventListener('click', () => open('image', el.src, el.dataset.title));
    });
    document.querySelectorAll('.lightbox-video-trigger').forEach(el => {
        el.addEventListener('click', () => {
            const v = el.querySelector('video');
            open('video', (v && v.getAttribute('src')) || el.dataset.src, el.dataset.title);
        });
    });

    document.getElementById('lightboxClose').addEventListener('click', close);
    document.getElementById('lightboxBackdrop').addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();