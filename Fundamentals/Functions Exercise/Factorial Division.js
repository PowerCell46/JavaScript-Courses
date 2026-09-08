function factorialDivision(num1, num2) {
    let firstSum = 1;
    let secondSum = 1;

for(let currentNum = num1; currentNum > 0; currentNum--) {
firstSum *= currentNum;
}

for(let currentNum = num2; currentNum > 0; currentNum--) {
secondSum *= currentNum;
}

let result = Math.abs(firstSum / secondSum);
console.log(result.toFixed(2));
}
