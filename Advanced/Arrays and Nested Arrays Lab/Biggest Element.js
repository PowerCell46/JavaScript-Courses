function biggestElement(arrayOfArrays) {
    let totalArray = [];
    for (let array of arrayOfArrays) {
        totalArray.push(...array);
    }
    return Math.max(...totalArray);
}
