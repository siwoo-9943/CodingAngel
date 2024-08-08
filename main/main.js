// 매인 배너 영역
document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.sub-banner-box li');
    let currentIndex = 0;

    function showBanner(index) {
        const bannerBox = document.querySelector('.sub-banner-box');
        const bannerWidth = banners[0].clientWidth;
        bannerBox.style.transform = `translateX(-${index * bannerWidth}px)`;
        // translateX를 사용하여 수평으로 이동
    }

    function nextBanner() {
        currentIndex = (currentIndex + 1) % banners.length;
        showBanner(currentIndex);
    }

    banners.forEach((banner, index) => {
        banner.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            showBanner(index);
        });
    });

    setInterval(nextBanner, 6000);
});