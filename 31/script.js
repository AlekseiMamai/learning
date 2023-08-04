'use strict';

//!!!События на мобильных устройствах
//1)touchstart
//2)touchmove
//3)touchend
//4)touchenter
//5)touchleave
//6)touchcancel


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('Start');
        // console.log(event.touches);
        // console.log(event.targetTouches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log(event.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (event) => {
    //     event.preventDefault();

    //     console.log('End');
    // });
});

//!!!touches - количество пальцев
//targetTouches - пальцы, которые взаимодействуют с конкретным
//элементом
//changedToushes - список пальцев, учавствующих в событии