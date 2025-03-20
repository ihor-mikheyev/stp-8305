document.addEventListener('DOMContentLoaded', isSmallScreen);
function isSmallScreen() {
  return window.innerWidth < 1200;
}
if (isSmallScreen()) {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '#nextSlide',
      prevEl: '#prevSlide',
    },
  });
} else {
  document.querySelector('.features-list').style.display = 'flex';
  document.querySelector('.features-list').style.flexDirection = 'column';
  document.querySelector('.nav-btn').style.display = 'none';
}
