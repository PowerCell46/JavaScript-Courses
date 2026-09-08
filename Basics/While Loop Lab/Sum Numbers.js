function sumOfNumbers(input) {
let index = Number(0);
let mainNumber = Number(input[index]);
index++;
let sumOfNumbers = Number(0);   
while(sumOfNumbers < mainNumber) {
    let currentNumber = Number(input[index]);
    sumOfNumbers+= Number(currentNumber);
    index++;
} 
console.log(sumOfNumbers);

}
