// double number
const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// for(const num of numbers){
//     doubled.push(num*2)
// }


// const doubleIt =  num => num *2
// const doubled = numbers.map(doubleIt)

// const doubled = numbers.map(num => num * 2);
// const square = numbers.map(num => num * num);
// console.log(doubled);

// const friends = ['zaved', 'naved', 'khaled', 'sajed'];
// const firstLetters = friends.map(frd => frd[0]);
// console.log(firstLetters);


const products = [
    {name: 'laptop', price: 450000},
    {name: 'phone', price: 15000},
    {name: 'tablet', price: 25000}
]

const price = products.map(pd => pd.price*2 );
const names = products.map(pd =>{
    const upperCaseName = pd.name.toUpperCase();
    return upperCaseName;
})
console.log(price);

