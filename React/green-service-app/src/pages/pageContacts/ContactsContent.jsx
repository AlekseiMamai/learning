import React from 'react';
import cl from './ContactsContent.module.css'

const ContactsContent = () => {
    return (
        <div className={cl.StatusContent}>
            <div>Ремонт в минске {'>'} О компании {'>'} Контакты</div>
            <div className={cl.Content}>
                <img src='http://localhost:3000/contactsImg/1.png' alt=''/>
                <div>
                    <div>КОНТАКТЫ</div>
                    <div>Минск. ул. Захарова 24
                        <div className={cl.ContentSmall}>
                            метро пл. Победы (за магазином "Каравай", вход возле кафе "Moby Dick Caffe")
                        </div>
                    </div>
                    <div>
                        +375 (29) 3-683-683<br/>
                        +375 (29) 5-683-683
                    </div>
                    <div>Мы работаем для Вас!</div>
                    <div className={cl.ContentColored}>Временный график работы сервисного центра</div>
                    <div>Пн-Пт c 9:00 до 18.00</div>
                    <div>Сб-Вс: выходной.</div>
                    <div className={cl.ContentColored}>График работы: 09,12,13 и 14 мая - выходной; 11-12 мая с 9 до 18 часов.</div>
                </div>
            </div>  
        </div>
    );
};

export default ContactsContent;