function reverseTask(n,array) {
let lengthOfTheArray = array.length;
lengthOfTheArray = Number(lengthOfTheArray);
let result = "";
let index = (n - 1);

for(let currentNumber = 1; currentNumber <= n; currentNumber++) {
result += array[index] + " ";
index--;
}
console.log(result);
}
