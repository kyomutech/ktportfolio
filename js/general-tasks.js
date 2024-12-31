'use strict';
//Menu
let headerContainer = document.getElementById('header');
let triggerButton = document.getElementById('btn-main-menu');

triggerButton.addEventListener('click', () => {
    headerContainer.classList.toggle('active');
});

//Header con clase fixed
window.onscroll = function() { scrollFunction() };
let header = document.getElementById('header');
let headerFixed = header.offsetTop;

const scrollFunction = () => {
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

// ScrollTop button disappears when loading web page
// document.getElementById("arrow-up").style.display = "none";

// Hide ScrollTop button (Top)
// window.onscroll = function() {
//     scrollFunctionTop()
    
// };