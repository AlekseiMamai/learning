import React, { useState } from 'react';
import cl from '../Products.module.css'

const appleWorkList = [
    { id: 0, title: 'Диагностика' , price: 'Бесплатно'},
    { id: 1, title: 'Ремонт матрицы' , price: 'цена от 70 руб.'},
    { id: 2, title: 'Ремонт аккумулятора' , price: 'цена от 70 руб.'},
    { id: 3, title: 'Ремонт корпуса' , price: 'цена от 40 руб.'},
    { id: 4, title: 'Ремонт разъёма зарядки' , price: 'цена от 70 руб.'},
    { id: 5, title: 'Ремонт после залития' , price: 'цена от 60 руб.'},
    { id: 6, title: 'Чистка от пыли' , price: 'цена от 70 руб.'},
    { id: 7, title: 'Замена / ремонт клавиатуры' , price: 'цена от 60 руб.'},
    { id: 8, title: 'Ремонт северного моста' , price: 'цена от 100 руб.'},
    { id: 9, title: 'Ремонт динамика' , price: 'цена от 70 руб.'},
    { id: 10, title: 'Ремонт системы охлаждения' , price: 'цена от 50 руб.'},
    { id: 11, title: 'Замена оперативной памяти' , price: 'цена от 30 руб.'},
    { id: 12, title: 'Ремонт шлейфа' , price: 'цена от 70 руб.'},
    { id: 13, title: 'Прошивка Bios' , price: 'цена от 80 руб.'},
    { id: 14, title: 'Чистка от вирусов' , price: 'цена от 60 руб.'},
    { id: 15, title: 'Установка операционной системы' , price: 'цена от 60 руб.'},
    { id: 16, title: 'Установка драйверов' , price: 'цена от 30 руб.'}
]

const AppleContent = () => {

    const [listItem, setListItem] = useState(appleWorkList);

    return (
        <div className={cl.ProductsContent}>
            <div>Ремонт в минске {'>'} Ноутбуки {'>'} Apple</div>
            <div className={cl.TitleWrapper}>
                <div className={cl.Title}>Ремонт ноутбуков Apple</div>
                <img src='http://localhost:3000/productsImg/laptops/apple.jpg' alt=''/>
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

export default AppleContent;