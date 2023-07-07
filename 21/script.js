"use stcrict";

const personalMovieDB = {

    count: 0,
    lovelyGenres: '',
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },

    rememberMyFilms: function() {
        for (let i = 1; i < 10; i++) {
            if (i > personalMovieDB.count) {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
            prompt('Просмотрено мало фильмов');
        }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
            prompt('Вы классический зритель');
        } 
        else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
            prompt('Вы киноман');
        } else {
            console.log('Произошла ошибка');
            prompt('Произошла ошибка');
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat != false) {
            console.log(personalMovieDB.privat);
            console.log(personalMovieDB);
        } else {
            console.log('Нет доступа');
        }
    },

    genresQuiz: function() {
        for (let i = 1; i !=4 ; i++) {
                
        personalMovieDB.lovelyGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = personalMovieDB.lovelyGenres;
        
    
            while (personalMovieDB.lovelyGenres == '' || personalMovieDB.lovelyGenres == null || !isNaN(personalMovieDB.lovelyGenres)) {
                personalMovieDB.lovelyGenres = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i-1] = personalMovieDB.lovelyGenres;
            }
        }

        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр под номером ${i+1} это ${genre}`);
        }); 
        personalMovieDB.lovelyGenres = '';
    },

    toggleVisibleMyDB: function() {
        
        if (personalMovieDB.privat != true) {
            personalMovieDB.privat = true
            
            personalMovieDB.showMyDB();
            personalMovieDB.start();
            personalMovieDB.rememberMyFilms();
            personalMovieDB.detectPersonalLevel();
            personalMovieDB.genresQuiz();
            console.log(personalMovieDB);
        } else {
            personalMovieDB.privat = false
            console.log(personalMovieDB.privat);
        }
        
    }
}

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
