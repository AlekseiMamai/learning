import React, { Component } from "react";

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) { 
        this.setState({//тут можно не передавать функцию, т.к. нам не важна её
        //асинхронность или синхронность, не зависит от предыдущего состояния
        //а от того, что ввёл пользователь 
            text: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text} //Контроль состояния
                    //Иначе при сабмите текст в инпуте не очищался
                />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </form>
        )
    }
}