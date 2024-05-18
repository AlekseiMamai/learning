import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Slider from "../components/Slider/Slider";

const Main = () => {
    return (
        <div>
            <Header />
            <Menu />
            <Slider />
            <Footer />
        </div>
    )
}

export default Main;