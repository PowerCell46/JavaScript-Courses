function summingVowels(input) {
let ourNumber = input[0];
let sum = 0;

for(let i = 0; i < ourNumber.length; i++) {
let inputAsNumber = Number(ourNumber[i]);
sum += inputAsNumber; 
}
console.log(`The sum of the digits is:${sum}`);
}
