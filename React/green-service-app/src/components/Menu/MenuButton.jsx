import React from 'react';
import cl from './Menu.module.css';

const MenuButton = ({slide}) => {
    return (
        <div className={cl.MenuButton}>
            <div className={cl.image}>
                <img src={slide.url} alt=''/>
            </div>
            <div className={cl.name}>{slide.name}</div>
        </div>
    );
};

export default MenuButton;