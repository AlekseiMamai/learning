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
                <DeviceList />
                <div className={cl.footer_btns_and_phone}>
                    <div className={cl.footer_btns}>
                        <button>О компании</button>
                        <button>Контакты</button>
                        <button className={cl.status_btn}>Статус ремонта</button>
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