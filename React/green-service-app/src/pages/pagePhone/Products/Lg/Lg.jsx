import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import LgContent from './LgContent';
import Footer from '../../../../components/Footer/Footer';

const Lg = () => {
    return (
        <div>
            <Header />
            <Menu />
            <LgContent />
            <Footer />
        </div>
    );
};

export default Lg;