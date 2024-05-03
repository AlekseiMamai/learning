import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../services/gotService';


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
            <> 
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
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={((item) => (<span>{item.name}</span>))}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllHouses}
                            renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}