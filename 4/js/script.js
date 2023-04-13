"use stcrict";

alert('Hello'); //уведомление пользователя

// const result = confirm("Are you here?"); //вопрос на подтверждение
// console.log(result); // вывод результата в консоль

//const answer = prompt('Вам есть 18?', 'Да'); 
//console.log(answer);
//вопрос на ввод данных
//console.log(typeof(answer)); //вывод типа данных переменной

//Вся информация от пользователя будет приходить в строчном виде

//const answer = +prompt('Вам есть 18?', 'Да'); 
//+ это преобразование в числовой тип
//console.log(answer+5);



const answers = []; // создание пустого массива, куда вводятся ответы

answers[0] = prompt('Как ваше имя', '');
answers[1] = prompt('Как ваша фамилия', '');
answers[2] = prompt('Сколько вам лет', '');
