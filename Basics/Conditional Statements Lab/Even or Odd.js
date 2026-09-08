function oodOrEven(input) {
let firstNumber = Number(input[0]);
let checkedNumber = Number(firstNumber % 2);
if(checkedNumber == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
}   
