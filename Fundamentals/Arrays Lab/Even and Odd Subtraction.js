function evenandOddSubtraction(array) {
let lengthOfTheArray = Number(array.length);
let sumOfEvenNumbers = 0;
let sumOfOddNumbers = 0;

for(let currentNumberIndex = 0; currentNumberIndex < lengthOfTheArray; currentNumberIndex++) {
let currentNumber = Number(array[currentNumberIndex]);
if(currentNumber % 2 === 0) {
sumOfEvenNumbers+= currentNumber;
} else {
sumOfOddNumbers+= currentNumber;
}
}
console.log(sumOfEvenNumbers - sumOfOddNumbers)
}
