import React from 'react';
import cl from './Slider.module.css'

const Slide = ({slide, index}) => {

    return (
        <div className={index === slide.id ? `${cl.SlideImg}` : `${cl.SlideImg_hidden}`} key={slide.id}>
            <img src={slide.url} alt=''/>
        </div>
    );
};

export default Slide;