import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import SamsungContent from './SamsungContent';
import Footer from '../../../../components/Footer/Footer';

const Samsung = () => {
    return (
        <div>
            <Header />
            <Menu />
            <SamsungContent />
            <Footer />
        </div>
    );
};

export default Samsung;