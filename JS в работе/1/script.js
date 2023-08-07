'uses strict'

//!!!!метод ClassList

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
const blueBtn = document.querySelector('button');

btns.forEach((btn) => {
    btn.style.backgroundColor = 'yellow';
    btn.style.paddingTop = '20px';
    btn.style.paddingLeft = '40px';
});

blueBtn.style.backgroundColor = 'blue';
// console.log(btns[0].classList.length); - количество 
//классов элемента
// console.log(btns[0].classList.item(1)); - конкретный класс
// btns[1].classList.add('red'); //добавить класс
// btns[0].classList.remove('blue'); //удалить класс
// btns[0].classList.toggle('blue'); //удалить класс

//если содержит класс, вывести этот класс:
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
        
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

//!!!!делегирование событий

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
                     // event.target.matches('button.red')
        console.log('Hello');
    }
});

//Это важный функционал, т.к. можно не накладывать событие клика
// на каждую кнопку, а наложить событие на родителя и от этого
//работать дальше с элементами этого родителя

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
