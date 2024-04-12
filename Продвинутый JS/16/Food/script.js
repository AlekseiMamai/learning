'use strict'

//Регулярные выражения
//Состоит из паттерна и флагов

// new RegExp('pattern', 'flags');//не используется

// /pattern/f современный вариант

//Методы RegExp

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;
//i - вне зависимости от регистра
//g - поиcк несколько вхождение
//m - многострочный режим

//g с search не пройдёт, т.к. метод только первое 
//совпадение ловит

//1) search
// console.log(ans.search(reg)); //так ищется n в значении
//prompt
//Если n есть, то 1, если нет -1

//Есть способ найти несколько n в слове
//2) match
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// /./g - все символы из промпта будут заменены на "*"
// /\./g - так можно находить точку(экранирование)

// console.log('12-34-56'.replace(/-/g, ':'));

//3)test

// const ans = prompt('Введите число');

// const reg = /n/ig;
// console.log(reg.test(ans));

// const ans = prompt('Введите число');

// const reg = /\d/ig;
// console.log(ans.match(reg));

//Для поиска цифр, букв:
// \d - цифры
// \w - буквы
// \s - пробелы

// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

//Обратные классы

// \D - не цифра
// \W - не буква

const str = 'My name is R2D2';
console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));




