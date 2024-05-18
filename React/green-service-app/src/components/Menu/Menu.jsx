import React, { useState } from 'react';
import MenuButton from './MenuButton';
import cl from './Menu.module.css'

const Menu = () => {

    const MenuItems = [
        { url: 'http://localhost:3000/imgMenu/Tablet.png', name: 'Планшеты' },
        { url: 'http://localhost:3000/imgMenu/Smartphone.png', name: 'Телефоны' },
        { url: 'http://localhost:3000/imgMenu/Desktop.png', name: 'Моноблоки' },
        { url: 'http://localhost:3000/imgMenu/Laptop.png', name: 'Ноутбуки' },
        { url: 'http://localhost:3000/imgMenu/Console.png', name: 'Приставки' }
    ]

    const [menuItems, setMenuItems] = useState(MenuItems);

    return (
        <div className={cl.Menu}>
            <div className={cl.Menu_wrapper}>
            {menuItems.map(item => 
                <MenuButton key={item.url} item={item}/>
            )}
            </div>
        </div>
    );
};

export default Menu;