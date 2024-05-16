import React, { useState } from 'react';
import MenuSlide from './MenuSlide';
import cl from './MenuSlider.module.css'

const MenuSlider = () => {

    const [slides, setSlides] = useState([
        { url: 'http://localhost:3000/img/Tablet.png', name: 'Планшеты'},
        { url: 'http://localhost:3000/img/Smartphone.png', name: 'Телефоны'},
        { url: 'http://localhost:3000/img/Monitor.png', name: 'Моноблоки'},
        { url: 'http://localhost:3000/img/Notebook.png', name: 'Ноутбуки'},
        { url: 'http://localhost:3000/img/Console.png', name: 'Приставки'}
    ]);

    return (
        <div className={cl.MenuSlider}>
            <div className={cl.MenuSlider_wrapper}>
            {slides.map(slide => 
                <MenuSlide key={slide.url} slide={slide}/>
            )}
            </div>
            <div className={cl.NextSlide}>Next</div>
            <div className={cl.PrevSlide}>Prev</div>
        </div>
    );
};

export default MenuSlider;