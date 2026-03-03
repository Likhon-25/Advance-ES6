// // Closure is a powerful concept in JavaScript that allows a function to access variables from its outer scope even after the outer function has finished executing. This can be particularly useful for maintaining state or creating private variables.
// function deductLifeCounter(studentName) {
//     let life = 3;

//     let lifeDeducteExecute = () => {
//         if (life > 0) {
//             life--;
//             console.log(`${studentName}, you lost a life. Life remaining ${life}`);
//         }
//         else {
//             console.log(`${studentName}, you have no more lives left.`);
//         }
//     }
//     return lifeDeducteExecute;
// }

// const rifatAlvi = deducatLifeCounter('Rifat Alvi');
// rifatAlvi();
// rifatAlvi();
// rifatAlvi();
// rifatAlvi();

function stopWatch(){
    let counter = 0;

    return function(){
        counter++;
        return counter;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2  = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());

