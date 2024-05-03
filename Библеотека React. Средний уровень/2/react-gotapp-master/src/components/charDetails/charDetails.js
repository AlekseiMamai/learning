import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        item: null
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
            .then((item) => {
                this.setState({
                    item: item
                })
            })
        // this.foo.bar = 0; //ошибка для теста
        
    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select a character</span>
        }

        const {item} = this.state;
        const { name } = item; //this.state 
        //будет объектом, поэтому дописываем char, чтобы именно из объекта доставать значения

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}