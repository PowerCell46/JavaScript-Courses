function passwordGenerator(array) {
    let concetenatedString = array[0] + array[1];
    let arrayOfTheLastWord = array[2].split("");

    let finalString = "";
    let xedni = -1;

    for (let index = 0; index < concetenatedString.length; index++) {
        let currentDigit = concetenatedString[index];
        if (currentDigit === "a" || currentDigit === "i" || currentDigit === "e" || currentDigit === "o" || currentDigit === "u") {
            xedni++;
            if (xedni === arrayOfTheLastWord.length) {
                xedni = 0;
            }
            finalString += arrayOfTheLastWord[xedni].toUpperCase()
        } else {
            finalString += currentDigit;
        }
    }
    finalString = finalString.split("").reverse();
    console.log(`Your generated password is ${finalString.join("")}`)

}
