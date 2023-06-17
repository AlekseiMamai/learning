"use stcrict";

// function showFirstMessege(text) {
//     console.log(text);
// }

// showFirstMessege("Hello World!");

let num = 20; //доступна глобально

function showFirstMessege(text) {
    console.log(text);
    //let num = 10;      // не доступна глобально
    num = 10;
}

showFirstMessege("Hello World!");
console.log(num);





function calc(a, b){
    return(a+b); //после return ничего не происходит, 
                // на нём функция заканчивается 
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));





function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//классификация функций

//1) функция выше - работает как var, даже если
// вызывается перед её созданием

//2)

const logger = function() {
    console.log('Hello!');
}; // ставим запятую

logger();

//эта функция не может быть вызвана до её создания


//3)

const calc = (a, b) => a + b;
const calc = (a, b) => {
    return a + b
}; // также ставится запятая

calc(4, 5);

// нельзя использовать везде