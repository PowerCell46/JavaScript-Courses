function valueOfAString(array) {

let workingString = array[0];
let lowerOrUpper = array[1];
let searchedSum = 0;

for( let index = 0; index < workingString.length; index++) {
    let currentDigit = workingString[index];
    let asciiValue = currentDigit.charCodeAt(0);
    if (asciiValue > 64 && asciiValue < 91 && lowerOrUpper === "UPPERCASE") {
        searchedSum += asciiValue;
    }
    if (asciiValue > 96 && asciiValue < 123 && lowerOrUpper === "LOWERCASE") {
        searchedSum += asciiValue;
    } 
}

console.log(`The total sum is: ${searchedSum}`);
}
