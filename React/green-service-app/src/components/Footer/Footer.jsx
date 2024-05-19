import React from 'react';
import cl from './Footer.module.css';
import DeviceList from './DeviceList';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={cl.footer_div}>
            <div className={cl.left_block}>
                <Link className={cl.logo} to='/'>
                    <h1 className={cl.h1}>Green Service</h1>
                    <h2 className={cl.h2}>Ремонт цифровой и электронной техники</h2>
                </Link>
            </div>
            <div className={cl.right_block}>
                <DeviceList />
                <div className={cl.footer_btns_and_phone}>
                    <div className={cl.footer_btns}>
                        <Link to='/About' className={cl.footer_btns_button}>О компании</Link>
                        <Link to='/Contacts' className={cl.footer_btns_button}>Контакты</Link>
                        <Link to='/Status' className={cl.footer_btns_status_btn}>Статус ремонта</Link>
                    </div>
                    <div className={cl.footer_phone}>
                        <h2>Velcom: +375 (29) 3-683-683</h2>
                        <h2>MTC: +375 (29) 5-683-683</h2>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Footer;