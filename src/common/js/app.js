'use strict';

const sliders = document.querySelectorAll('.js-sliderItem');

function activeSlider() {
    // sliders.forEach(item => item.classList.remove('is-open'));
    this.classList.toggle('is-open');
}

sliders.forEach(item => item.addEventListener('click', activeSlider));
