const burger = document.querySelector('.toggle');
const menu = document.querySelector('.navigation__list');
const logo = document.querySelector('.logo');

logo.style.display = 'block';
menu.classList.toggle('navigation__list--close');

if (document.documentElement.clientWidth < 768) {
  burger.style.display = 'block';

  function handleButtonClick() {
    burger.classList.toggle('toggle--close');
    menu.classList.toggle('navigation__list--close');
    menu.classList.toggle('navigation__list--open');
  }

  burger.addEventListener('click',handleButtonClick);
}


