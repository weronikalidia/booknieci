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
    navBtn.classList.toggle('is-open');
    navList.classList.toggle('is-toggle');
}

navBtn.addEventListener('click', navToggle);

// right menu

const barMenu = document.querySelector('.js-barMenu');
const menuIcon = document.querySelector('.js-menuIcon');

function openMenu() {
    this.classList.toggle('is-active');
    barMenu.classList.toggle('is-open');
}

menuIcon.addEventListener('click', openMenu);

function barMenuHei() {
    let navH = document.querySelector('nav').offsetHeight;
    document.querySelector('.js-barMenu').setAttribute('style', 'height: calc(100vh - ' + navH + 'px)');
}

barMenuHei();
