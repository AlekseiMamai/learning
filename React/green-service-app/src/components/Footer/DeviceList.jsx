import React from 'react';
import cl from './Footer.module.css'

const DeviceList = () => {
    return (
        <ul className={cl.device_list}>
            <li>
                Планшеты
            </li>
            <li>
                Телефоны
            </li>
            <li>
                Моноблоки
            </li>
            <li>
                Ноутбуки
            </li>
            <li>
                Приставки
            </li>
        </ul>
    );
};

export default DeviceList;
