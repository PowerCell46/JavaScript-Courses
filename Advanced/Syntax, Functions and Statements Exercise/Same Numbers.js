function sameNumbers(number) {
    number += "";
    let firstDigit = number[0];
    let sum = 0;
    let flag = true;

    for (let digit of number) {
        sum += Number(digit);
        if (digit !== firstDigit) {
            flag = false;
        }
    }
    if (flag) {
        return true + "\n" + sum
    } else {
        return false + "\n" + sum
    }
}
