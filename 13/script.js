"use stcrict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false

};

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
