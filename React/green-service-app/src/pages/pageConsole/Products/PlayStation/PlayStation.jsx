import React from 'react';
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import PlayStationContent from './PlayStationContent';
import Footer from '../../../../components/Footer/Footer';

const PlayStation = () => {
    return (
        <div>
            <Header />
            <Menu />
            <PlayStationContent />
            <Footer />
        </div>
    );
};

export default PlayStation;