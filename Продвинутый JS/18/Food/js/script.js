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

    const getResource = async (url) => { //функция получения массива объектов из базы данных
        const res = await fetch(url);
        //При ошибке в запросе fetch не выдаст reject, это нужно
        //обрабатывать в скрипте самостоятельно, 
        //ошибкой будет неполадки с интернетом
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); 
            //объект ошибки
        }

        return await res.json();
    };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price,'.menu .container').render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(obj => {
            obj.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price,'.menu .container').render();
            //obj.data поскольку axios конвертирует из json сразу в объект
        });
    });
    //1)В аргумент записывается путь к массиву объектов базы даных
    //2)Поскольку это массив, используется метод forEach для перебора
    //3)В forEach используем {} деструктуризацию объекта из массива бд
    //4)Создаём внутри перебора новые карточки с помощью конструктора MenuCard 
    //и передаём внутрь аргументы, деструктуризированные ранее

    //Реворк высоты карточек меню

    setTimeout(() => {
    const cardElement = document.querySelectorAll('.menu__item'),
    cardHeigh = document.querySelectorAll('.menu__item-descr');
    const box = document.querySelector('.menu .container');

    function reworkHeight () {
        cardElement.forEach((elem, i ) => {
            cardHeigh[i].style.height = cardHeigh[i].clientHeight + box.clientHeight - elem.clientHeight + 'px';
        });   
    }

    reworkHeight();
    }, 100);

    //Отправка формы

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    //async await - дожидается результата запроса
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json' 
            },
            body: data
        });

        return await res.json();
    };//функция для шаблонирования fetch для отправки данных с формы

    function bindPostData(form) {
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
            //заголовок в формате JSON
            
            const formData = new FormData(form);

            //!!!Нужно formData превратить в формат JSON
            // const object ={};
            // formData.forEach(function(value, key){
            //     object[key] = value;
            // });

            // const json = JSON.stringify(object);
            //Конец конвертации в json

            //Другой способ конвертации formData
            // Пример const obj = {a: 23, b: 50}; из массива
            // console.log(Object.entries(obj)); - в массив массивов

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //данные из формы в массив массивов, а псоле в классический объект

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);               
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset(); //очищаем форму
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

    //Fetch API

    // fetch('https://jsonplaceholder.typicode.com/posts', { //запрос можно настроить объектом
    //     method: "POST",
    //     body: JSON.stringify({name: 'Alex'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //   .then(response => response.json())
    //   .then(json => console.log(json));

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

    //При ошибке в запросе fetch не выдаст reject, это нужно
    //обрабатывать в скрипте самостоятельно

    //Слайдер

    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
    //Нам нужно знать, сколько места занимает главная обёртка offer__slider-wrapper
    //чтобы при прокрутке слайды менялись ползунком и не пришлось скрывать отдельно
    //элементы
    //Инлайн стили для данного блока ещё не существуют, поэтому нужно доставать 
    //параметры применённых стилей уже когда блок отрендерился на странице
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        width = window.getComputedStyle(slidesWrapper).width,
    //вернули объект и ширину из объекта(.width)
        slidesField = document.querySelector(".offer__slider-inner");

    let slideIndex = 1;
    let offset = 0; //переменная для отслеживания отступа при переходе слайдера

    if (slides.lenght < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = slides.length
            current.textContent = `0${slideIndex}`;
        }

    //Увеличиваем ширину второй обёртки до размера всех четырёх слайдов
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach((slide) => {
        slide.style.width = width;
    });//чтобы все слайды были одного размера

    slider.style.position = 'relative';//все элементы с позицией 'абсолютно' будут нормально
    //отображаться
    const indicators = document.createElement('ol'), //элемент для размещения точек
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li'); //создание точек в цикле исходя из количества слайдов
        dot.setAttribute('data-slide-to', i + 1); //создание атрибута для точек со значениями
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot); //при создании точек каждая закидывается в массив

    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function changeNumberOfSlide() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function changeSliderNavigation() {
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++
        }
    }

    function changeDotsOpacity() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        // == сравнение
        //ширина умножается на количество слайдов - 1, т.к. 
        //нумерация идёт с нуля. Проще говоря если offset при нажатии составляет
        //значение последнего слайда(размера всей обёртки в целом), 
        //то происходит переход на первый слайд, т.к. offset сбрасывается
        //offset = 0;

        //В свойстве width записано '500px' строкой,
        //поэтому матем операция не пройдёт. С помощью slice отрезаем 'px'
        //и производим вычисление 
        } else {
            offset += deleteNotDigits(width);//добавлять
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        changeSliderNavigation();
        changeNumberOfSlide();
        changeDotsOpacity();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        //как и в next, только наоборот
        } else {
            offset -= deleteNotDigits(width);//отнимать
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        changeSliderNavigation();
        changeNumberOfSlide();
        changeDotsOpacity();

        //при переключении можно перебрать массив с точками, чтобы изменять прозрачность
        //точек ссылаясь на slideIndex
        // dots.forEach(dot => dot.style.opacity = '.5');
        // dots[slideIndex - 1].style.opacity = 1;

    });

    //навешиваем обработчик событий на каждую из точек для навигации при нажатии
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');//используем заранее 
            //созданный атрибут, используя его содержимое можно котролировать slideIndex

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1); //замена slides.length
            //на slideTo

            slidesField.style.transform = `translateX(-${offset}px)`;

            changeNumberOfSlide();
            changeDotsOpacity();
            // if (slides.length < 10) {   //подправляем числовой индикатор слайдера
            //     current.textContent = `0${slideIndex}`;
            // } else {
            //     current.textContent = slideIndex;
            // }

            //при переключении можно перебрать массив с точками, чтобы изменять прозрачность
            //точек ссылаясь на slideIndex
            // dots.forEach(dot => dot.style.opacity = '.5'); //изменяем прозрачность текущего слайдера
            // dots[slideIndex - 1].style.opacity = 1; //и неактивных
        });
    });

    //Калькулятор

    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    }   else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    }   else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elements.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return; //для того, чтобы дальнейшие расчёты не работали
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    //первый аргумент с точкой, т.к. это селектор, второй без точки

    function getDynamicInformation(selector)  {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red'
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });

    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

    

});