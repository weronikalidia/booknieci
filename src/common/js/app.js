'use strict';

// hp slider

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

// navigation

const navList = document.querySelector('.js-navList');
const navBtn = document.querySelector('.js-navBtn');

function navToggle() {
    this.classList.toggle('is-active');
    navList.classList.toggle('is-open');
}

navBtn.addEventListener('click', navToggle);
