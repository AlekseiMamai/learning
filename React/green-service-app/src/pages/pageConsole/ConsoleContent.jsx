import React from 'react';
import { Link } from 'react-router-dom';
import cl from './ConsoleContent.module.css'

const talbletItems = [
    { id: 0, url: 'http://localhost:3000/consoleImg/ps.jpg', name: 'PlayStation' },
    { id: 1, url: 'http://localhost:3000/consoleImg/nintendo.jpg', name: 'Nintendo' },
    { id: 2, url: 'http://localhost:3000/consoleImg/xbox.jpg', name: 'Xbox' }
]

const ConsoleContent = () => {
    return (
        <div className={cl.ConsoleContent}>
            <div>Ремонт в минске {'>'} Приставки</div>
            <div className={cl.Title}>Ремонт приставок в Минске<br/>Выберите подходящего производителя вашего устройства</div>
            <div className={cl.ConsoleList}>
                    {talbletItems.map(item => 
                        <Link to={item.name} className={cl.ListItem}>
                            <img src={item.url} alt=''/>
                            <div className={cl.ListItemName}>{item.name}</div>
                        </Link>
                    )}
            </div>
        </div>
    );
};

export default ConsoleContent;