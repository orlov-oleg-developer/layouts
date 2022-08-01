// VARIABLES

const selectors = {
  header: '.header',
  menuIcon: '.header__menu-icon',
  menuPopup: '.header__menu-popup',
  popupLink: '.header__links-item',
  root: '.root',

  worksButton: '#works-button',

  ESC_CODE: 'Escape',
}

const header = document.querySelector(selectors.header);
const menuIcon = header.querySelector(selectors.menuIcon);
const menuPopup = header.querySelector(selectors.menuPopup);
const root = document.querySelector(selectors.root);

const worksButton = header.querySelector(selectors.worksButton);

// MAIN LOGIC

menuIcon.addEventListener('click', openMenuPopup);

root.addEventListener('mouseup', (event) => {
  console.log(event.target);
  if(event.target !== event.currentTarget) {
    return
  }
  closeMenuPopup ();
});

document.addEventListener('keydown', (event) => {
  if(!menuPopup.classList.contains('header__menu-popup_active')) {
    return
  }
  if(event.key === selectors.ESC_CODE) {
    closeMenuPopup();
  }
})

worksButton.addEventListener('click', () => {
  window.location.href = '../works.html'
})

// FUNCTIONS

function openMenuPopup () {
  menuPopup.classList.add('header__menu-popup_active');
  root.classList.add('root_bg');
}

function closeMenuPopup () {
  menuPopup.classList.remove('header__menu-popup_active');
  root.classList.remove('root_bg');
}
