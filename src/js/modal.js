const spritePath = new URL('../img/sprite.svg', import.meta.url).href;

// Відкриття/закриття мобільного меню
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    toggleBtn: document.getElementById('toggleMenu'),
    icon: document.querySelector('#toggleMenu use'), // Отримуємо use всередині SVG
  };

  function toggleModal() {
    const isOpen = refs.modal.classList.toggle('is-open');

    // Міняємо іконку бургер-кнопки
    if (isOpen) {
      refs.icon.setAttribute('href', `${spritePath}#icon-x`);
    } else {
      refs.icon.setAttribute('href', `${spritePath}#icon-menu`);
    }
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.toggleBtn.addEventListener('click', toggleModal);
})();

// Закриття меню при кліку на пункт навігації
document.querySelectorAll('.nav-list-link-modal').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('[data-modal]').classList.remove('is-open');

    // Повертаємо іконку бургер-кнопки назад
    document
      .querySelector('#toggleMenu use')
      .setAttribute('href', `${spritePath}#icon-menu`);
  });
});
