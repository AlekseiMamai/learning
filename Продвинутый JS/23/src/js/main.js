//ES6 Module

export let one = 1;

let two = 2;
export {two};

export default function sayHi() { //дефолтный экспорт
    console.log('Hello');
}