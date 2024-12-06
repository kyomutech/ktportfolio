'use strict';
//Menu
let headerContenedor = document.getElementById('header');
let botonActivador = document.getElementById('btn-main-menu');

botonActivador.addEventListener('click', () => {
    headerContenedor.classList.toggle('active');
});

//Header con clase fixed
window.onscroll = function() { funcionScroll() };
let header = document.getElementById('header');
let headerFixed = header.offsetTop;

const funcionScroll = () => {
    if (window.pageYOffset > headerFixed) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
        slidesPerView: 1
        },
        768: {
        slidesPerView: 2
        },
        1024: {
        slidesPerView: 3
        }
    }
});