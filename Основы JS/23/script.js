"use stcrict";
//!!!Динамическая типизация
//1.1 превращение в строку

console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

///1.2!!!Конкатенация

console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


///!!!Превращение в число
//1)
console.log(typeof(Number('4')));

//2))
console.log(typeof(+'5')); //унарный плюс

//3))
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello','');


//!!! Превращение в boolean

//!!!всегда неправда:
0, '', null, undefined, NaN;
//остальное правда

//!!!1)Пример:

let switcher = null;
if (switcher) {
    console.log('working...');
} //не работает, так как условие не выполняется

switcher = 1;

if (switcher) {
    console.log('working...');
} //работает, так как условие выполняется


//2)
console.log(typeof(Boolean('4')));


//3)
console.log(typeof(!!'4444')); //отрицание


