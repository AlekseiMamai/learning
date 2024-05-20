import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import DellContent from './DellContent';
import Footer from '../../../../components/Footer/Footer';

const Dell = () => {
    return (
        <div>
            <Header />
            <Menu />
            <DellContent />
            <Footer />
        </div>
    );
};

export default Dell;