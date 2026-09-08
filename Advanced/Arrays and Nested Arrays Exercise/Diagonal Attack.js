function diagonalAttack(inputArray) {

    let arrayOfNumbers = [];

    for (let index = 0; index < inputArray.length; index++) {
        let currentRow = inputArray[index].split(" ");
        let finalCurrentRow = [];
        for (let number of currentRow) {
            finalCurrentRow.push(Number(number));
        }
        arrayOfNumbers.push(finalCurrentRow);
    }

    let lengthOfTheRow = arrayOfNumbers[0].length;

    let startingIndex = 0;
    let endingIndex = lengthOfTheRow - 1;
    let sumOfTheFirstDiagonal = 0;
    let sumOfTheSecondDiagonal = 0;

    let currentArrayIndex = 0;

    while (currentArrayIndex < lengthOfTheRow) {
        sumOfTheFirstDiagonal += arrayOfNumbers[currentArrayIndex][startingIndex];
        sumOfTheSecondDiagonal += arrayOfNumbers[currentArrayIndex][endingIndex];
        currentArrayIndex++;
        startingIndex++;
        endingIndex--;
    }
    if (sumOfTheFirstDiagonal !== sumOfTheSecondDiagonal) {
        for (row of arrayOfNumbers) {
            console.log(row.join(" "));
        }
    } else {
        currentArrayIndex = 0;
        startingIndex = 0;
        endingIndex = lengthOfTheRow - 1;
        let newArrayOfNumbers = [];
        while (currentArrayIndex < lengthOfTheRow) {
            let currentRow = arrayOfNumbers[currentArrayIndex];
            let finalCurrentRow = [];

            for (let index = 0; index < currentRow.length; index++) {
                let currentNumber = currentRow[index];
                if (index != startingIndex && index != endingIndex) {
                    finalCurrentRow.push(sumOfTheFirstDiagonal);
                } else if (index === startingIndex) {
                    finalCurrentRow.push(currentRow[startingIndex]);
                } else if (index === endingIndex) {
                    finalCurrentRow.push(currentRow[endingIndex]);
                }
            }
            newArrayOfNumbers.push(finalCurrentRow);
            currentArrayIndex++;
            startingIndex++;
            endingIndex--;
        }
        for (let row of newArrayOfNumbers) {
            console.log(row.join(" "));
        }
    }
}
