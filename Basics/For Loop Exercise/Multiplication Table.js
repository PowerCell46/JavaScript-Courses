function multiplicationTable(input) {
    let number = Number(input[0]);

    for( let multiNumber = 1; multiNumber <= 10; multiNumber++) {
        let finalSum = number * multiNumber;
        console.log(multiNumber + " * " + number + " = " + finalSum);
    }
}
