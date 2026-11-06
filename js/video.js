(function () {
    const videos = document.querySelectorAll('.video-wrapper video');
    if (!videos.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.play().catch(() => {});
            else entry.target.pause();
        });
    }, { threshold: 0.4 });

    videos.forEach(video => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        observer.observe(video);
    });
})();