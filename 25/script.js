'use strict';

//получение элементов со страницы
//!!!!1) старый метод, распространённый
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); //получение 
//не элемента, а псевдомассива по тэгу элемента

//const btns = document.getElementsByTagName('button')[1];
//получение кокретного элемента из коллекции btns
//!!!Если элемент в коллекции один, то даже так с ним нельзя
//работать напрямую, т.к. он как HTML коллекция ничего не знает
//о странице. К нему нужно обращаться напрямую [1]

const circles = document.getElementsByClassName('circle');
console.log(circles);


//!!!современные методы
const hearts = document.querySelectorAll('.heart');
//обязательно ставить точку. у этого метода есть метод forEach

console.log(hearts);
hearts.forEach(item => {
    console.log(item);
    })
//выводим с помощью forEach и callback функции вутри все элементы



const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
//querySelector позволяет выбрать один первый элемент, 
//попавшийся под заданное условие