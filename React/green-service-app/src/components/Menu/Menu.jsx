import React, { useState } from 'react';
import MenuButton from './MenuButton';
import cl from './Menu.module.css'

const Menu = () => {

    const MenuItem = [
        { url: 'http://localhost:3000/imgMenu/Tablet.png', name: 'Планшеты'},
        { url: 'http://localhost:3000/imgMenu/Smartphone.png', name: 'Телефоны'},
        { url: 'http://localhost:3000/imgMenu/Desktop.png', name: 'Моноблоки'},
        { url: 'http://localhost:3000/imgMenu/Laptop.png', name: 'Ноутбуки'},
        { url: 'http://localhost:3000/imgMenu/Console.png', name: 'Приставки'}
    ]
    const [slides, setSlides] = useState(MenuItem);

    return (
        <div className={cl.Menu}>
            <div className={cl.Menu_wrapper}>
            {slides.map(slide => 
                <MenuButton key={slide.url} slide={slide}/>
            )}
            </div>
        </div>
    );
};

export default Menu;