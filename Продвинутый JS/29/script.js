import $ from 'jquery';

// const btn = $('#btn'); //функция jquery для получения доступа к элементу

// console.log(btn);

$(function() { //аналог DOMContetnLoader
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle();
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'tohhle'
        }, 2000);
    });
});
//1)first - первый элемент из list-item
//.hover - событие, внутри которого происходит тогл класса
//активности

//2)eq(2) - выбор 3 элемента
//on - обработчик событий(событие на выбор)
//even - чётное число картинок
//.fadeToggle - переключение сокрытия

//3)odd - нечётное
//.animate - настройка анимации вручную в виде объекта
//время после объекта настройки - длительность анимации