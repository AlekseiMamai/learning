import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import Footer from '../../../../components/Footer/Footer';
import AsusContent from './AsusContent';

const Asus = () => {
    return (
        <div>
            <Header />
            <Menu />
            <AsusContent />
            <Footer />
        </div>
    );
};

export default Asus;