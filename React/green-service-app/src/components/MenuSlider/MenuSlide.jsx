import React from 'react';
import cl from './MenuSlider.module.css';

const MenuSlide = ({slide}) => {
    return (
        <div className={cl.MenuSlide}>
            <span className={cl.image}>
                <img src={slide.url} alt=''/>
            </span>
            <span className={cl.name}>{slide.name}</span>
        </div>
    );
};

export default MenuSlide;