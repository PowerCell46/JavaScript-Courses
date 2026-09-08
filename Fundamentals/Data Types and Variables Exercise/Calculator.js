function calculator(number, operator, anotherNumber) {
let result = 0;

switch(operator) {
    case "+":
    result = number + anotherNumber;
    console.log(result.toFixed(2)); break;
    case "-":
    result = number - anotherNumber;
    console.log(result.toFixed(2)); break;
    case "/":
    result = number / anotherNumber;
    console.log(result.toFixed(2)); break;
    case "*":
    result = number * anotherNumber;
    console.log(result.toFixed(2)); break;
}
}
