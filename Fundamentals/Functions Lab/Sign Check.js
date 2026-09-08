function signCheck(num1, num2, num3) {
let numberOfPosiveNums = null;
let numberOfNegativeNums = null;

if(num1 > 0) {
numberOfPosiveNums++;
} else if(num1 < 0) {
numberOfNegativeNums++;
}
if(num2 > 0) {
numberOfPosiveNums++;
} else if(num2 < 0) {
numberOfNegativeNums++;
} 
if(num3 > 0) {
numberOfPosiveNums++;
} else if(num3 < 0) {
numberOfNegativeNums++;
}

if(numberOfPosiveNums === 2 && numberOfNegativeNums === 1) {
console.log("Negative");
} else if(numberOfNegativeNums === 2 && numberOfPosiveNums === 1) {
console.log("Positive");
} else if(numberOfNegativeNums === 3) {
console.log("Negative");
} else if(numberOfPosiveNums === 3) {
console.log("Positive");
}
}
