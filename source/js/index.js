const burger = document.querySelector('.toggle');
const menu = document.querySelector('.navigation__list');
const mapImg = document.querySelector('.map__img');
const mapIframe = document.querySelector('.map__iframe');


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

// Скрывает img
mapImg.classList.add('visually-hidden');
mapIframe.classList.remove('visually-hidden');
