import React, { Component } from "react";

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(event) {
        const term= event.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term); //фукнция уже из app.js
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    } 
    
}