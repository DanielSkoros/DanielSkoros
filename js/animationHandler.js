const isInViewport = (el) => {
    let top = el.offsetTop - 150;
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

const changeMenuColorHandler = () => {
    let children = Array.from(menu.children);
    if (!isInViewport(landing)){
        children.forEach(child => {
            child.style.backgroundColor = 'black';
        });
        items.forEach(item => {
            item.firstChild.style.color = 'black'
        })
    }else {
        children.forEach(child => {
            child.style.backgroundColor = 'white';
        });
        items.forEach(item => {
            item.firstChild.style.color = 'white'
        })
    }
};

const landing = document.querySelector('.landing');

const scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback){ window.setTimeout(callback, 1000/60)};

const elementsToShow = document.querySelectorAll('.show-on-scroll');

const loop = () => {
    changeMenuColorHandler();
    elementsToShow.forEach(element => {
       if (isInViewport(element)) {
           element.classList.add('is-visible');
       }
   });
    scroll(loop);
};

// Call the loop for the first time
loop();
