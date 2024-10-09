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

