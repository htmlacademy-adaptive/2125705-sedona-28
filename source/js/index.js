const burger = document.querySelector('.toggle');
const header = document.querySelector('.no-js');

const svgOpen = document.querySelector('.toggle__svg');
const svgClose = document.querySelector('.toggle__svg-close');

header.classList.remove('no-js');

burger.addEventListener('click',() => {
  header.classList.toggle('is-open');
  svgOpen.classList.toggle('visually-hidden');
  svgClose.classList.toggle('visually-hidden');
});
