import React from 'react';
import cl from './SecondMenu.module.css'

const SecondMenuItem = ({item}) => {
    return (
        <div className={cl.SecondMenuItem}>
            <img src={item.url} alt=''></img>
            <div>
                <div className={cl.ItemTitle}>{item.content[0]}</div>
                <div className={cl.ItemContent}>{item.content[1]}</div>
            </div>

        </div>
    );
};

export default SecondMenuItem;