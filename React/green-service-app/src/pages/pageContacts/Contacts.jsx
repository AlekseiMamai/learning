import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContactsContent from "./ContactsContent";

const Contacts = () => {
    return (
        <div>
            <Header />
            <Menu />
            <ContactsContent />
            <Footer />
        </div>
    );
};

export default Contacts;