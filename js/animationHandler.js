function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const isInViewport = (el) => {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
};

const landing = document.querySelector('.landing');
const stack = document.querySelector('.stack');

window.addEventListener('scroll', event => {
    let children = Array.from(menu.children);
    if (!isInViewport(landing)){
        children.forEach(child => {
            child.style.backgroundColor = 'black';
        })
    }else {
        children.forEach(child => {
            child.style.backgroundColor = 'white';
        })
    }
});