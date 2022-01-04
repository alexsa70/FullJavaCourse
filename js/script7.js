"use strict";

//const result = confirm("Are you here?");
//console.log(result);

// const answer = +prompt("Are you 18?", "18");
// console.log(answer + 5);

const answer = [];

answer[0] = prompt('What is your name?', '');
answer[1] = prompt("What is your surname?", "");
answer[2] = prompt("How old are you?", "");

document.write(answer);

//Interpolazia

const category = 'toys';

console.log(`https://someurl.com/${category}/5`)