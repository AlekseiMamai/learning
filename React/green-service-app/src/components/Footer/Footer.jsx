import React from 'react';
import cl from './Footer.module.css';
import DeviceList from './DeviceList';

const Footer = () => {
    return (
        <div className={cl.footer_div}>
            <div className={cl.left_block}>
                <div className={cl.logo}>
                    <h1 className={cl.h1}>Green Service</h1>
                    <h2 className={cl.h2}>Ремонт цифровой и электронной <br/> техники</h2>
                </div>
            </div>
            <div className={cl.right_block}>
                <DeviceList/>
            </div>
        </div>
    );
};

export default Footer;