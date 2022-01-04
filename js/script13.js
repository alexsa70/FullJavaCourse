"use strict";

//Условия

if (4 == 9) {
  console.log('OK!');
} else {
  console.log('Error!');
}

const num = 50;

if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Too mach');
} else {
  console.log('OK');
}

(num === 50) ? console.log('OK!') : console.log('Error');

const num1 = 50;
switch (num1) {
  case 49:
    console.log('Error!');
    break;
  case 100:
    console.log('Error!');
    break;
  case 50:
    console.log('Correct!');
    break;
  default:
    console.log('Not this time!');
    break;
}
