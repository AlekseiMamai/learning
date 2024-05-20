import React from 'react';
import { Link } from 'react-router-dom';
import cl from './TabletContent.module.css'

const talbletItems = [
    { id: 0, url: 'http://localhost:3000/tabletImg/acer.jpg', name: 'Acer' },
    { id: 1, url: 'http://localhost:3000/tabletImg/apple.jpg', name: 'Apple' },
    { id: 2, url: 'http://localhost:3000/tabletImg/hp.jpg', name: 'HP' },
    { id: 3, url: 'http://localhost:3000/tabletImg/lenovo.jpg', name: 'Lenovo' },
    { id: 4, url: 'http://localhost:3000/tabletImg/ritmix.jpg', name: 'Ritmix' },
    { id: 5, url: 'http://localhost:3000/tabletImg/samsung.jpg', name: 'Samsung' },
    { id: 6, url: 'http://localhost:3000/tabletImg/sony.jpg', name: 'Sony' },
]

const TabletContent = () => {
    return (
        <div className={cl.TabletContent}>
            <div>Ремонт в минске {'>'} Планшеты</div>
            <div className={cl.Title}>Ремонт планшетов в Минске<br/>Выберите подходящего производителя вашего устройства</div>
            <div className={cl.TabletList}>
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

export default TabletContent;