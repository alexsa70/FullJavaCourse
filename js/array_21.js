"use strict";

const arr = [10, 12, 33, 24, 6, 8];
arr.sort(compareNum);
console.log(arr);

//Calback 
function compareNum(a, b) {
  return a - b;
}

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside of array ${arr}`)
// });
//Delet last element from array
// arr.pop();
//Add  element to end of array
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

//Create array from string
// const str = prompt("", ""); 
// const products = str.split(", ");
// products.sort();
//console.log(products);
// console.log(products.join(', '));

