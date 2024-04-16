import {one as first, two} from './main.js'; //as first - переименование
// По факту импортируется объект
import sayHi from './main.js';//экспорт дефолтный, поэтому в {}
//не нужно юудет оборачивать
//!!!экспорт по умолчанию должен быть только один

// console.log(`${one} and ${two}`);
console.log(`${first} and ${two}`);
sayHi();//по дефолтным вызов делается также без обёртки


//Импорт всего
// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();