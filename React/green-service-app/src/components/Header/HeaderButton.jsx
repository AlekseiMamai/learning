import React from 'react';
import cl from './Header.module.css'

const HeaderButton = ({children}) => {
    return (
        <button  className={cl.header_button}>
            {children}
        </button>
    );
};

export default HeaderButton;