"use stcrict";

// let a = 5,
//     b = a;


// b = b+5;

// console.log(b);
// console.log(a);

//!Результат разный, так как передаётся по значению
//мы изменяем это значение у каждой переменной отдельно


//!с объектами и массивами всё обстоит иначе, передаётся
// по ссылке, т.е. оригинал и копия будут меняться вместе
// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылка на объект, а не передача значений

// copy.a = 10;

// console.log(copy);
// console.log(obj);

//!создание копий объектов и массивов 1 СПОСОБ

function copy(mainObj) { //цикл передачи свойств в копию
    let objCopy ={};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

//Создаётся поверхностная копия массива, т.к. внутренние 
//свойства в виде объектов всё равно передаются по ссылке
//В будущем будут способы также их передавать по значению
//то есть менять только копию

//!2 СПОСОБ копирования объектов

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //этот объект
//независим от add или numbers, так мы объединяем свойства 
//объектов

const clone = Object.assign({}, add);
//на месте фигурных скобок создали пустой объект

clone.d = 20

console.log(add);
console.log(clone);

//по итогу в источнике-объекте add ничего не изменилось
//а в clone изменения есть

//!3СПОСОБ создания копии массива

const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; //всё также создаётся ссылка
//для создания копии прописываем  slice:

const newArray = oldArray.slice();

newArray[1] = 'assadasdasd'
console.log(newArray);
console.log(oldArray);

//!4СПОСОБ с новыми стандартами ES6 и ES8:

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; 
      //добавляем троеточие и сам массив(оператор разворота
      //или spread-оператор)

console.log(internet);

//другой пример:

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

//этот же пример с объектами

const array = ["a", "b"];

const newArray = [...array];
console.log(newArray);

const q = {
    one: 1,
    two: 2
};

const newObj ={...q};
console.log(newObj);

