"use stcrict";

const str = 'test'; //длина строки

console.log(str.length);



const arr = [1, 2, 4]; // длина массива

console.log(arr.length);



console.log(str[2]); //выводит символ

console.log(str.toUpperCase()); //повышает регистр, но не изменяет исходные данные




const fruit = 'some fruit';

console.log(fruit.indexOf('fruit')); // нахождение искомого значения

//модификация неизменяемой строки
//1) метод слайс
const logg = 'Hello World';

console.log(logg.slice(0,6)); //последний аргумент не включает символы
console.log(logg.slice(6)); //отсеивание всё позади 6 позиции
//этот метод поддерживает отрицательные значения

