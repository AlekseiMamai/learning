import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import MSIContent from './MSIContent';
import Footer from '../../../../components/Footer/Footer';

const MSI = () => {
    return (
        <div>
            <Header />
            <Menu />
            <MSIContent />
            <Footer />
        </div>
    );
};

export default MSI;