// Hamburger menu
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  darkToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});
