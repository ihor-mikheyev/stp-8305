document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.accordion-btn');
    const icon = item.querySelector('.accordion-icon use');
    const text = item.querySelector('.faq-list-text');

    button.addEventListener('click', () => {
      item.classList.toggle('open');

      if (item.classList.contains('open')) {
        text.style.maxHeight = text.scrollHeight + 'px';
        icon.setAttribute('href', './img/sprite.svg#icon-chevron-up'); // Змінюємо іконку
      } else {
        text.style.maxHeight = null;
        icon.setAttribute('href', './img/sprite.svg#icon-chevron-down'); // Повертаємо назад
      }
    });
  });
});
