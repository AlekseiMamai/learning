import React, {useState} from 'react';
import cl from './Slider.module.css'
import Slide from './Slide';

const Slider = () => {

    const sliderSlides = [
        [
            { url: 'http://localhost:3000/imgMenu/Tablet.png'},
            { url: 'http://localhost:3000/imgMenu/Smartphone.png'},
            { url: 'http://localhost:3000/imgMenu/Desktop.png'},
            { url: 'http://localhost:3000/imgMenu/Laptop.png'},
            { url: 'http://localhost:3000/imgMenu/Console.png'}
        ]
    ]
    const {slides, setSlides} = useState(sliderSlides);

    return (
        <div>
            <div className={cl.Slider}>
            {slides.map(slide => 
                <Slide key={slide.url} slide={slide}/>
            )}
            </div>
        </div>
    );
};

export default Slider;