import React, {useState} from 'react';
import cl from './Slider.module.css'
import Slide from './Slide';
import Navigation from './Navigation';

const Slider = () => {

    const sliderSlides = [
            { id: 0, url: 'http://localhost:3000/imgSlider/1.png', content: <h1>Сервисный центр <h2>GREEN SERVICE</h2> - качественый ремонт электроники<h2> В МИНСКЕ</h2></h1> },
            { id: 1, url: 'http://localhost:3000/imgSlider/2.png', content: <h1><h2>Ремонт</h2> планшетов, ноутбуков, телефонов<h2> В МИНСКЕ</h2> и другие дополнительные услуги</h1> },
            { id: 2, url: 'http://localhost:3000/imgSlider/3.png', content: <h1>Обновление<h2> ПО</h2> для всех устройств<h2>Новые версии,</h2> различные программы</h1> }
    ]

    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <div className={cl.Slider}>
            {sliderSlides.map(slide =>
                <div className={cl.Slide} key={slide.id}>
                        <div className={slideIndex === slide.id ? `${cl.SlideContent}` : `${cl.SlideContent_hidden}`}>
                            {slide.content}
                        </div> 
                    <Slide index={slideIndex} url={slide.url} slide={slide}/>
                </div>
            )}
            <span className={cl.Indicators}>
            {sliderSlides.map(btn => 
                <button className={slideIndex === btn.id ? `${cl.Indicator}` : `${cl.Indicator_hidden}`} key={btn.id} onClick={() => setSlideIndex(btn.id)}></button> 
            )}
            </span>
        </div>
    );
};

export default Slider;