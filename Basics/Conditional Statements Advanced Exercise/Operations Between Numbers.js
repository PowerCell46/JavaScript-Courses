function OperationsBetweenNumbers(input) {
let numberOne = Number(input[0]);
let numberTwo = Number(input[1]);
let operation = input[2];

let result = 0;
let oddOrEven = 0;

switch(operation) {
case "+":
    result = numberOne + numberTwo; break;
case "-":
    result = numberOne - numberTwo; break;
case "*": 
    result = numberOne * numberTwo; break;
case "/":
    result = numberOne / numberTwo; break;
case "%":
    result = numberOne % numberTwo; break;
default: console.log("Има грешка батко!");
}

if(operation === "+" || operation === "-" || operation === "*") {
if(result % 2 === 0) {
    oddOrEven = "even";
}else {
    oddOrEven = "odd";
}
console.log(numberOne + " " + operation + " " + numberTwo + " " + "= " + result + " " + "- " + oddOrEven);


}else if(operation === "/") {
    if(numberTwo === 0) {
        console.log("Cannot divide " + numberOne + " by zero");
    }else{
        console.log(numberOne + " / " + numberTwo + " = " + result.toFixed(2));
    }
    
}else if(operation === "%") {
    if(numberTwo === 0) {
        console.log("Cannot divide " + numberOne + " by zero")
    }else {
        console.log(numberOne + " % " + numberTwo + " = " + result);
    }
    
}
}
