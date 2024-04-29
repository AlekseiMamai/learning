import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Header = () => {
  return <h2>Hello World</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styleField = {
    width: '300px'
  }
  return <input 
          style={styleField}//не рекомендуется
          type="text" 
          placeholder={holder}
          autoComplete=""
          className=""
          htmlFor=""/>
}

const Btn = () => {
  const text = 'Log in';
  const logged = false;
  // return <button>{p}</button>
  // return <button>{res()}</button>
  // return <button>{text}</button> //помещение текста внутрь конопки
  //Объекты помещать нельзя

  return <button>{logged ? 'Enter' : text}</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
