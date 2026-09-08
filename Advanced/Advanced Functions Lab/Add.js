function solution(inputNumber) {
    let workingNumber = inputNumber;
    return function (num) {
        return workingNumber + num
    }
}
