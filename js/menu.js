//Show menu on hamburger click
const navTrigger = '.navTrigger';
const navItem = '.nav__item';
const full = '.fullpage';

const menu = document.querySelector(navTrigger);
const items = document.querySelectorAll(navItem);
const page = document.querySelector(full);

const handleMenu = () => {
    menu.classList.toggle('active');
    page.classList.toggle('blur');
    items.forEach(item => {
        item.classList.toggle('animateOnce');
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            items.forEach(item => item.classList.remove('animateOnce'));
            page.classList.remove('blur');
        })
    });
};

menu.addEventListener('click',handleMenu);
menu.addEventListener('keydown',event => {
    if (event.keyCode === 13){
        handleMenu();
    }
});

page.addEventListener('click', () => {
    menu.classList.remove('active');
    items.forEach(item => item.classList.remove('animateOnce'));
    page.classList.remove('blur');
});


