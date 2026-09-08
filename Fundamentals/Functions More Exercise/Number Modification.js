function numberModification(number) {
    let numberAsString = number + "";
    let sumOfDigits = 0;

    for (let index = 0; index < Number(numberAsString.length); index++) {
        let currentNumber = Number(numberAsString[index]);
        sumOfDigits += currentNumber;
    }

    let averageOfTheNum = sumOfDigits / Number(numberAsString.length);

    while (averageOfTheNum < 5) {
        numberAsString += "9";
        sumOfDigits += 9;
        averageOfTheNum = sumOfDigits / Number(numberAsString.length);
    }
    
    console.log(numberAsString);
}
