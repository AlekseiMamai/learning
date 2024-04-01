'use strict';

//!!!Модальные окна

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth; 
// const height = box.clientHeight; получение параметров модального
//окна без учёта ползунка

// const width = box.offsetWidth;
// const height = box.offsetHeight; получение с учётом ползунка,
//т.е как указано в css стилях для border, margin и padding

const width = box.scrollWidth;
const height = box.scrollHeight; 
// без учёта ползунка
// в данном случае включается вся высота ползунка, а не только
// его видимая часть



console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
}); //по клику весь текст в окне раскрывается ссылаясь на высоту
// scrollHeight. scrollTop показывает сколько уже было проскролен

console.log(box.getBoundingClientRect());



//!!!!Получение стилей, применённых с помощью css

const style = window.getComputedStyle(box);

console.log(style); //вывод всех примененных стилей
console.log(style.display);

//в js нельзя работать со псевдоэлементами, но в css можно
//const style = window.getComputedStyle(box, второй 
//аргумент для получения доступа к псевдоэлементу);

//!!! Инлайнстиль box.style имеет выше приоритет, чем применённые

console.log(document.documentElement.scrollTop = 1000);
// это можно прописывать в консоли на сайте и задавать значения

// console.log(window.scrollBy(0, 400));
// console.log(window.scrollTo(0, 400)); //на примере википедии

//в данном примере лучше писать

box.scrollBy(0, 400);
box.scrollTo(0, 200);








 




