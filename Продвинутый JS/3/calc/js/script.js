'use strict';

//AJAX
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');
      
inputRub.addEventListener('input', () => {
    //Создаём событие для http запроса
    const request = new XMLHttpRequest();

    //Настраиваем аргументы для методов запроса XMLHttpRequest
    //request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json');
    //Что именно передаём
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //Создаём событие с методом, которое отслеживает состояние
    //запроса
    // request.addEventListener('readystatechange', () => {
    //     if(request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Давай по-новой'
    //     }
    // });

    // Что получаем(свойства):
    // status
    // statusText
    // response
    // readyStatus

    //'readystatechange' используется редко, чаще всего используется
    //load

    request.addEventListener('load', () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Давай по-новой'
        }
    });


});