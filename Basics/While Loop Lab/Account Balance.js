function bankBalance(input) {
    let index = 0;
    let inputedMoney = (input[index]);
    let sumOfMoney = 0;
    while(inputedMoney !== "NoMoreMoney") {
    inputedMoney = Number(inputedMoney);
    if(inputedMoney >= 0) {
    console.log("Increase: " + inputedMoney.toFixed(2));
    } else if(inputedMoney < 0) {
    console.log("Invalid operation!");
    break;
    }
    sumOfMoney += inputedMoney;
    index++;
    inputedMoney = (input[index]);
}
console.log("Total: " + sumOfMoney.toFixed(2));
}
