import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import RitmixContent from './RitmixContent';
import Footer from '../../../../components/Footer/Footer';

const Ritmix = () => {
    return (
        <div>
            <Header />
            <Menu />
            <RitmixContent />
            <Footer />
        </div>
    );
};

export default Ritmix;