const a = 2;
const b = "2";
console.log(a == b); // true, because it performs type coercion
console.log(a === b); // false, because it checks for both value and type

1 == true; // true, because it performs type coercion
0 == false; // true, because it performs type coercion
"" == false; // true, because it performs type coercion
null == undefined; // true, because it performs type coercion


const x = [1, 2, 3]
const y = [1, 2, 3]
console.log(x == y);
console.log(x === y); 