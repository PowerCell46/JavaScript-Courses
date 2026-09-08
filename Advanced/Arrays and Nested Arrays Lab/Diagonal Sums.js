function diagonalSums(arrayOfArrays) {
    let firstDiagonalSum = 0;
    let firstIndex = 0;
    let secondDiagonalSum = 0;
    let secondIndex = arrayOfArrays[0].length - 1;

    for (let array of arrayOfArrays) {
        let firstFlag = true;
        for (let index = 0; index < array.length; index++) {
            if (index === firstIndex && firstFlag) {
                firstDiagonalSum += array[index];
                firstIndex++;
                firstFlag = false;
            }
            if (index === secondIndex) {
                secondDiagonalSum += array[index];
                secondIndex--;
            }
        }
    }
    return firstDiagonalSum + " " + secondDiagonalSum
}
