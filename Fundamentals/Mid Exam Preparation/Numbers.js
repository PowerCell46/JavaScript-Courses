function numbers(string) {
    let numbersArray = string.split(" ");
    numbersArray = numbersArray.map(x => Number(x));
    let sum = 0;

    for (let index = 0; index < Number(numbersArray.length); index++) {
        let currentNum = numbersArray[index];
        sum += currentNum;
    }
    let average = sum / Number(numbersArray.length);
    let numberIsFound = false;
    let counter = 1;
    let printArray = [];
    numbersArray = numbersArray.sort((a, b) => b - a);
    for (let index1 = 0; index1 < Number(numbersArray.length); index1++) {
        let currentNum = numbersArray[index1];
        if (currentNum > average && counter <= 5) {
            printArray.push(currentNum);
            counter++;
            numberIsFound = true;
        }
    }
    if (numberIsFound === false) {
        console.log("No");
    } else {
        printArray = printArray.sort((a, b) => b - a);
        console.log(printArray.join(" "));
    }
}
