//Иммутабельность - содержание переменных, объектов в состоянии невозможности
//их изменения

//У стрелочных функция контекст вызова - родитель, в котором она пребывает

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         say = () => {
//             console.log(this)
//         }
//         say();
//     }
// }

// obj.sayNumber();




//Методы filter и map создают нвоый массив на основе перебора старых

// 1) filter

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

// 2) map

let answers = ['IvAn', 'Anna', 'Hello'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

//Интерполяция
console.log(`Пользователь ${names}, ${age} лет`);

function fetchData(data, count = 0) { //параметр по умолчанию
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('something');



//rest оператор
// function max(...numbers) {
//     console.log(numbers);
// }

max(3, 4, 67);

//spread оператор

// const arr1 = [1, 2, 5],
//       arr2 = [43, 2, 6];

// const res = Math.max(...arr1, ...arr2);
// console.log(res)


//obj spread

// const avatar = 'Photo';
// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights: 'user'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// }

//1) const res = Object.assign({}, user, admin); //{} первым аргументом как пустой объект
//чтобы не перезаписывать user
//2)
// const res = {...user, ...admin, avatar};
// console.log(res);



//Упрощение объектов
// const x = 25, y = 10;
// const coords = {
//     // x: x,
//     // y: y
//     x, // Упрощение
//     y,
//     calcSq() {
//         console.log(this.x*this.y);
//     }
// }

// coords.calcSq();

// console.log(coords);


//Деструктуризация
const user = {
    name1: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

// console.log(user.name);

// const userName = user.name;

const {name1: {first, second}, pass, rights} = user;

console.log(first, second, rights);





// function connect({
//     host = 'localhost',
//     port =  3000,
//     user = 'default'
// }) {
//         console.log(`host: ${host}, port: ${port}, user: ${user}`);
// }

// connect({
//     port: 3000
// });

//Можно вообще не указывать аргументы для connect. Как правило это выдаст ошибку, но её
//можно избежать, если указать в объекте дефолтных значений функции присвоение пустого объекта

function connect({
    host = 'localhost',
    port =  3000,
    user = 'default'
} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect({

});

//И для массивов

// const numbers = [3, 5, 6, 6];

// const [a, b, c] = numbers;
// console.log(a, b, c);

// const [, , c] = numbers;
// console.log(c);

// const numbers = [[3, 5], [6, 6]]; //массив в массиве

// const [[a, b], [c, d]] = numbers;
// console.log(a, b, c, d);


//Деструктуризация пример

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleUnder18, femaleAdult);