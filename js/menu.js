//Show menu on hamburger click
const navigation = 'nav';
const navTrigger = '.navTrigger';
const navItem = '.nav__item';
const full = '.fullpage';

const menu = document.querySelector(navTrigger);
const nav = document.querySelector(navigation);
const items = document.querySelectorAll(navItem);
const page = document.querySelector(full);

const handleMenu = (e) => {
    items.forEach(item => {
    item.classList.toggle('animateOnce');
});
    menu.classList.toggle('active');
    page.classList.toggle('blur');

};

nav.addEventListener('click',handleMenu);
nav.addEventListener('keydown',e => {
    if (e.keyCode === 13){
        handleMenu();
    }
});

page.addEventListener('click', () => {
    menu.classList.remove('active');
    items.forEach(item => item.classList.remove('animateOnce'));
    page.classList.remove('blur');
});


