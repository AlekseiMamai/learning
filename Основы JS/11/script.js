"use stcrict";

let num = 50;

// //цикл while

// while (num <= 55) {
//     console.log(num);
//     num++;
// }




//цикл do while

// do{
//     console.log(num);
//     num++;
// }
// while (num<=55);




//цикл for


// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

//for с break и с continue

for (let i = 1; i < 10; i++) {
    if (i===6){
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i===6){
        continue;
    }
    console.log(i);
}