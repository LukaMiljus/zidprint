document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-image');
    const viewer = document.getElementById('imageViewer');
    const viewerImg = document.getElementById('img01');
    const closeBtn = document.querySelector('.close');

    images.forEach(image => {
        image.addEventListener('click', function () {
            viewerImg.src = this.src;
            viewer.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Disable scrolling
        });
    });

    const closeViewer = function () {
        viewer.style.display = 'none';
        document.body.style.overflow = ''; // Enable scrolling
    };

    closeBtn.addEventListener('click', closeViewer);
    viewer.addEventListener('click', function (e) {
        if (e.target === viewer) {
            closeViewer();
        }
    });
});