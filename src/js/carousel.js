document.addEventListener('DOMContentLoaded', function () {
  const reviewList = document.getElementById('reviewList');
  const reviewCards = document.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (reviewCards.length === 0) return;

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = reviewCards[0].offsetWidth + 8;
    const containerWidth = document.querySelector('.carousel').offsetWidth;
    const visiblePart = (containerWidth - cardWidth) / 2;

    let offset = -currentIndex * cardWidth + visiblePart;

    const maxOffset = visiblePart;
    const minOffset = -(reviewCards.length - 1) * cardWidth + visiblePart;

    if (offset > maxOffset) offset = maxOffset;
    if (offset < minOffset) offset = minOffset;

    reviewList.style.transition =
      currentIndex === 0 ? 'none' : 'transform 0.3s ease-in-out';
    reviewList.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener('click', function () {
    if (currentIndex < reviewCards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);

  setTimeout(() => {
    updateCarousel();
  }, 100);
});
