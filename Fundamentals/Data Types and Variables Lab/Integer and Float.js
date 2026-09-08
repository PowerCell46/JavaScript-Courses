function integerOrFloat(first, second, third) {
let sum = first + second + third;
sum += "";
let float = false;


for(let currentDigit = 0; currentDigit < sum.length; currentDigit++) {
    let currentDigitFinal = sum[currentDigit];
    if(currentDigitFinal === ".") {
    float = true;
    }
}

if(float === false) {
    console.log(`${sum} - Integer`);
} else if(float === true) {
    console.log(`${sum} - Float`);
}
}
