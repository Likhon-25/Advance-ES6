// function firstSum(arr1, arr2) {
//     // arr1[0] = 100;
//     // arr2[0] = 200;
//     const first = arr1[0];
//     const second = arr2[0];
//     return first + second;
// }

// const num1 = [1,2,3]
// const num2 = [4,5,6]
// console.log('before the function call:' , num1 , num2);
// const result = firstSum(num1, num2);
// console.log('after the function call:', num1, num2);


// * pass by value
function multiply(num) {
    num = num * 2;
    // console.log('function ar vitora:', num);
}
let myNumber = 10;
multiply(myNumber);
// console.log('function ar bahire:', myNumber);



// * pass by reference
function updateProfile(person){
    person.job = "Developer";
}
let student = {name: "Abir", job:"student"};
updateProfile(student);
console.log(student.job);