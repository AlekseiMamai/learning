import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from '../../components/Footer/Footer';
import DesktopContent from './DesktopContent';

const Desktop = () => {
    return (
        <div>
            <Header />
            <Menu />
            <DesktopContent />
            <Footer />
        </div>
    );
};

export default Desktop;