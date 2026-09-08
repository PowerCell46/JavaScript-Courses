function oddAndEvenSum(number) {

let oddSum = 0;
let evenSum = 0;
number = number + "";

for(let index = 0; index < Number(number.length); index++) {
let currentNumber = Number(number[index]);
if(currentNumber % 2 === 0) {
evenSum += currentNumber;
} else {
oddSum += currentNumber;
}
}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
} 
