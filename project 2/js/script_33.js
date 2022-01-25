/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

"use strict";
const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

//Удалить все рекламные блоки со страницы (правая часть сайта)
// const promo = document.getElementsByClassName("promo__adv");
// console.log(promo);
// promo[0].remove();
const promo = document.querySelectorAll(".promo__adv img");
promo.forEach((item) => {
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