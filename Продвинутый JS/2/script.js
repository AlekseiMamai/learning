'use strict'

//JSON
//Объект при отправке на сервер не передастся, его нужно перевести
//подходящий формтат stringify
const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: "Mike"
    }
};

console.log(JSON.stringify(person));

//Если с сервера приходит JSON файл, то его можно получить
//вторым методом для нужного формата и использования в скрипте
//parse

console.log(JSON.parse(JSON.stringify(person)));

//!!!Создание глубокой копии объекта с помощью метода parse,
//которая независима от первоначального объекта
const clone = JSON.parse(JSON.stringify(person));

//Проверка
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);
