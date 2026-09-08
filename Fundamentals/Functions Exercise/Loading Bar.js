function loadingBar(number) {

    if(number === 100) {
console.log(`100% Complete!`);
} else {
let firstDigit = number + "";
firstDigit = Number(firstDigit[0]);
let array = [];

for(let index = 0; index < 10; index++) {
    while(index < firstDigit) {
    array.push("%");
    index++;
    }
    array.push(".");
}
array = array.join("");
console.log(`${number}% [${array}]`);
console.log("Still loading...");
}
}
