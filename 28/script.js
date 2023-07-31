"use stcrict";

//!!!Обработчик событий
//1) Первый способ задать событие - прописать в вёрстке событие
//Не использовать этот способ


//2) Задавать событие с помощью скрипта
const btn = document.querySelectorAll('button'),
  overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }; //такой код тоже не используется

// btn.onclick = function() {
//     alert('Second click');
// }; сработает только второй ивент, т.к. используется
// и тот же элемент

//3) addEventListener();
                            //event
// btn.addEventListener('click', (e) => { //первый аргумент - функциональное название события
//     console.log(e);
//     alert('Click');
// });

//на один элемент могу назначаться друг за другом несколько
//событий 
// btn.addEventListener('click', () => { //первый аргумент - функциональное название события
//     alert('Second click');
// });

//!!!Так можно запросить доступ к свойствам ивента
// btn.addEventListener('click', (e) => { //первый аргумент - функциональное название события
//     console.log(e.target);
//     e.target.remove();
//     alert('Click');
// });

//4) Можно передавать функцию в addEventListener
let i = 0;
const deleteEvent = (e) => { 
        console.log(e.target);
        console.log(e.type);
        // i++;
        // if (i==1) {
        //     btn.removeEventListener('click', deleteEvent);
        // }
};


// btn.addEventListener('click', deleteEvent);
// overlay.addEventListener('click', deleteEvent);



///!!Всплытие событий - когда обработчик обрабатывает событие
//с самого вложенного элемента и так до самого верхнего родителя
//элемента



//!!!Отмена стандартного поведения - соновной способ
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});



///!!!Для всех кнопок в данном примере можно использовать цикл
// или метод forEach

btn.forEach( b => {
    b.addEventListener('click', deleteEvent);
});

//Опции событий - третий аргумент обработчика событий

btn.forEach( b => {
    b.addEventListener('click', deleteEvent, {once: true});
});