import React from 'react';
import { Link } from 'react-router-dom';
import cl from './PhoneContent.module.css'

const talbletItems = [
    { id: 0, url: 'http://localhost:3000/phoneImg/lg.jpg', name: 'LG' },
    { id: 1, url: 'http://localhost:3000/phoneImg/apple.jpg', name: 'Apple' },
    { id: 2, url: 'http://localhost:3000/phoneImg/hp.jpg', name: 'HP' },
    { id: 3, url: 'http://localhost:3000/phoneImg/lenovo.jpg', name: 'Lenovo' },
    { id: 4, url: 'http://localhost:3000/phoneImg/asus.jpg', name: 'Asus' },
    { id: 5, url: 'http://localhost:3000/phoneImg/samsung.jpg', name: 'Samsung' },
    { id: 6, url: 'http://localhost:3000/phoneImg/sony.jpg', name: 'Sony' },
    { id: 6, url: 'http://localhost:3000/phoneImg/realme.png', name: 'RealMe' },
]

const PhoneContent = () => {
    return (
        <div className={cl.PhoneContent}>
            <div>Ремонт в минске {'>'} Телефоны</div>
            <div className={cl.Title}>Ремонт телефонов в Минске<br/>Выберите подходящего производителя вашего устройства</div>
            <div className={cl.PhoneList}>
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

export default PhoneContent;