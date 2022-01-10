"use strict";

//Передача по ссылке или по значению, Spread оператор (ES6-Es9)

let a = 5,
  b = a;

b = b + 5;

console.log(b);
console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // Передаем ссылку
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// Копии объектов, массивов. Поверхностные копии

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy; //Возвращаем объект наружу
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

//Object assignee

const add = {
  d: 17,
  e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;
//console.log(add);
//console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'jkjdsklfjsdlkjflk';

console.log(newArray);
console.log(oldArray);

// Оператор разворота Spread

const video = ['youtube', 'vimeo', 'netflix'],
      blogs = ['wordpress', 'livejournal', 'bloger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];
      
console.log(internet); 

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 9];

log(...num);

//
const array = ['a', 'b'];

const newArry = [...array]

//

const q = {
  one: 1,
  two: 2
};

const newObj = { ...q };

console.log(newObj);