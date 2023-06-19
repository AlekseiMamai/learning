"use stcrict";

function first() {
 //
 setTimeout(function(){
    console.log(1);
 }, 500);
}

function second () {
    console.log(2);
}

first();
second(); //функция 2 срабатывает быстрее, чем 1 из-за задержки
// какой бы она ни была


function learnJS (lang, callback) { // callback это аргумент 
//другой функции

    console.log(`Я учу ${lang}`);
    callback();
}

function done () {
    console.log('Я прошёл этот урок');
}

learnJS('JavaScript', done);

//функцию можно вызывать анонимно:
//learnJS('JavaScript', function (){
    //console.log('Я прошёл этот урок');
//});

//Но лучше создавать функцию заранее и вызывать её в аргументе 
//только названием: learnJS('JavaScript', done);