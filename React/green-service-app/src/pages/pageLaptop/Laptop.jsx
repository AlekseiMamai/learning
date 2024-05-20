import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from '../../components/Footer/Footer';
import LaptopContent from './LaptopContent';

const Laptop = () => {
    return (
        <div>
            <Header />
            <Menu />
            <LaptopContent />
            <Footer />
        </div>
    );
};

export default Laptop;