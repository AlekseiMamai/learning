import React from 'react';
import { Link } from 'react-router-dom';
import cl from './DesktopContent.module.css'

const talbletItems = [
    { id: 0, url: 'http://localhost:3000/desktopImg/asus.jpg', name: 'Asus' },
    { id: 1, url: 'http://localhost:3000/desktopImg/apple.jpg', name: 'Apple' },
    { id: 2, url: 'http://localhost:3000/desktopImg/hp.jpg', name: 'HP' },
    { id: 3, url: 'http://localhost:3000/desktopImg/lenovo.jpg', name: 'Lenovo' },
    { id: 4, url: 'http://localhost:3000/desktopImg/dell.jpg', name: 'Dell' },
    { id: 5, url: 'http://localhost:3000/desktopImg/msi.jpg', name: 'MSI' }
]

const DesktopContent = () => {
    return (
        <div className={cl.DesktopContent}>
            <div>Ремонт в минске {'>'} Моноблоки</div>
            <div className={cl.Title}>Ремонт моноблоков в Минске<br/>Выберите подходящего производителя вашего устройства</div>
            <div className={cl.DesktopList}>
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

export default DesktopContent;