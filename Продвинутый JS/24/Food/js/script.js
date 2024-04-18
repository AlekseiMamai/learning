// require('es6-promise').polyfill;
// import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import calc from './modules/calc';
import form from './modules/form';
import slider from './modules/slider';
import { openModal } from './modules/modal'; //т.к. для modalTimerId снизу вызывается setTimeout
//c функцией openModal

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2024-05-25');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    form('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        slide: ".offer__slide"
    });
    calc();

});