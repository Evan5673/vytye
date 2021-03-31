//1
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
alert("Вы посмотрели" + " " + numberOfFilms + " " + "фильмов");
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//6
if (numberOfFilms < 10){
    alert('Просмотрено довольно мало фильмов')
    }
    else if (numberOfFilms >= 10 && numberOfFilms <=30){
    alert('Вы классический зритель')
    }
    else if (numberOfFilms > 30){
    alert('Вы киноман')
    }
    else{
    alert('Произошла ошибка')
    }
//3
let vop1 = prompt("Один из последних просмотренных фильмов?");
let vop2 = prompt("На сколько оцените его?");
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB[a] = b;
    } else {
    console.log('Error');
    i--;
    }
let otv1; 
let otv2;
movies: {
    alert("Фильм:" + " " + vop1 + "." + " " + "Оценка:" + " " + vop2)
}
//4
//5
//6