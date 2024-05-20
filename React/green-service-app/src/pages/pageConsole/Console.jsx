import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from '../../components/Footer/Footer';
import ConsoleContent from './ConsoleContent';

const Console = () => {
    return (
        <div>
            <Header />
            <Menu />
            <ConsoleContent />
            <Footer />
        </div>
    );
};

export default Console;