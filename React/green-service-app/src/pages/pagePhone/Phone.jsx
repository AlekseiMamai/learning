import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from '../../components/Footer/Footer';
import PhoneContent from './PhoneContent';

const Phone = () => {
    return (
        <div>
            <Header />
            <Menu />
            <PhoneContent />
            <Footer />
        </div>
    );
};

export default Phone;