import React from 'react';
import { Link } from 'react-router-dom';
import cl from './LaptopContent.module.css'

const talbletItems = [
    { id: 0, url: 'http://localhost:3000/laptopImg/msi.jpg', name: 'MSI' },
    { id: 1, url: 'http://localhost:3000/laptopImg/apple.jpg', name: 'Apple' },
    { id: 2, url: 'http://localhost:3000/laptopImg/hp.jpg', name: 'HP' },
    { id: 3, url: 'http://localhost:3000/laptopImg/lenovo.jpg', name: 'Lenovo' },
    { id: 4, url: 'http://localhost:3000/laptopImg/asus.jpg', name: 'Asus' },
    { id: 5, url: 'http://localhost:3000/laptopImg/samsung.jpg', name: 'Samsung' },
    { id: 6, url: 'http://localhost:3000/laptopImg/sony.jpg', name: 'Sony' },
    { id: 6, url: 'http://localhost:3000/laptopImg/dell.jpg', name: 'Dell' },
]

const LaptopContent = () => {
    return (
        <div className={cl.LaptopContent}>
            <div>Ремонт в минске {'>'} Ноутбуки</div>
            <div className={cl.Title}>Ремонт ноутбуков в Минске<br/>Выберите подходящего производителя вашего устройства</div>
            <div className={cl.LaptopList}>
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

export default LaptopContent;