import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import NintendoContent from './NintendoContent';
import Footer from '../../../../components/Footer/Footer';

const Nintendo = () => {
    return (
        <div>
            <Header />
            <Menu />
            <NintendoContent />
            <Footer />
        </div>
    );
};

export default Nintendo;