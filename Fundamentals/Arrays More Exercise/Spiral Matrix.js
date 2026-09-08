function spiralMatrix(dimension1, dimension2) {
    let matrix = [];
    let row = [];
    for (let smth = 0; smth < dimension1; smth++) {
        row.push("@");
    }
    for (let smth = 0; smth < dimension2; smth++) {
        matrix.push(row);
    }
    // Създаване на матрицата.
    let mainINDEX = 0;
    let number = 1;
    let i = 0;

    while (matrix[Math.ceil(matrix.length / 2) - 1].includes("@") || matrix[Math.ceil(matrix.length / 2)].includes("@")) {
        let firstWorkingRow = matrix[mainINDEX].slice();

        while (firstWorkingRow.includes("@")) {
            firstWorkingRow[i] = number;
            number++;
            i++;
        }
        matrix[mainINDEX] = firstWorkingRow;

        for (let index = (1 + mainINDEX); index < (matrix.length - mainINDEX); index++) {
            let currentArray = matrix[index].slice();
            currentArray[currentArray.length - (mainINDEX + 1)] = number;
            number++;
            matrix[index] = currentArray;
        }
        mainINDEX++;

        let lastWorkingRow = matrix[matrix.length - mainINDEX].reverse().slice();
        i = 1;
        while (lastWorkingRow.includes("@")) {
            if (lastWorkingRow[i] === "@") {
                lastWorkingRow[i] = number;
                number++;
            }
            i++;
        }
        matrix[matrix.length - mainINDEX] = lastWorkingRow.reverse();

        for (let index = matrix.length - (mainINDEX + 1); index > (mainINDEX - 1); index--) {
            let currentArray = matrix[index].slice();
            currentArray[mainINDEX - 1] = number;
            number++;
            matrix[index] = currentArray;
        }

        let secondWorkingRow = matrix[mainINDEX].slice();
        i = 0;
        while (secondWorkingRow.includes("@")) {
            if (secondWorkingRow[i] === "@") {
                secondWorkingRow[i] = number;
                number++;
            }
            i++;
        }
        matrix[mainINDEX] = secondWorkingRow;
        // console.table(matrix);
    }

    for (let array of matrix) {
        console.log(array.join(" "));
    }
}
