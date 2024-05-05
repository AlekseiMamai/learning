import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    // constructor() {
    //     super();
        // this.updateChar();
//Жизненный цикл. Нам нужно вызывать updateChar, когда компонент уже был создан.
//Запустить интервал только после апдейта. Удалить интервал нужно только тогда, когда
//отработает предыдущий и не раньше
//Не смотря на пример выше не рекомендуется делать запрос с сервера в конструкторе
//Поэтому мы переместим его в componentDidMount с интервалом, а удаление интервала в
//componentWillUnmount 
    // }
    gotService = new GotService(); //импорт gotService
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();//необходимо в props записать функцию, которая возвращает массив персонажей
        this.timerId = setInterval(this.updateChar, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => { //class field без bind
        this.setState({
            char: char,
            loading: false
        }   
    );
    }

    onError = (err) => {
         this.setState({
            error: true,
            loading: false
         });
    }

    updateChar = () => {//стрелочная, т.к. используется в интервале в props, чтобы контекст был объекта
        const id = Math.floor(Math.random()*140+25); //от 25 до 140 персонажа
        // const id = 1300000;
        this.gotService.getCharacter(id) //здесь возвращается promise, его нужно обработать
        //После редактирования функций в сервисе, ниже приходит новый сформированный объект   
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;
        

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}