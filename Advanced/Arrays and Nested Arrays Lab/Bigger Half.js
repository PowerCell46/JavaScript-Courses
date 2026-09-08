function biggerHalf(array) {
    array.sort((a, b) => a - b);
    let printArray = [];
    let numberOfEl = Math.ceil(array.length / 2);
    while (numberOfEl > 0) {
        printArray.unshift(array.pop());
        numberOfEl--;
    }
    return printArray
}
