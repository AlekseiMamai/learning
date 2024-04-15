'use strict'

//Свойства-акцессоры
//геттеры
// const persone = {
//     name: 'Alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     }
// };

// console.log(persone.userAge);

//сеттеры

const persone = {
        name: 'Alex',
        age: 25,
    
        get userAge() {
            return this.age;
        },

        set userAge(num) {
            this.age = num;
        }
    };
    
    console.log(persone.userAge = 30);
    console.log(persone.userAge);

//Если удалить сеттер, то присвоить 30 уже не получится