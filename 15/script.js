"use stcrict";

"use stcrict";

let numberOfFilms;
let lovelyGenres;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {

    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false

};

function rememberMyFilms() {
    for (let i = 1; i < 10; i++) {
        if (i > numberOfFilms) {
            break;
        } else {
            const question2 = prompt('Один из последних просмотренных фильмов?'),
                  question3 = prompt('На сколько его оцените?');
            if (question2 != '' && question3 != '' && question2 != null && question3 != null && question2.length < 50) {
                personalMovieDB.movies[i] = `${question2}: ${question3}`;
                console.log(personalMovieDB.movies[i]);
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms >= 1 && numberOfFilms < 10) {
        console.log('Просмотрено мало фильмов');
        prompt('Просмотрено мало фильмов');
    }
    else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log('Вы классический зритель');
        prompt('Вы классический зритель');
    } 
    else if (numberOfFilms > 30) {
        console.log('Вы киноман');
        prompt('Вы киноман');
    } else {
        console.log('Произошла ошибка');
        prompt('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Нет доступа');
    }
}

showMyDB();

function genresQuiz () {
    for (let i = 1; i !=4 ; i++) {

    lovelyGenres = prompt(`Ваш любимы жанр под номером ${i}`);
    personalMovieDB.genres[i] = lovelyGenres;
    console.log(personalMovieDB.genres[i]);

        while (lovelyGenres == '' || lovelyGenres == null || !isNaN(lovelyGenres)) {
        lovelyGenres = prompt(`Ваш любимы жанр под номером ${i}`);
        personalMovieDB.genres[i] = lovelyGenres;
        console.log(personalMovieDB.genres[i]);
        }
    }
}

genresQuiz();