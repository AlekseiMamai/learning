import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import LenovoContent from './LenovoContent';
import Footer from '../../../../components/Footer/Footer';

const Lenovo = () => {
    return (
        <div>
            <Header />
            <Menu />
            <LenovoContent />
            <Footer />
        </div>
    );
};

export default Lenovo;