"use strict";

// Use DOM

const btn = document.querySelector('button'); //Псевдо массив,Чтобы на каждую кнопку назначить обработчик надо перебрать весь массив метом forEach

const btns = document.querySelectorAll("button"); // Найти все кнопки на странице.
//Обработчик событий

//старый способ
// btn.onclick = function () {
//   alert('CLICK!');
// };

//Правильный способ

// btn.addEventListener('click', () => {
//   alert("CLICK!");
// });
//Можно добавить второе действие на тот же элемент
// btn.addEventListener("click", () => {
//   alert("SECOND CLICK!");
// });

// Добавить действие 
// btn.addEventListener("mouseenter", () => {
//   console.log("HOVER");
// });

//Объект эвент - определить какое событие произошло - argument event(e)

// btn.addEventListener("mouseenter", (event) => {
//   console.log(event);
//   console.log(event.target); // указывает на какой элемет 
//   event.target.remove(); // удалит элемент со страницы при наведении на него мышки
//   console.log("HOVER");
// });

//Удаление обработчика
let i = 0;

const deleteElement = (event) => { 
  console.log(event.target);
  i++;
  if (i == 1) {
    btn.removeEventListener("click", deleteElement); //Удаляю обработчик.Если  условие выполненено: кнопка нажата один раз. И при следуещем нажатии у консоли ничего уже не будет 
  }
};

btn.addEventListener('click', deleteElement); //Назначаю обработчик. По клику на кнопку элемент выведется в консоле
//btn.removeEventListener('click', deleteElement); //Удаляю обработчик. 

//Перебираю массив btns методом forEach и назначаем обработчик событий на все кнопки
//ОПЦИИ обработчика событий  {once: true} - обработчик событий будет срабатывать только раз при нажатии на кнопку
btns.forEach(item => {
  item.addEventListener('click', deleteElement, {once: true});
});

//Работа с ссылками

const link = document.querySelector('a');
// Навешиваю на сслку обработчик событий click + Call back function
link.addEventListener('click', (event) => {
  event.preventDefault(); //Отменяет переходл по ссылке. Всегда должен определяться первым в функции
  
  console.log(event.target); //По клику на ссылку ютуб будет выведен элемент в консоль
});



