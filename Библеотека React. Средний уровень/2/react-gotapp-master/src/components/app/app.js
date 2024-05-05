import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import { BookPage, BooksItem } from '../bookPage';
import HousePage from '../housePage';
import GotService from '../services/gotService';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.css';


export default class App extends Component {

    gotService = new GotService();

    state = {
        toggle: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                toggle: !state.toggle, 
//замена старого значения состояние новым(инверсия true->false->true)
            }           
        });
    }

    render() {

        const { toggle } = this.state;
        const random = toggle ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className='app'> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {random}
                                <button 
                                    className="btn-toggle" 
                                    onClick={this.toggleRandomChar}>ToggleRandomCharacter</button>
                            </Col>
                        </Row>
                        <Routes>
                            <Route path='/' exact element={() => <h1>Welcome to GOT DB</h1>}/>
                            <Route path='/characters' Component={CharacterPage}/>
                            <Route path='/houses' Component={HousePage}/>
                            <Route path='/books' exact Component={BookPage}/>
                            <Route path='/books/:/id' Component={ 
                                <BooksItem />
                                }/>
                        </Routes>
                    </Container>
                </div>
            </Router>
        );
    }

}