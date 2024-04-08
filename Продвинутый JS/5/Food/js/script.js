window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent  = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            //ниже приведён пример использования классов css стилей
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i=0) { //если без аргумента, то 0
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade' );
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i)=> {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadline = '2024-05-25';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000*60*60*24)),
              hours = Math.floor((t / (1000*60*60)) % 24),
              minutes = Math.floor ((t / 1000 / 60) % 60),
              seconds = Math.floor ((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds');
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <=0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
        
    function openModal() {
        //!!Способ без переключателя
        modal.classList.add('show');
        modal.classList.remove('hide');

        //!!Способ с переключателем
        // modal.classList.toggle('show');

        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }  

    modalTrigger.forEach(btn => { 
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    // modalCloseBtn.addEventListener('click', closeModal); (удалено)
    //Здесь модифицируем data-close делегированием событий
    //Для этого немного меняем условие ниже

    modal.addEventListener('click', (e) => {
        if (e.target===modal || e.target.getAttribute('data-close') == '') {
        //Если атрибут присутствует в элементе(крестик), то модальное окно
        //будет закрыто 
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    })

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);



    //Используем классы для карточек

    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); //метод можно вызвать даже
            //в конструкторе
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            //Не получится сделать по_умолчанию classes
            //Поэтому можно сделать условие:
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            //

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }

    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
    ).render();
    //Так вызывается метод объекта на месте, если его не нужно
    //помещать в переменную и использовать дальше/ссылаться

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
    ).render();
    

    //Реворк высоты карточек меню

    const cardElement = document.querySelectorAll('.menu__item'),
          cardHeigh = document.querySelectorAll('.menu__item-descr');
    const box = document.querySelector('.menu .container');

    function reworkHeight () {
        cardElement.forEach((elem, i ) => {
            cardHeigh[i].style.height = cardHeigh[i].clientHeight + box.clientHeight - elem.clientHeight + 'px';
        });   
    }

    reworkHeight();

    //Отправка формы

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();//чтобы при отправке
            //страница не перезагружалась

            // let statusMessage = document.createElement('div');
            //Поскольку вместо Loading можно поставить спиннер, то
            //создаваемую структуру начинаем с тега img
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            //можно с помощью инпутов доставать значения и 
            //отправлять форму, но для этого уже существуют форматы
            //отправки

            //!!! Ввжно, чтобы у формы для отправки был в вёрстке 
            //атрибут name
            // request.setRequestHeader('Content-type', 'multipart/form-data');
            //!!!^^^при связке XMLHttpRequest и form-data заголовок ^^^
            //устанавливать не нужно, он автоматически устанваливается
            //поэтому сервер отправляет нам пустой объект
            
            //заголовок в формате JSON
            request.setRequestHeader('Content-type', 'Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            //!!!Нужно formData превратить в формат JSON
            const object ={};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);
            //Конец конвертации в json

            // request.send(formData); //запрос для formData
            //если бы формат json не использовался

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    
                    // statusMessage.textContent = message.success;
                    //После создания showThanksModal меняем строку сверху
                    //на:
                    showThanksModal(message.success);
                    form.reset(); //очищаем форму

                    //Освобождаем удаление status.Message от таймаута
                    //поскольку status.Message юудет работать только со
                    //спинером Loading
                    // setTimeout(() => {
                    //     statusMessage.remove();
                    // }, 2000);
                    statusMessage.remove();
                } else {
                    // statusMessage.textContent = message.failure;
                    //Здесь та же замена, что и у message.success
                    showThanksModal(message.failure);
                }
            });
        });
    };

    //Чтобы сбросить кэш на локальном сервере сайта - Shift + F5  
    
    //Thanks Modal Window
    //Прячем предыдущее модальное окно, создаём отдельную структуру
    //для окна-замены
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>x</div
                <div class="modal__title">${message}</div>
            </div>
        `;
        //На lинамически созданные елементы обработчики событий уже
        //не повесяться, поэтому атрибут [data-close] нужно модифицировать.
        //Этот атрибут нужно удалить и воспользоваться делегированием событий

        //Показ и удаление нового модального окна с помощью таймера
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

});



