'use strict'

//Date!!!!
// const now = new Date();//таким образом создаётся дата
// //если скобки пустые, то берётся текущая дата

// console.log(now);




//Дополнительные способы ввода!!!
//1)
// const now = new Date('2020-05-01');

// console.log(now);

//2)
// const now = new Date(2020, 5, 1, 20);

// console.log(now);

//3)Передаётся в миллисекундах
// const now = new Date(0);

// console.log(now);


//Методы формата Date!!!!
const now = new Date();

//1)
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());



// console.log(now.getTimezoneOffset());
// console.log(now.getTime());


//2)
// console.log(now.setHours(18));
// console.log(now.setHours(40));//так тоже можно, перебрасывается дата 
//на следующий день исходя из количества часов


//3)
// new Date.parse('2020-05-01');

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();
alert(`Цикл отработал за ${end-start} миллисекунд`)
console.log(now)