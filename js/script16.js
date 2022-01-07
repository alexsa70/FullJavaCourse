"use strict";

function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage("Hello World!");

let a = 3;
function addTwo(x) {
  let ret = x + 2;
  return ret;
}
let b = addTwo(a);
console.log(b);

let addNum = (a, b) => a + b;
console.log(addNum(5, 5));