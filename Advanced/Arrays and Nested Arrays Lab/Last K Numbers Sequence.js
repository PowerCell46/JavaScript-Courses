function lastKNumbersSequence(n, k) {
    let array = [1];
    while (array.length < n) {
        let numberOfSumNumbers = k;
        let currentSum = 0;
        for (let index = array.length - 1; index > -1; index--) {
            currentSum += array[index];
            numberOfSumNumbers--;
            if (numberOfSumNumbers === 0) {
                break;
            }
        }
        array.push(currentSum);
    }
    return array
}
