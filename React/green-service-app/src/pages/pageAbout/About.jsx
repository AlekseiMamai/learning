import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import AboutContent from './AboutContent';

const About = () => {
    return (
        <div>
            <Header />
            <Menu />
            <AboutContent />
            <Footer />
        </div>
    );
};

export default About;