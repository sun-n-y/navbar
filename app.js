const navToggle = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');

navToggle.addEventListener('click', () => {
  navCenter.classList.toggle('show-links');
});
