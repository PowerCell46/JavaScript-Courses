function processOddPositions(arrayOfNumbers) {
    arrayOfNumbers = arrayOfNumbers.filter((el, index) => index % 2 !== 0);
    arrayOfNumbers = arrayOfNumbers.map(el => el * 2);
    return arrayOfNumbers.reverse().join(" ");
}
