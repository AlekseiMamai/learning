import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import StatusContent from './StatusContent';

const Status = () => {
    return (
        <div>
            <Header />
            <Menu />
            <StatusContent />
            <Footer />
        </div>
    );
};

export default Status;