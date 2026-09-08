function sumOfDigits(number) {
number += "";
let sum = null;

for(let currentDigit = 0; currentDigit < number.length; currentDigit++) {
let currentDigitFinal = Number(number[currentDigit]);
sum += currentDigitFinal;
}
console.log(sum);
}
