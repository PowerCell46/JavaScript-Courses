function asciiSumator(array) {
let firstCharacterValue = array[0].charCodeAt(0);
let secondCharacterValue = array[1].charCodeAt(0);
let sum = 0;
for (let index = 0; index < array[2].length; index++) {
    let currentCharacterValue = array[2][index].charCodeAt(0);
    if (currentCharacterValue > firstCharacterValue && currentCharacterValue < secondCharacterValue || currentCharacterValue > secondCharacterValue && currentCharacterValue < firstCharacterValue) {
        sum += currentCharacterValue;
    }
}
console.log(sum);
}
