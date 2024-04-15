'use strict';

// const app = '123'; //видна везде, даже если она из другого
//файла


//1 способ создания модуля
const number = 1;

(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}()); //анонимная самовызывающаеся функция

console.log(number);

//2 способ создания модуля - объектный интерфейс
//Записывается модуль в переменную и в нём возвращаеются методы,
//доступные снаружи

const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };

    //конструируем новый объект и записываем в него метод с ссылкой на
    //функцию
    return {
        sayHello: privat
    };
}());

user.sayHello();