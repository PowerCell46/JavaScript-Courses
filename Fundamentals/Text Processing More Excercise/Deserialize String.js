function deserializeString(array) {
let finalArray = [];
for(let index = 0; index < 49; index++) {
    finalArray.push("_");
}

for(let index = 0; index < array.length - 1; index++) {
    let currentInput = array[index].split("");
    let currentDigit = currentInput.shift();
    currentInput.shift();
    currentInput = currentInput.join("").split("/")
    let arrayOfIndexes = currentInput.map(x => Number(x))
    for(let xedni = 0; xedni < arrayOfIndexes.length; xedni++) {
        let currentIndex = arrayOfIndexes[xedni];
        finalArray[currentIndex] = currentDigit;
    }
}
let finalString = "";
for(let i = 0; i < finalArray.length; i++) {
    let currentChar = finalArray[i];
    if (currentChar != "_") {
        finalString += currentChar
    }
}
console.log(finalString);
}
