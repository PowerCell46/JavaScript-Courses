function equalNeighbours(arrayOfArrays) {
    let numberOfEqualNeighbours = 0;
    for (let index = 0; index < arrayOfArrays.length; index++) {
        let currentArray = arrayOfArrays[index];
        for (let xedni = 0; xedni < currentArray.length; xedni++) {
            let currentElement = currentArray[xedni];
            if (xedni < currentArray.length) {
                let nextElement = currentArray[xedni + 1];
                if (nextElement === currentElement) {
                    numberOfEqualNeighbours++;
                }
            }
            if (index < arrayOfArrays.length - 1) {
                let nextArray = arrayOfArrays[index + 1];
                let nextArrayElement = nextArray[xedni];
                if (nextArrayElement === currentElement) {
                    numberOfEqualNeighbours++;
                }
            }
        }
    }
    return numberOfEqualNeighbours;
}
