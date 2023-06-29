"use stcrict";

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
    
// };

console.log(options.name);

delete options.name; //удаление компонентов объекта

console.log(options);




// for (let key in options) { // конструкция for key 
//                             //для перебора ключей объекта
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
// }

//мы выводим содержимое объекта в виде строки
//объект внутри объекта он выведет в виде object Object
//можно создать перебор для объектов внутри объекта с помощью
//условий

for (let key in options) { 
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}



//функции и методы объекта


console.log(Object.keys(options).length);

//чтобы не создавать перебор для нахождения количества
//ключей, можно использовать метод объектов Object.keys
//он позволяет обращаться к объекту как к строке и использовать его
//свойства, например, length
//Так находится количество ключей методом объекта



//можно создавать методы самостоятельно в виде функций

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

console.log(Object.keys(options).length);

options.makeTest();



//деструктуризация объектов

const {border, bg} = options.colors; //вытаскиваем 
//свойства объектов для отдельной работы с ними

console.log(border);