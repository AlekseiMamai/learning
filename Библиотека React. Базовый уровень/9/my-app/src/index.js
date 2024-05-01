import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// 1)React.Fragment

// function WhoAmI(props) { //props - свойство компонента WhoAmI
//   return (
//     // чтобы не ставить div, воспользуемся React.Fragment
//     //современный формат: <> </>
//     //динамически props изменять нельзя
//     <React.Fragment>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </React.Fragment>
//   )
// }




//!!!Пример с деструктуризацией
// function WhoAmI({name, surname, link}) {
//   return (
//     <>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </>
//   )
// }



//2) Используя функции не получится управлять состоянием каждого компонента
//Для этого нужно создать класс

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state ={
      years: 26
    }
    //Способы правильного написания обработчика события на button
    //3.1) Bind
    //Кнопка не будет работать, т.к. нужно привязать обработчик события к кажому компоненту
    //То есть создаётся метод в каждом объекте компонента, и его следует привязать к контексту
    //этого объекта. Тогда обработчик будет срабатывать на конкретном экземплятре
    // this.nextYear = this.nextYear.bind(this);

    //4.2) Можно не использовать Bind и прописывать метод прямо в конструкторе
    // this.nextYear = () => { //Нужно учитывать, что стрелочная функция позволяет использовать контекст родителя
    //   this.setState(state => ({
    //         years: ++state.years
    //   }))
    // }
  }

  //5.3) ClassField. Также они позволяют использовать state вне конструктора, а например прямо перед методом
  nextYear = () => {
      this.setState(state => ({
            years: ++state.years
      }))
    }

  // nextYear() {
  //   // this.state.years++ неправильный вариант изменения состояния
  //   //Правильный пример setState(работает асинхронно):
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        {/* Обработчик события */}
        <button onClick={this.nextYear}>++</button> 
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}


const All = () => {
  return (
    <>
    <WhoAmI name="John" surname="Smith" link="facebook.com" />
    <WhoAmI name="Ivan" surname="Smith" link="vk.com" />
    <WhoAmI name="Alex" surname="Smith" link="facebook.com" />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <All />
);
