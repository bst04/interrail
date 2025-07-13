// Navegación SPA sidebar
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const mainSections = document.querySelectorAll('.main-section');

function showSection(hash) {
  mainSections.forEach(sec => sec.classList.remove('active'));
  sidebarLinks.forEach(link => link.classList.remove('active'));
  const id = hash.replace('#', '') || 'itinerario';
  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  const activeLink = Array.from(sidebarLinks).find(l => l.getAttribute('href') === '#' + id);
  if (activeLink) activeLink.classList.add('active');
}

window.addEventListener('hashchange', () => showSection(location.hash));
document.addEventListener('DOMContentLoaded', () => showSection(location.hash));

// Modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

function setDarkMode(on) {
  document.body.classList.toggle('dark', on);
  darkModeToggle.textContent = on ? '☀️' : '🌙';
  localStorage.setItem('theme', on ? 'dark' : 'light');
}

if (savedTheme) {
  setDarkMode(savedTheme === 'dark');
} else {
  setDarkMode(prefersDark);
}

darkModeToggle.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark'));
}); 