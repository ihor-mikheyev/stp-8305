const swiper = new Swiper('.myGallerySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '#nextGallerySlide',
    prevEl: '#prevGallerySlide',
  },
});
