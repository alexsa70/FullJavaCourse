"use strict";

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('Test');
  }
};
options.makeTest();

//Деструктаризация объектов
const { border, bg } = options.colors;
console.log(border);


//Подсчитать количество свойств в объекте
console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);
let counter = 0;
for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Properties ${i}, has defenition ${options[key][i]}`);
      
    }
  } else {
    console.log(`Properties ${key}, has defenition ${options[key]}`);
    counter++;
  }
}
console.log(counter);
