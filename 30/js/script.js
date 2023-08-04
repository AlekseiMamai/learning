/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelector('.promo__adv-title');
const img = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const filmList = document.querySelector('.promo__interactive-list');
const accept = document.querySelector('.promo__interactive .add button');
const addText = document.querySelector('.promo__interactive .add input[type="text"]');
const check = document.querySelector('input[type="checkbox" i]');


    const deleteAdv = (arr) => {
        adv.remove();
        arr.forEach(item =>{
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';

        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function writeList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);
        
        films.forEach((film, i) => {
            parent.innerHTML += 
            `<li class="promo__interactive-item">${i+1}: ${film}
                <div class="delete"></div>
            </li>`;
        });

        deleteS(films, parent);
    };

    function deleteS(films, parent) {
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                console.log(movieDB.movies);

                writeList(films, parent);
            });
        });
    }

    accept.addEventListener('click', event => {
        event.preventDefault();
        if (addText.value) {

            if (addText.value.length > 21) {
                addText.value = `${addText.value.substring(0, 22)}...`;
            } 
                
            movieDB.movies.push(addText.value);
            writeList(movieDB.movies, filmList);
            addText.value = '';
            // event.target.reset();
            //так можно очистить поля, если бы
            //целью ивента была строка, а не кнопка
            
        }
        if (check.checked) {
            console.log('Добавляем любимый фильм');
        }
    });


deleteAdv(img);
makeChanges();
sortArr(movieDB.movies);
writeList(movieDB.movies, filmList);
