import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {

    state = {
        toggle: true
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

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <>
                                {random}
                                <button className="btn-toggle" onClick={this.toggleRandomChar}>ToggleRandomCharacter</button>
                            </>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}