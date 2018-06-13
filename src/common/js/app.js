'use strict';

const sliders = document.querySelectorAll('.js-sliderItem');

function activeSlider() {
    Array.prototype.filter.call(this.parentNode.children, child => {
        if (child !== this) {
            child.classList.remove('is-open');
        }
    });
    this.classList.toggle('is-open');

}

sliders.forEach(item => item.addEventListener('click', activeSlider));
