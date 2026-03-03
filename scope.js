// const globalVar = 'CSE';
// function test() {
//     // console.log(globalVar);
// }
// test()

// function myFunction() {
//     const massage = 'Hello';
//     // console.log(massage);
// }

// myFunction()

// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// // console.log(a); // correnct 
// // console.log(b); // error
// // console.log(c); // error

// let pi = 3.14
// add(2, 3)
// function add(a, b) {
//     const factor = 0.5;
//     const result = (a + b) * factor + pi;
//     const total = doubleIt(result);
//     const value = addTwo(total)
//     function addTwo(num) {
//         return num + 2
//     }
//     return result;
// }

// function doubleIt(num) {
//     return num * 2;
// }

// add(4, 5)
// addTwo(5)
// // console.log(factor, pi);

//* global function 
const globalVar = "This is global Veriable";
function test() {
    console.log(globalVar);
}
// test();

//* scope function
function myFunction() {
    const message = "Hello";
    console.log(message);
}
// console.log(message);
myFunction()

//* Block Scope function
if (true) {
    var a = 10;
    let b = 20;
    let c = 30;
}
// console.log(a); 
// console.log(b); // error
// console.log(c); // error

//* Hoisting
// console.log(name);
// var name = "Likhon";


