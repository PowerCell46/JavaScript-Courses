function sequence(input) {
    let index = 0;
    let inputedNumber = Number(input[index]);
    index++;
    let increasingNumber = 1;
    console.log(increasingNumber);
    let sumofSequence = increasingNumber;

    while (sumofSequence < inputedNumber) {
        increasingNumber = (increasingNumber * 2) + 1;
        console.log(increasingNumber);
        sumofSequence += increasingNumber;

    }
}
