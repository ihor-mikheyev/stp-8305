document.addEventListener('DOMContentLoaded', function () {
  const reviewList = document.getElementById('reviewList');
  const reviewCards = document.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (reviewCards.length === 0) return; // Якщо карток немає, не запускаємо код

  let currentIndex = 0;
  const cardWidth = reviewCards[0].offsetWidth + 8; // Враховуємо gap між картками

  function updateCarousel() {
    const maxOffset = -(reviewCards.length - 1) * cardWidth;
    let offset = -currentIndex * cardWidth;

    if (offset < maxOffset) {
      offset = maxOffset; // Запобігаємо виходу за останню картку
    }

    reviewList.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < reviewCards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
});
