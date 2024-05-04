import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails2, { Field2 } from '../itemDetails2';
import ErrorMessage from '../errorMessage';
import GotService from '../services/gotService';
import RowBlock from '../rowBlock';

export default class BookPage extends Component {

    gotService = new GotService();

    state = {
        selectedItem: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name, publisher}) => `${name} (${publisher})`}/>
        )

        const itemDetails = (
            <ItemDetails2 
                itemId={this.state.selectedItem}>
                <Field2 field='region' label='Region'/>
                <Field2 field='numberOfPages' label='Number of pages'/>
                <Field2 field='publisher' label='Publisher'/>
                <Field2 field='released' label='Released'/>
            </ItemDetails2>
        )

        return (
            <RowBlock left={itemList} right = {itemDetails}/> 
        )
    }
}