function smallestTwoNumbers(array) {
    let smallestNum = Math.min(...array);
    let smallestNumIndex = array.indexOf(smallestNum);
    array.splice(smallestNumIndex, 1);
    let secondSmallestNum = Math.min(...array);
    return smallestNum + " " + secondSmallestNum
}
