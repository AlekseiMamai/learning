import React from 'react';
import cl from './Menu.module.css';

const MenuButton = ({item}) => {
    return (
        <div className={cl.MenuButton}>
            <div className={cl.image}>
                <img src={item.url} alt=''/>
            </div>
            <div className={cl.name}>{item.name}</div>
        </div>
    );
};

export default MenuButton;