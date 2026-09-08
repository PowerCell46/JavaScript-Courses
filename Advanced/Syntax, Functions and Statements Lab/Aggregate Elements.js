function aggregateElements(array) {
    let result = 0;
    let secondResult = 0;
    let thirdResult = "";
    for (let index = 0; index < array.length; index++) {
        result += array[index];
        secondResult += 1 / array[index];
        thirdResult += array[index] + "";
    }
    return `${result}\n${secondResult}\n${thirdResult}`;
}
