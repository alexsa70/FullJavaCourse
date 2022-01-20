"use strict";

// let str = "some";
// let strObj = new String(str);
// console.log(typeof (str));
// console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
};
const jonh = Object.create(soldier);
// const jonh = {
//   health: 100
// };
//Old method
// jonh.__proto__ = soldier;
// console.log(jonh.armor);
//New method
//Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();

console.log(typeof (Number('534534')));