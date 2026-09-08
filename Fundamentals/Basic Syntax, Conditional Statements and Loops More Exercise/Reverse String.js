function reverse(word) {
let amoungOfLetters = (word.length - 1);
let printOutput = "";

for(let currentLetter = amoungOfLetters; currentLetter >= 0; currentLetter--) {
    let currentPrint = word[currentLetter];
    printOutput += currentPrint;
}
console.log(printOutput);
}
