// ОТКРЫТИЕ МОБИЛЬНОГО МЕНЮ

const navMobileButton = document.querySelector(".nav__mobile__button");
const header = document.querySelector(".header");

navMobileButton.addEventListener('click', () => {
    header.classList.toggle("header__mobile__active");
});

// БЛОК СОЦИАЛОК

const socialBlock = document.querySelector('.social__block');
const triggerBtn = document.getElementById('social-trigger');

triggerBtn.addEventListener('click', () => {
  socialBlock.classList.toggle('social__block__hidden');
});

document.addEventListener('click', (e) => {
  if (!socialBlock.contains(e.target) && !triggerBtn.contains(e.target)) {
    socialBlock.classList.add('social__block__hidden');
  }
});