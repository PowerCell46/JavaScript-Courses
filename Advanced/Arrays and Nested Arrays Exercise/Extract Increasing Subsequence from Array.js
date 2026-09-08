function extractIncreasingSubsetFromArray(array) {
    if (array.length === 0) {
        return undefined; // or some other value as specified by the task instructions
    }

    let increasingArray = [array[0]];
    let currentBiggestNumber = array[0];
    
    for (let i = 1; i < array.length; i++) {
        let number = array[i];
        if (number >= currentBiggestNumber) {
            currentBiggestNumber = number;
            increasingArray.push(number);
        }
    }
    
    return increasingArray;
}
