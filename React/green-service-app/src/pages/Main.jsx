import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Slider from "../components/Slider/Slider";
import SecondMenu from "../components/SecondMenu/SecondMenu";
import MenuContent from "../components/MenuContent/MenuContent";

const Main = () => {
    return (
        <div>
            <Header />
            <Menu />
            <Slider />
            <SecondMenu />
            <MenuContent />
            <Footer />
        </div>
    )
}

export default Main;