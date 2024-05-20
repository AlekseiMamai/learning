import React, { useState } from 'react';
import cl from '../Products.module.css'

const hpWorkList = [
    { id: 0, title: 'Сохранение данных / контактов' , price: 'цена от 80 руб'},
    { id: 1, title: 'Ремонт тачскрина / сенсорного стекла' , price: 'цена от 130 руб.'},
    { id: 2, title: 'Ремонт стекла дисплея' , price: 'цена от 130 руб.'},
    { id: 3, title: 'Ремонт слухового динамика' , price: 'цена от 65 руб.'},
    { id: 4, title: 'Ремонт разъема питания' , price: 'цена от 65 руб.'},
    { id: 5, title: 'Ремонт разъема наушников' , price: 'цена от 65 руб.'},
    { id: 6, title: 'Ремонт после попадания воды' , price: 'цена от 60 руб.'},
    { id: 7, title: 'Ремонт модуля дисплея / LCD (ЖК) экрана' , price: 'цена от 60 руб.'},
    { id: 8, title: 'Ремонт корпуса' , price: 'цена от 60 руб.'},
    { id: 9, title: 'Ремонт кнопок громкости' , price: 'цена от 65 руб.'},
    { id: 10, title: 'Ремонт кнопки включения' , price: 'цена от 65 руб.'},
    { id: 11, title: 'Ремонт камеры фронтальной/основной' , price: 'цена от 60 руб.'},
    { id: 12, title: 'Ремонт задней крышки' , price: 'цена от 60 руб.'},
    { id: 13, title: 'Ремонт датчика приближения' , price: 'цена от 60 руб.'},
    { id: 14, title: 'Ремонт аккумулятора' , price: 'цена от 60 руб.'},
    { id: 15, title: 'Ремонт Wi Fi модуля' , price: 'цена от 80 руб.'},
    { id: 16, title: 'Разблокировка' , price: 'цена от 60 руб.'},
    { id: 17, title: 'Прошивка' , price: 'цена от 60 руб.'},
    { id: 18, title: 'Замена микрофона' , price: 'цена от 65 руб.'},
    { id: 19, title: 'Замена / ремонт кнопки HOME' , price: 'цена от 60 руб.'},
    { id: 20, title: 'Восстановление прошивки' , price: 'цена от 60 руб.'},
]

const HpContent = () => {

    const [listItem, setListItem] = useState(hpWorkList);

    return (
        <div className={cl.ProductsContent}>
            <div>Ремонт в минске {'>'} Планшеты {'>'} HP</div>
            <div className={cl.TitleWrapper}>
                <div className={cl.Title}>Ремонт планшетов HP</div>
                <img src='http://localhost:3000/productsImg/tablets/hp.jpg' alt=''/>
            </div>
            <div className={cl.WorkListTitle}>Виды работ:
                <div>* Точную стоимость работы с учетом запасной части и ее наличие на складе просим вас уточнять по телефону у нашего специалиста. Благодарим Вас за понимание, команда GreenService.</div>
            </div>
            <div className={cl.wrapper}>
                <div className={cl.WorkList}>
                    {listItem.map(item =>
                        <div className={cl.WorkListItem} key={item.id}> 
                            <div className={cl.ListItemTitle}>
                                {item.title}
                            </div>
                            <div className={cl.ListItemPrice}>
                                {item.price}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={cl.bottom}>
             Цены на услуги, дополнительную информацию уточняйте по контактному телефону. Вы получите гарантию на ремонт старых деталей и замененные новые комплектующие. Приятным бонусом станет возможность отследить статус ремонта планшета в разделе "Статус ремонта"!
            </div>
        </div>
    );
};

export default HpContent;