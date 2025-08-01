const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.getElementById('mobileMenu');

menuIcon.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});