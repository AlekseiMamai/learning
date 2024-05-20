import React, { useState } from 'react';
import cl from '../Products.module.css'

const xboxWorkList = [
    { id: 0, title: 'Установка программного обеспечения' , price: 'цена от 60 руб.'},
    { id: 0, title: 'Технологическая чистка от влаги' , price: 'цена от 60 руб.'},
    { id: 0, title: 'Ремонт шлейфа' , price: 'цена от 60 руб.'},
    { id: 0, title: 'Ремонт разъёма зарядки' , price: 'цена от 70 руб.'},
    { id: 0, title: 'Прошивка' , price: 'цена от 60 руб.'}
]

const XboxContent = () => {

    const [listItem, setListItem] = useState(xboxWorkList);

    return (
        <div className={cl.ProductsContent}>
            <div>Ремонт в минске {'>'} Приставки {'>'} Xbox</div>
            <div className={cl.TitleWrapper}>
                <div className={cl.Title}>Ремонт приставок Xbox</div>
                <img src='http://localhost:3000/productsImg/consoles/xbox.jpg' alt=''/>
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

export default XboxContent;