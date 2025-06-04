async function loadComponent(id, file, callback) {
  const element = document.getElementById(id);
  if (element) {
    const response = await fetch(file);
    const content = await response.text();
    element.innerHTML = content;

    if (callback) callback();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('navbar', 'components/navbar.html', attachNavbarListeners);
  loadComponent('heading', 'components/heading.html');
  loadComponent('heading-2', 'components/heading-2.html');
  loadComponent('footer', 'components/footer.html');
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});

function attachNavbarListeners() {
  const mobileMenu = document.getElementById('dialog-navbar-mobile');
  const openMenuBtn = document.getElementById('open-navbar-mobile');
  const closeMenuBtn = document.getElementById('close-navbar-mobile');
  const menuBackdrop = document.getElementById('menu-backdrop');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    function toggleMenu(open) {
      if (open) {
        mobileMenu.classList.remove('hidden');
        menuBackdrop.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuBackdrop.classList.add('hidden');
      }
    }

    openMenuBtn.addEventListener('click', () => toggleMenu(true));
    closeMenuBtn.addEventListener('click', () => toggleMenu(false));
    menuBackdrop.addEventListener('click', () => toggleMenu(false));
  }
}
