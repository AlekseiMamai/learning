'use strict'

//Фнкции-конструкторы

const num = new Function(3);
console.log(num);



//Создание функции-конструктора
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    //Также можно описать метод внутри объекта
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушёл`)
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// //Переменные вызываются как объекты, потому что к ним был
//применён конструктор


//Вызов параметров объекта через метод, который объект содержит
ivan.hello();
alex.hello();

//Вызов добавленного метода через свойство прототип
ivan.exit();