const burger = document.querySelector('.toggle');
const menu = document.querySelector('.navigation__list');



function handleButtonClick() {
  burger.classList.toggle('toggle--close');
  menu.classList.toggle('navigation__list--close');
  menu.classList.toggle('navigation__list--open');
}

if (document.documentElement.clientWidth < 768) {
  menu.classList.toggle('navigation__list--close');
  burger.addEventListener('click',handleButtonClick);
}

window.addEventListener('resize', (e) => {
  if (document.documentElement.clientWidth < 768) {
    burger.addEventListener('click',handleButtonClick);
  } else {
    burger.removeEventListener('click',handleButtonClick);
    menu.classList.remove('navigation__list--close');
    menu.classList.remove('navigation__list--open');
  }
});
