'use strict'

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(e) { //объект ошибки
    console.log('error');
}

// console.log(a);
console.log('Still normal');
//Так можно обойти ошибку, последующий скрипт после ошибки будет работать

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error) { //объект ошибки
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    
}

// console.log(a);
console.log('Still normal');