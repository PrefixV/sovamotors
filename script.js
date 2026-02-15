const navMobileButton = document.querySelector(".nav__mobile__button");
const header = document.querySelector(".header");

navMobileButton.addEventListener('click', () => {
    header.classList.toggle("header__mobile__active");
})