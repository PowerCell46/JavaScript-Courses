function specialNumbers(n) {

for(let currentNumber = 1; currentNumber <= n; currentNumber++) {
    currentNumber += "";
    let sumOfDigits = null;

    for(let currentDigit = 0; currentDigit < currentNumber.length; currentDigit++) {
        let addedNumber = currentNumber[currentDigit];
        addedNumber = Number(addedNumber);
        sumOfDigits += addedNumber;
 
    }

    if(sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
        console.log(`${currentNumber} -> True`);
    } else {
        console.log(`${currentNumber} -> False`);
    }
}
}
