window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let rotationAngle = scrollPosition % 360;
    const brewImgDiv = document.querySelector('.rotate-image');
    brewImgDiv.style.transform = `rotate(${rotationAngle}deg)`;
});
