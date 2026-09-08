function biggestNumber(input) {
    let index = 0;
    let inputNumber = input[index];
    let maxNumber = -9999;

while(inputNumber !== "Stop") {
    inputNumber = Number(inputNumber);
    if(inputNumber > maxNumber) {
        maxNumber = inputNumber;
    }
    index++;
    inputNumber = input[index];
}
console.log(maxNumber);
}
