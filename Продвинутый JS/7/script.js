'use strict'

//Методы перебора массивов

//forEach не создаёт новый массив, а просто перебирает старый
//Остальные будут создавать новый массив


//1)filter


// const names  = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);


//2)map (трансформирует по условию и возвращает новый массив)


// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });

// console.log(result);

let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map(item => {
    return item.toLowerCase();
});

console.log(answers);


//3) every/some


const some = [4, 'qwq', 'sfsfsf'];

// console.log(some.some(item => typeof(item) === 'number'));
//при some хотя бы один элемент должен соответствовать условию

console.log(some.every(item => typeof(item) === 'number'));
//все элементы должны соответствовать условию


// 4) reduce (схлопывает массив в результат между членами массива)


// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current, 3);
//summ равна 0, но если после callback-функции 
//поставить число или строку, то summ принимает их значение
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


///!!!
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// const newArr = Object.entries(obj);
//дальше можно работать по цепочке
const newArr = Object.entries(obj) //создаёт массив 
//с массивом свойств объекта(матрица)
.filter(item => item[1] === 'persone')
.map(item => item[0]);


console.log(newArr);