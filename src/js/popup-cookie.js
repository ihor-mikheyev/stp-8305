const ref = {
  popupWindow: document.getElementById('popup'),
  acceptButton: document.getElementById('button-accept'),
  declineButton: document.getElementById('button-decline'),
};

showPopup();

ref.acceptButton.addEventListener('click', acceptCookies);
ref.declineButton.addEventListener('click', declineCookies);

function acceptCookies() {
  localStorage.setItem('popup-cookie', 'accepted');
  ref.popupWindow.style.display = 'none';
}

function declineCookies() {
  localStorage.setItem('popup-cookie', 'declined');
  ref.popupWindow.style.display = 'none';
}
function showPopup() {
  if (
    localStorage.getItem('popup-cookie') === null ||
    localStorage.getItem('popup-cookie') === 'declined'
  ) {
    ref.popupWindow.style.display = 'block';
  } else {
    ref.popupWindow.style.display = 'none';
  }
}
