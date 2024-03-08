//SetTimeout!!!


// const timerId = setTimeout(function() {
//     console.log('Helo');
// }, 2000); //в миллисекундах
//функция сработает по истечению заданного времени

//ещё один способ написания
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');





//Можно передавать готовую функцию
// const timerId = setTimeout(logger, 2000);

// function logger () {
//     console.log('text');
// }


//setTimeout работает и без образования переменной!!!
//Помещаются они в переменную для того, чтобы различать разные
//асинхронные функции и останавливать их





//clearInterval сбрасывает setTimeout!!!

// clearInterval(timerId);




//Назначение таймера кнопке по клику!!!
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 500);
//     timerId = setInterval(logger, 500); //то же самое что и setTimeout
// });

// clearInterval(timerId); timerId не определён, т.к. 
//он локален в функции события выше. Нужно объявить его глобально
// clearInterval(timerId);


//Удаление таймера работать не будет, т.к. setTimeout асинхронен,
//когда, clearInterval работает в синхронном коде.
//При обновлении страницы в timerId ещё ничего не будет - undefined
//Перезаписываем logger так, чтобы он отслеживал изменения в
//timerId

// function logger () {
//     console.log('text');
// }

function logger () {
    if (i===3) {
        clearInterval(timerId);
    }
        console.log('text');
        i++
}









//!!!setTimeout - рекурсивная функция, т.е. она может вызваться
//внутри себя. Есть проблема, когда задержка setInterval может быть
//такой же, как и работа нагруженной функции или того более.
//Таким образом setTimeout не будет ждать окончания работы
//функции logger, что запустить её ещё раз. Чтобы это решить,
// используется рекурсивынй setTimeout

// const id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500)
// }, 500)








function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
        
    }
}

btn.addEventListener('click', myAnimation);

