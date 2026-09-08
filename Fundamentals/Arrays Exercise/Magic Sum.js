function magicSum(array, number) {

for(let index = 0; index < Number(array.length); index++) {
let firstNumber = Number(array[index]);

for (let index1 = index + 1; index1 < Number(array.length); index1++ ) {
let secondNumber = Number(array[index1]);

if(firstNumber + secondNumber === number) {
console.log(firstNumber + " " + secondNumber);
}
}
}
}
