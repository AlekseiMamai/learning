import React, { useState } from 'react';
import MenuButton from './MenuButton';
import cl from './Menu.module.css'
import { Link } from 'react-router-dom';

const Menu = () => {

    const MenuItems = [
        { url: 'http://localhost:3000/imgMenu/Tablet.png', name: 'Планшеты', path: '/Tablets' },
        { url: 'http://localhost:3000/imgMenu/Smartphone.png', name: 'Телефоны', path: '/Phones' },
        { url: 'http://localhost:3000/imgMenu/Desktop.png', name: 'Моноблоки', path: '/Desktops' },
        { url: 'http://localhost:3000/imgMenu/Laptop.png', name: 'Ноутбуки', path: '/Laptops' },
        { url: 'http://localhost:3000/imgMenu/Console.png', name: 'Приставки', path: '/Consoles' }
    ]

    const [menuItems, setMenuItems] = useState(MenuItems);

    return (
        <div className={cl.Menu}>
            <div className={cl.Menu_wrapper}>
            {menuItems.map(item => 
                <Link  to={item.path} className={cl.MenuButton} key={item.url}>
                    <div className={cl.image}>
                        <img src={item.url} alt=''/>
                    </div>
                    <div className={cl.name}>{item.name}</div>
                </Link>
            )}
            </div>
        </div>
    );
};

export default Menu;