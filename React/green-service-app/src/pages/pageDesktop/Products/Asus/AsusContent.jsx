import React, { useState } from 'react';
import cl from '../Products.module.css'

const asusWorkList = [
    { id: 0, title: 'Чистка и ремонт системы охлаждения' , price: 'цена от 60 руб'},
    { id: 1, title: 'Установка драйверов' , price: 'цена от 30 руб.'},
    { id: 2, title: 'Ремонт экрана монитора' , price: 'цена от 70 руб.'},
    { id: 3, title: 'Ремонт схемы подсветки' , price: 'цена от 50 руб.'},
    { id: 4, title: 'Ремонт схемы питания монитора' , price: 'цена от 50 руб.'},
    { id: 5, title: 'Ремонт модуля управления монитора' , price: 'цена от 50 руб.'},
    { id: 6, title: 'Ремонт лампы подсветки монитора' , price: 'цена от 50 руб.'},
    { id: 7, title: 'Ремонт инвертора монитора' , price: 'цена от 50 руб.'},
    { id: 8, title: 'Ремонт инвертора матрицы' , price: 'цена от 60 руб.'},
    { id: 9, title: 'Ремонт и замена материнских плат' , price: 'цена от 70 руб.'},
    { id: 10, title: 'Ремонт блока питания монитора' , price: 'цена от 40 руб.'},
    { id: 11, title: 'Не типовые виды работ' , price: 'цена от 90 руб.'},
    { id: 12, title: 'Замена привода DVD-RW' , price: 'цена от 40 руб.'},
    { id: 13, title: 'Замена оперативной памяти' , price: 'цена от 30 руб.'},
    { id: 14, title: 'Замена жесткого диска' , price: 'цена от 60 руб.'},
    { id: 15, title: 'Замена видеокарты моноблока' , price: 'цена от 60 руб.'},
]

const AsusContent = () => {

    const [listItem, setListItem] = useState(asusWorkList);

    return (
        <div className={cl.ProductsContent}>
            <div>Ремонт в минске {'>'} Моноблоки {'>'} Asus</div>
            <div className={cl.TitleWrapper}>
                <div className={cl.Title}>Ремонт моноблоков Asus</div>
                <img src='http://localhost:3000/productsImg/desktops/asus.jpg' alt=''/>
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

export default AsusContent;