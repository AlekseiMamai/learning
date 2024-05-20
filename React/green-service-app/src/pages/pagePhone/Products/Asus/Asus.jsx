import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import AsusContent from './AsusContent';
import Footer from '../../../../components/Footer/Footer';

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