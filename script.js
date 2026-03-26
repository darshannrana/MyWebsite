let menu = document.getElementById('nav-links');
let mIcon = document.getElementById('menuIcon');
let cIcon = document.getElementById('closeIcon');

function openMenu() {
  menu.style.display = 'block';
  cIcon.style.display = 'block';
  mIcon.style.display = 'none';
}

function closeMenu() {
  menu.style.display = 'none';
  mIcon.style.display = 'block';
  cIcon.style.display = 'none';
}

let navLinks = document.querySelectorAll('#nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1024) { 
      closeMenu();
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    menu.style.display = '';
    mIcon.style.display = '';
    cIcon.style.display = '';
  }
});