import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import HpContent from './HpContent';
import Footer from '../../../../components/Footer/Footer';

const Hp = () => {
    return (
        <div>
            <Header />
            <Menu />
            <HpContent />
            <Footer />
        </div>
    );
};

export default Hp;