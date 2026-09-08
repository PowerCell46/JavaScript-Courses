function airPollution(matrix, arrayOfCommands) {
    let finalMatrix = [];

    for (let index = 0; index < matrix.length; index++) {
        let currentArray = matrix[index].split(" ");
        let finalCurrentArray = [];
        for (let x = 0; x < currentArray.length; x++) {
            let currentNumber = Number(currentArray[x]);
            finalCurrentArray.push(currentNumber);
        }
        finalMatrix.push(finalCurrentArray);
    }

    for (let index = 0; index < arrayOfCommands.length; index++) {
        let currentInput = arrayOfCommands[index].split(" ");
        let currentForce = currentInput.shift();
        let currentValue = Number(currentInput.shift());

        if (currentForce === "breeze") {
            // currentValue = current row
            let currentRow = finalMatrix[currentValue];
            finalMatrix.splice(currentValue, 1);
            let finalCurrentRow = [];
            for (let xedni = 0; xedni < currentRow.length; xedni++) {
                let currentCellValue = currentRow[xedni];
                currentCellValue -= 15;
                if (currentCellValue < 0) {
                    currentCellValue = 0;
                }
                finalCurrentRow.push(currentCellValue);
            }
            finalMatrix.splice(currentValue, 0, finalCurrentRow);

        } else if (currentForce === "gale") {
            // currentValue = current column
            for (let xedni = 0; xedni < finalMatrix.length; xedni++) {
                let currentRow = finalMatrix[xedni];
                let currentCellValue = currentRow[currentValue] - 20;
                if (currentCellValue < 0) {
                    currentCellValue = 0;
                }
                currentRow.splice(currentValue, 1, currentCellValue);
            }
        } else if (currentForce === "smog") {
            // currentValue = currentCellIncrease
            for (let x = 0; x < finalMatrix.length; x++) {
                let currentRow = finalMatrix[x];
                let finalCurrentRow = [];
                for (let i = 0; i < currentRow.length; i++) {
                    let currentCellValue = currentRow[i] + currentValue;
                    finalCurrentRow.push(currentCellValue);
                }
                finalMatrix.splice(x, 1, finalCurrentRow);
            }
        }
    }

    let arrayOfPollutedAreas = [];

    for (let index = 0; index < finalMatrix.length; index++) {
        let currentRow = finalMatrix[index];
        for (let xedni = 0; xedni < currentRow.length; xedni++) {
            let currentCellValue = currentRow[xedni];
            if (currentCellValue >= 50) {
                let currentCellPosition = "[" + index + "-" + xedni + "]"
                arrayOfPollutedAreas.push(currentCellPosition);
            }
        }
    }

    if (arrayOfPollutedAreas.length > 0) {
        console.log(`Polluted areas: ${arrayOfPollutedAreas.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
}
