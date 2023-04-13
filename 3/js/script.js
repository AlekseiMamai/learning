"use stcrict";

let number = 4; //числовой тип данных

console.log(4/0);
console.log('string'*9); //ошибочные оперцации

const person = "Alex"; //строчный тип данных

const bool = true; //да или нет



let und;
console.log(und); //undefined что-то есть, 
//но значение не определено


const obj = {           //тип объект
    name:"Jonh",
    age: 25,
    isMarried: false
};

console.log(obj.name);
console.log(obj["name"]);


let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},[]];
//массив разных типов данных
console.log(arr[1]);