document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.accordion-btn');
    const answer = item.querySelector('.faq-list-text');
    const icon = toggleBtn.querySelector('use');

    toggleBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        item.classList.remove('open');
        icon.setAttribute('href', './img/sprite.svg#icon-chevron-down');
      } else {
        item.classList.add('open');
        icon.setAttribute('href', './img/sprite.svg#icon-chevron-up');
      }
    });
  });
});
