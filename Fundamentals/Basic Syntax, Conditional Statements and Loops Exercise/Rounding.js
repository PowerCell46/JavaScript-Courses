function rounding(roundedNumber, numberOfDigits) {

if(numberOfDigits > 15) {
numberOfDigits = 15;
}

let printOutput = (roundedNumber).toFixed(numberOfDigits);
console.log(parseFloat(printOutput));
}
