import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import AcerContent from './AcerContent';
import Footer from '../../../../components/Footer/Footer';

const Acer = () => {
    return (
        <div>
            <Header />
            <Menu />
            <AcerContent />
            <Footer />
        </div>
    );
};

export default Acer;