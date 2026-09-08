function magicMatrices(arrayOfArrays) {
    let rowArray = [];
    let columnArray = [];

    for (let index = 0; index < arrayOfArrays.length; index++) {
        let currentArray = arrayOfArrays[index];
        let finalCurrentArray = [];
        const sum = currentArray.reduce((partialSum, a) => partialSum + a, 0);
        for (let xedni = 0; xedni < currentArray.length; xedni++) {
            finalCurrentArray.push(sum);
        }
        rowArray.push(sum);
    }

    for (let xedni = 0; xedni < arrayOfArrays[0].length; xedni++) {
        let currentColumnSum = 0;
        for (let index = 0; index < arrayOfArrays.length; index++) {
            currentColumnSum += arrayOfArrays[index][xedni];
        }
        columnArray.push(currentColumnSum);
    }
    if (rowArray.join(" ") === columnArray.join(" ")) {
        for (let num of rowArray) {
            if (num !== rowArray[0]) {
                return false;
            }
        }
        for (let num of columnArray) {
            if (num !== columnArray[0]) {
                return false
            }
        }
        return true;
    } else {
        return false;
    }
}
