function simpleCalculator(number1, number2, action) {
let result = null;

switch(action) {
case 'multiply':result = number1 * number2; break;
case 'divide': result = number1 / number2; break;
case 'add': result = number1 + number2; break;
case 'subtract': result = number1 - number2; break; 
}

console.log(result);
}
