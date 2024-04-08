'use strict';

//Promise

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {

    //Таймер ниже выполняется, а уже таймер внутри него 
    //выполнится только если первый отработал верно(resolve) 
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name:'TV',
            price: 2000
        };
    
        //2 таймер
        resolve(product);

    }, 2000);
    
});

req.then((product) => {
    // const req2 = new Promise ((resolve, reject) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            // reject(); когда resolve не успешен
        }, 2000);
    });
}).then(product => { //метод then является положительным исходом
    product.modify = true;
    return product;
// req2.then(product => {
//     console.log(product);
// });
//Этот код можно не писать, т.к. его переменная уже 
//не создаётся(return new Promise), вместо этого он присоединяется
//выше с использованием точки
}).then(product => {
    console.log(product);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('Finally');
});



//Преимущество promise перед callback функции в том, что promise
//можно вызывать по цепочке

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

//!!!Методы Promise

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All')
// });
//Promise.all ждёт окончание работы всех промисов, указанных в
//массиве, и только потом будет что-то с ними делать

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All')
});

//Promise.race выполянет свои действия только тогда, когда
//хотя бы один promise отработал
