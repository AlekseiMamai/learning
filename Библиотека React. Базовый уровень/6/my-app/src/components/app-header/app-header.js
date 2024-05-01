import React from 'react';
import styled from 'styled-components';
// import './app-header.css';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    :hover {
        color: gray;
    }
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}
        //Условие в стилях
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = () => {
    return (
        // <Header colored>
        //     <h1>Aleksei Mamai</h1>
        //     <h2>5 записей, из них понравилось 0</h2>
        // </Header>

        // <Header as='a'> использование как ссылка
        //     <h1>Aleksei Mamai</h1>
        //     <h2>5 записей, из них понравилось 0</h2>
        // </Header>
        
        <Header >
            <h1>Aleksei Mamai</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>  
    )
}

export default AppHeader;