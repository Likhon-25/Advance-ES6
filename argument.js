function add(num1, num2) {
    console.log('arguments:', arguments, arguments[2]);
    const args = [...arguments];
    console.log(args);
    return num1 + num2;
}
add(2, 55, 87, 89)