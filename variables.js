"use strict";
//variable declarations
//var -function scoped variable, can be redeclared and updated
if (true) {
    var leakedValue = "I am a leaked variable";
    console.log(leakedValue);
}
console.log(leakedValue); //accessible outside the block
console.log("--------------------------------------------------");
//let - block scoped variable, can be updated but not redeclared
let studentName = "Daria John";
console.log(studentName);
console.log("--------------------------------------------------");
let myValue = 100;
myValue = 200;
if (true) {
    let innervalue = "I am an inner value";
    console.log(innervalue);
}
//console.log(innervalue); //not accessible outside the block
console.log(myValue);
console.log("--------------------------------------------------");
//const - block scoped variable, cannot be updated or redeclared
const year = 2026;
//year = 2027; //error: cannot reassign a const variable
console.log(year);
console.log("--------------------------------------------------");
