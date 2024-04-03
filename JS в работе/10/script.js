'use strict'

//Контекст вызова this
// function showThis() {
//     console.log(this);
// }

// showThis();
// 1) Внутри функции. Без строгого режима контекст this ссылается на объект window
//В строгом режиме контекст this ссылается на undefined


// function showThis(a, b) {
//         console.log(this);
//         function sum() {
//             console.log(this); // проверка контекста
//             return a + b; //нужен this или не нужен
//         }
// //this не нужен, т.к. строгий режим. со строгим режимом идёт расчёт на то,
// //что функция найдёт переменные замыканием - сначала внутри себя,
// //потом на этапе выше у родительской функции где a и b аргументы
//         console.log(sum());
//     }

// showThis(4, 5);

//2)Внутри объекта. Если метод используется внутри объекта,
//то контекст вызова именно этот объект
//!!!Если в функции объекта есть функция, то контекст 
//вызова последней не будет объект - undefined

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

//3) В функции-конструкторе и классе контекст вызова будет 
// создаваемый объект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello, ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 23);

//4) !!!Присвоение this любой функции вручную


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
//Одинаковые методы, разве что аргументы присваиваются по-разному


//!!!Создаёт новую функцию, связанную с определённым контекстом
// function count(num) {
//     return this*num;
// }
//Сначала создаём функцию и присваиваем её новой переменной,
//Которая становится функцией, отдельной от первоначальной
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));





const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
    // console.log(this);
    //Если использовать обычную функцию, то контекст вызова это
    //элемент, на котором осуществляется событие

    //this может работать как event.target
//     this.style.backgroundColor = 'red';


// }); 



//У стрелочной функции нет своего контекста, она будет брать его
//у своего родителя

// const obj = {
//     num: 5,
//     sayNumber : function() {
//         const say = () => {
//             console.log(this.num)
//Здесь контекст не undefined, а объект, потому что функция
//Стрелочная и береёт контекст функции, в которой находится
//         };

//         say();
//     }
// };

// obj.sayNumber();


//Напоминание. Если стрелочная функция принимает один аргумент
//и выполняет одно простое действие, то её можно сократить

// const double = (a) => {
//     return a * 2;
// };

//Сокращение
// const double = a => a * 2;
// console.log(double(4));

//Поэтому если использовать контекст в стрелочной функции,
//то мы получим undfined или window в зависимости от условий

//window
// btn.addEventListener('click', () =>{
//     console.log(this);
// });

//undefined
// btn.addEventListener('click', (e) =>{
//     this.style.backgroundColor = 'red'
// });

//фиксится e.target
btn.addEventListener('click', (e) =>{
    e.target.style.backgroundColor = 'red'
});



