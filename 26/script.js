'uses strict'

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), 
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//!!!так можно задать css стиль текстом как в отдельном файле
box.style.cssText = 'background-color: blue; width: 400px'


//!!!!способ изменений нескольких элементов
//цикл
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

//!!!forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


//!!!создание элементов сайта

const div = document.createElement('div');
const text = document.createTextNode('тут был я');


//работа с css классами

//добавление элементов
div.classList.add('black');

// document.body.append(div);
//document.querySelector('.wrapper');
wrapper.append(div); //append создаёт элемент после в конце родителя

// wrapper.prepend(div); //append создаёт элемент в начале родителя

//hearts[0].before(div); //перед элементом

// hearts[0].after(div); //после


// circles[0].remove(); //удаление элемента

// hearts[0].replaceWith(circles[0]);



//!!!старые варианты работы с элементами

// wrapper.appendChild(div); //старый append
// wrapper.insertBefore(div, hearts[0]) // старый before

//старый remove
// wrapper.removeChild(hearts[1]);

//старый replaceWith
// wrapper.replaceChild(circles[0], hearts[0]);


//!!!Способ записи HTML структур
// div.innerHTML = 'Hello World';
div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = 'Hello'; //работает только с текстом,
//HTML структура не сработает

//!!!Вставка HTML структур после или перед тегами
div.insertAdjacentHTML('afterend','<h2>Hello</h2>'); 