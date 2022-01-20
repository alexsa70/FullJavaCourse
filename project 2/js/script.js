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

//Удалить все рекламные блоки со страницы (правая часть сайта)
// const promo = document.getElementsByClassName("promo__adv");
// console.log(promo);
// promo[0].remove();
const promo = document.querySelectorAll(".promo__adv img");
promo.forEach(item => {
    item.remove();
});

///Изменить жанр фильма, поменять "комедия" на "драма"

// const change = document.getElementsByClassName("promo__genre");
// console.log(change)
// change[0].replaceWith('ДРАМА');

const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre");
genre.textContent = "ДРАМА";

//  Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.Реализовать только при помощи JS
poster.style.backgroundImage = 'url("img/bg.jpg")';

//Список фильмов на странице сформировать на основании данных из этого JS файла.Отсортировать их по алфавиту + Добавить нумерацию выведенных фильмов 
const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = ""; //очищает структуру на странице
movieDB.movies.sort(); //сотрирую по алфавиту внутри movieDB 
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
                            <div class="delete"></div>
                        </li>
    `;
});