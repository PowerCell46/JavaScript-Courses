function sumOfEvenNumbers(array) {
let lengthOfTheArray = Number(array.length);
let sum = 0;

for(let currentNumberIndex = 0; currentNumberIndex < lengthOfTheArray; currentNumberIndex++) {
let currentNumber = Number(array[currentNumberIndex]);
if(currentNumber % 2 === 0) {
 sum+= currentNumber;
}
}
console.log(sum)
}
