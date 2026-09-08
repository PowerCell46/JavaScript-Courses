function addAndSubstract(array) {
let sumOfTheFirstArray = null;
let sumOfTheSecondArray = null;
for(let index = 0; index < Number(array.length); index++) {
let currentNumber = Number(array[index]);
sumOfTheFirstArray += currentNumber;
}

let secondArray = [];
for(let index1 = 0; index1 < Number(array.length); index1++) {
let currentNumber1 = Number(array[index1]);
if(currentNumber1 % 2 === 0) {
currentNumber1 += index1;
secondArray.push(currentNumber1);
sumOfTheSecondArray += currentNumber1;
} else if(currentNumber1 % 2 !== 0) {
currentNumber1 -= index1;
secondArray.push(currentNumber1);
sumOfTheSecondArray += currentNumber1;
}
}
console.log(`[ ${secondArray.join(", ")} ]`);
console.log(sumOfTheFirstArray);
console.log(sumOfTheSecondArray);
}
