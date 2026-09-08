function orbit([width, height, x, y]) {
    let matrix = [];
    let row = [];
    while (width > 0) {
        row.push("#");
        width--
    }
    while (height > 0) {
        matrix.push(row);
        height--;
    }
    let currentRow = matrix[x].slice();
    currentRow[y] = 1;

    for (let index = 0; index < currentRow.length; index++) {
        if (index != y) {
            let currentPower = Math.abs(y - index) + 1;
            currentRow[index] = currentPower;
        }
    }
    matrix[x] = currentRow;
    if (x - 1 > -1) {
        let previousRow = matrix[x - 1].slice();
        previousRow[y] = 2;
        for (let index = 0; index < previousRow.length; index++) {
            if (previousRow[index] != 2) {
                let currentPower = Math.abs(y - index) + 1;
                previousRow[index] = currentPower;
            }
        }
        matrix[x - 1] = previousRow
    }
    if (x + 1 < matrix.length) {
        let nextRow = matrix[x + 1].slice();
        nextRow[y] = 2;
        for (let index = 0; index < nextRow.length; index++) {
            if (nextRow[index] != 2) {
                let currentPower = Math.abs(y - index) + 1;
                nextRow[index] = currentPower;
            }
        }
        matrix[x + 1] = nextRow
    }
    let workingColumn = [];
    for (let currentArray = 0; currentArray < matrix.length; currentArray++) {
        workingColumn.push(matrix[currentArray][y]);
    }
    for (let index = 0; index < workingColumn.length; index++) {
        if (workingColumn[index] === "#") {
            let currentPower = Math.abs(index - workingColumn.indexOf(1)) + 1;
            workingColumn[index] = currentPower;
        }
    }
    for (let currentArray = 0; currentArray < matrix.length; currentArray++) {
        let currentArrayFinal = matrix[currentArray].slice();
        currentArrayFinal[y] = workingColumn[currentArray];
        matrix[currentArray] = currentArrayFinal
    }
    for (let currentArray = 0; currentArray < matrix.length; currentArray++) {
        let currentArrayFinal = matrix[currentArray].slice();
        for (let index = 0; index < currentArrayFinal.length; index++) {
            let character = currentArrayFinal[index];
            if (character === "#") {
                let newValueColumn = Math.abs(x - currentArray) + 1;
                let newValueRow = Math.abs(index - y) + 1;
                if (newValueRow > newValueColumn) {
                    currentArrayFinal[index] = newValueRow
                } else {
                    currentArrayFinal[index] = newValueColumn;
                }
            }
        }
        matrix[currentArray] = currentArrayFinal;
    }
    for (let array of matrix) {
        console.log(array.join(" "));
    }
}
