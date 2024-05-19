import React, { useState } from 'react';
import cl from './SecondMenu.module.css'
import SecondMenuItem from './SecondMenuItem';

const SecondMenu = () => {

    const secondMenuItems = [
        { id: 0, url: 'http://localhost:3000/secondMenuImg/tablet.jpg', content: [<h1>Ремонт планшетов</h1>, <div>Ремонт планшета любого бренда - не проблема для нас. Все виды ремонтных работ за короткие сроки!</div>] },
        { id: 1, url: 'http://localhost:3000/secondMenuImg/phone.jpg', content: [<h1>Ремонт телефонов</h1>, <div>Более 10 лет занимаемся ремонтом телефонов различных моделей и брендов. Можем исправить практически все виды поломок</div>] },
        { id: 3, url: 'http://localhost:3000/secondMenuImg/monoblok.jpg', content: [<h1>Ремонт моноблоков</h1>, <div>Выполним ремонт моноблоков любой сложности - от ремонта плат до замены дисплея!</div>] },
        { id: 4, url: 'http://localhost:3000/secondMenuImg/notebook.jpg', content: [<h1>Ремонт ноутбуков</h1>, <div>Сломался ноутбук? Мы поможем! Быстрая диагностика неисправностей, профессиональный и быстрый ремонт. Замена и ремонт любых элементов и модулей.</div>] },
        { id: 5, url: 'http://localhost:3000/secondMenuImg/pristavki.jpg', content: [<h1>Ремонт игровых приставок</h1>, <div>Сломалась любимая игровая приставка? Выполним ремонт. Наша компания занимается ремонтом телефонов различных моделей и брендов,все виды поломок и все виды запчастей.</div>] }
    ]

    const [itemIndex, setItemIndex] = useState(0);

    return (
        <div className={cl.SecondMenu}>
            {secondMenuItems.map(item => 
                <SecondMenuItem index={itemIndex} key={item.url} item={item}/>
            )}
        </div>
    );
};

export default SecondMenu;