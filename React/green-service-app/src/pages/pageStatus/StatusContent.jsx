import React from 'react';
import cl from './StatusContetnt.module.css'

const StatusContent = () => {
    return (
        <div className={cl.StatusContent}>
            <div className={cl.navicolor}>Ремонт в минске {'>'} Статус заказа</div>
            <div className={cl.Content}>
                Введите номер Вашего телефона и узнайте статус выполнения заказа<br/>

                Пример ввода номера телефона: +375291111111 
            </div>  
        </div>
    );
};

export default StatusContent;