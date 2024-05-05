import React, { Component } from 'react';
import GotService from '../services/gotService';
import ItemDetails2, { Field2 } from '../itemDetails2';
import { useParams } from 'react-router-dom';

export default class BooksItem extends Component {

    state = {
        item: 1
    }
    
    gotService = new GotService();

    render() {
        
        return(
            <ItemDetails2 
                itemId={this.state.item}>
                <Field2 field='region' label='Region'/>
                <Field2 field='numberOfPages' label='Number of pages'/>
                <Field2 field='publisher' label='Publisher'/>
                <Field2 field='released' label='Released'/>
            </ItemDetails2>
        )
    }
}