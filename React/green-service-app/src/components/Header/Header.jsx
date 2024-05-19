import React from 'react';
import cl from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={cl.header_div}>
            <div className={cl.left_block}>
                <Link className={cl.logo} to='/'>
                    <h1 className={cl.h1}>Green Service</h1>
                    <h2 className={cl.h2}>Ремонт цифровой и электронной техники</h2>
                </Link>
            </div>
            <div className={cl.right_block}>
                <div className={cl.header_buttons}>
                        <Link className={cl.header_button} to='/About'>О компании</Link>
                    <div className={cl.divide}/>
                        <Link className={cl.header_button} to='/Contacts'>Контакты</Link>
                    <div className={cl.divide}/>
                        <Link className={cl.header_button} to='/Status'>Статус ремонта</Link>
                </div>
                <div className={cl.contacts}>
                    <h1 className={cl.phone}>Velcom: +375 (29) 3-683-683<br/>MTC: +375 (29) 5-683-683</h1>
                    <button className={cl.call_me}>Заказать звонок!</button>
                </div>
            </div>
        </div>
    );
};

export default Header;