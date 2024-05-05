import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails3, { Field3 } from '../itemDetails3';
import ErrorMessage from '../errorMessage';
import GotService from '../services/gotService';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {

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
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => `${name}`}/>
        )

        const itemDetails = (
            <ItemDetails3 
                itemId={this.state.selectedItem}
                // getData={this.gotService.getHouse}
                >
                <Field3 field='region' label='Region'/>
                <Field3 field='words' label='Words'/>
                <Field3 field='titles' label='Titles'/>
                <Field3 field='overlord' label='Overlord'/>
                <Field3 field='ancestralWeapons' label='Ancestral weapons'/>
            </ItemDetails3>
        )

        return (
            <RowBlock left={itemList} right = {itemDetails}/> 
        )
    }
}