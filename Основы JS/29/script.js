"use stcrict";

//!!! Элементы DOM-дерева
// console.log(document.head);

// console.log(document.documentElement);

// console.log(document.body.childNodes);

//Каждый элемент является нодой, но не каждый элемент 
//DOM-элементом

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
//!!!! console.log(document.body.lastElementChild);


//!!!Получение родительского элемента
// console.log(document.querySelector('#current').parentNode.parentNode);
///console.log(document.querySelector('#current').parentNode.parentNode);
///!!!!!console.log(document.querySelector('#current').parentNode.parentElement);
///да, так тоже можно получить родителя родителей


//переход к пердыдущему или следующему соседу
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
//!!!!В некоторых случаях можно попасть на перенос строки и т.д.
//Чтобы этого избежать, используются команды:
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);



//!!!У childNodes нет аналога, так что используется переберающая
//конструкция for of:

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
     } //если узел содержит свойство равное #text, то цикл
       //цикл пропускает итерацию
    
    console.log(node);
}