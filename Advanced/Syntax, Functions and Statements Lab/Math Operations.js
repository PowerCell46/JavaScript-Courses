function mathOperations(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return firstNum + secondNum
        case "-":
            return firstNum - secondNum
        case "*":
            return firstNum * secondNum
        case "/": 
            return firstNum / secondNum
        case "%":
            return firstNum % secondNum
        case "**":
            return firstNum ** secondNum
        }
}
