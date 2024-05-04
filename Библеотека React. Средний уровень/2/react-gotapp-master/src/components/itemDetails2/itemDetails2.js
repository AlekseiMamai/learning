import React, {Component} from 'react';
import './itemDetails.css';
import GotService from '../services/gotService';

const Field2 = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field2
};

export default class ItemDetails2 extends Component {

    gotService = new GotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateChar();
        }
        //важно делать такую проверку, т.к. это может привести к постоянному
        //запросу обновления состояния
    }
    
    updateChar() {
        const {itemId} = this.props;
        if (!itemId) {
            return;
        }
        
        this.gotService.getBook(itemId)
            .then((item) => {
                this.setState({
                    item: item
                })
            })
        // this.foo.bar = 0; //ошибка для теста
        
    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select something</span>
        }

        const { item }  = this.state;
        const { name } = item; 
        

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