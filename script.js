const mobileMenuSection = document.querySelector('.mobile-menu-section');
const crossButton = document.querySelector('.cross-button');
const hamburger = document.querySelector('.hamburger');
const mobileLinks = document.querySelectorAll('.mobile-links-color');

const list = Array.from(mobileLinks);

let menu = false;

function closeMenu() {
  mobileMenuSection.style.display = 'none';
  menu = false;
}

function openMenu() {
  if (menu == false) {
    mobileMenuSection.style.display = 'block';
    menu = true;
  } else closeMenu();
}

hamburger.addEventListener('click', openMenu);
crossButton.addEventListener('click', closeMenu);

list.forEach((list) => {
  list.addEventListener('click', closeMenu);
})

