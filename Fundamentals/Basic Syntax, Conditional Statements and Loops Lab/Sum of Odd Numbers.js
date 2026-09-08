function sumOfOddNumbers(numberOfOddNumbers) {

let printedNumber = 1;
let sumOfOddNumbersFinal = 0;

while(numberOfOddNumbers > 0) {
if(printedNumber % 2 !== 0) {
sumOfOddNumbersFinal += printedNumber;
console.log(printedNumber);
numberOfOddNumbers--;
}
printedNumber++;
}

console.log("Sum: " + sumOfOddNumbersFinal);
}
