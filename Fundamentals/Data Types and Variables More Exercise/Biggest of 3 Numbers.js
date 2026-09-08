function biggestNumber(num1, num2, num3) {
let array = [];
array.push(num1);
array.push(num2);
array.push(num3);

let biggestNumber = -1000000;

for(let index = 0; index < 3; index++) {
let currentNumber = array[index];
if(currentNumber > biggestNumber) {
biggestNumber = currentNumber;
}
}

console.log(biggestNumber);
}
