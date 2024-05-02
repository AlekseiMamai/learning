import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../services/gotService';

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
        //важно делать такую проверку, т.к. это может привести к постоянному
        //запросу обновления состояния
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char: char
                })
            })
        // this.foo.bar = 0; //ошибка для теста
        
    }

    render() {

        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }

        const { name, gender, born, died, culture } = this.state.char; //this.state 
        //будет объектом, поэтому дописываем char, чтобы именно из объекта доставать значения

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}