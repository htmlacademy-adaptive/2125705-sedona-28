const burger = document.querySelector('.toggle');
const header = document.querySelector('.no-js');

header.classList.remove('no-js');

burger.addEventListener('click',() => {
  header.classList.toggle('is-open');
});
