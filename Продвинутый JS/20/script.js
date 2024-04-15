'use strict'

//Инкапсуляция

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;
// ivan.name ="Alex";

// ivan.say();

//Это наглядный пример вмешательства в исходные данные создаваемого объекта

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.userAge = 30;
// ivan.name ="Alex";

// ivan.say();

//Есть прямой доступ к userAge, но изменить его нельзя, т.к. этот доступ undefined
//Для инкапсуляции используем геттеры и сеттеры

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge
//     };//возможность обращения к userAge

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 120) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение!')
//         }
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

//!!!Пример для классов

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    //экспериментальный функционал
    //можно добавлять свойства вне конструктора
    // surename = 'Ivanov';
    #surename = 'Ivanov'; //так задаётся приватность
    //

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surename}, возраст ${this._age}`);
    };

    get age() {
        return this._age
    };//возможность обращения к userAge

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 120) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!')
        }
    };
    
}

const ivan = new User('Ivan', 27);
console.log(ivan._age);
ivan.age = 99;
console.log(ivan._age);

console.log(ivan.surname); //вызов уже без #

ivan.say();

//По сути геттеры и сеттеры нужны для инкапсуляции, т.е. использование
//переменных в непрямом доступе объекта. При объявлении _age подразумевается
//что прямого доступа к этому свойству объекта быть не должно. Задаются геттеры
//сеттеры, а уже после создании нового объекта класса эти аксессоры используются.
//console.log(ivan.age) - закрытый доступ к свойству нового объекта
//console.log(ivan._age) - открытый доступ полностью обходя геттеры и сеттеры(не рекомендуется)



