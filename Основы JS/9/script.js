"use stcrict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false

};

let question2 = prompt('Один из последних просмотренных фильмов?');
let question3 = prompt('На сколько его оцените?');
personalMovieDB.movies[1] = `${question2}: ${question3}`;
question2 = prompt('Один из последних просмотренных фильмов?');
question3 = prompt('На сколько его оцените?');
personalMovieDB.movies[2] = `${question2}: ${question3}`;
console.log(personalMovieDB.movies[1]);
console.log(personalMovieDB.movies[2]);


