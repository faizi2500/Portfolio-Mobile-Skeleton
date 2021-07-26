const mobileMenuSection = document.querySelector('.mobile-menu-section')
const crossButton = document.querySelector('.cross-button')
const hamburger = document.querySelector('.hamburger')

let menu = false

function openMenu() {
  if (menu == false) {
    mobileMenuSection.style.display = 'block';
    menu = true;
  }

}

hamburger.addEventListener('click', openMenu)
