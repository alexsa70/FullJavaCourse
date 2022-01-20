"use strict";
// To Number
let str = '123';
console.log(typeof (str)); //STRING
let num = Number(str);// становится числом 123
console.log(typeof num); 
let sum = num + 1; // should be 124
console.log(sum); 



//To String
//1
console.log(typeof (String(null)));
//2
console.log(typeof (5 + ''));

const num1 = 5;
console.log("https//vc.com/catalog" + num1); 

const fontSize = 26 + 'px';
console.log(fontSize);

//

let answ = +prompt("Hi", "");

// To Boolean

// 0, '', null, undefined, NaN; - FALSE

let switcher = null;

if (switcher) {
  console.log('Working.....');
}
switcher = 1;
if (switcher) {
  console.log("Working.....");
}

console.log(typeof(!!'5656565'));