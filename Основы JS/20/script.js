"use stcrict";

//!!ООП

let str = 'some';
let strObj = new String(str); //обарачивает строку в объект

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]); //массив заимствует свойством proto 
//методы объекта

//создание объекта и объекта, который наследует его свойства
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

// const jonh = {
//     health: 100
// };

// // jonh.__proto__ = soldier;//устаревший формат

// Object.setPrototypeOf(jonh, soldier); //современный формат

// console.log(jonh.armor); //благодаря прототипу soldier
// //jonh получил свойство armor

// jonh.sayHello(); //с функциями также



//!!обычно прототипы не присваивают таким образом. всё делается
// на этапе создания


const jonh = Object.create(soldier); //создаём объект jonh,
//который прототипно наследуется от soldier

jonh.sayHello();

