//Show menu on hamburger click
const navTrigger = '.navTrigger';
const navItem = '.nav__item';
const full = '.fullpage';

const menu = document.querySelector(navTrigger);
const items = document.querySelectorAll(navItem);
const page = document.querySelector(full);

menu.addEventListener('click', () => {
   menu.classList.toggle('active');
   items.forEach(item => item.classList.toggle('animateOnce'));
   page.classList.toggle('blur');
});

page.addEventListener('click', () => {
    menu.classList.remove('active');
    items.forEach(item => item.classList.remove('animateOnce'));
    page.classList.remove('blur');
});


