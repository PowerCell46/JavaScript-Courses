function sumOfNumbers(firstNum, secondNum) {
    let sum = 0;
    for (let index = Number(firstNum); index <= Number(secondNum); index++) {
        sum += index;
    }
    return sum
}
