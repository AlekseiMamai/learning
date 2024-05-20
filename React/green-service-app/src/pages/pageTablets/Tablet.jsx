import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from '../../components/Footer/Footer';
import TabletContent from './TabletContent';

const Tablet = () => {
    return (
        <div>
            <Header />
            <Menu />
            <TabletContent />
            <Footer />
        </div>
    );
};

export default Tablet;