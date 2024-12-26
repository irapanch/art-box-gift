const navMenu = document.querySelector(".header__menu")
const menuMobile = document.querySelector(".menu__list-mobile")
const menuBtn = document.querySelector(".header-mobile-menu-btn")
const menuCloseBtn = document.querySelector(".header-menu-btn-close");

menuBtn.addEventListener('click', () => {

    navMenu.classList.toggle('menu--open');
});

menuMobile.addEventListener('click', () => {

    navMenu.classList.remove('menu--open');
});
menuCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('menu--open'); 
});