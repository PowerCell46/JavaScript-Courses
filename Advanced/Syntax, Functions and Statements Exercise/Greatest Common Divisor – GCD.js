function greatestCommonDivisor(firstNum, secondNum) {
    for (let divider = secondNum; divider > 0; divider--) {
        if (firstNum % divider === 0 && secondNum % divider === 0) {
            return divider
        }
    }
}
