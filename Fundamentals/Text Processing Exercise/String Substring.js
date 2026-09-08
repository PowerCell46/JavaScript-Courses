function stringSubstring(inputWord, text) {
    let word = inputWord.toLowerCase();
    let theWordIsPrinted = false;
    text = text.toLowerCase();
    let arrayOfTheText = text.split(" ");
    for (let currentWord of arrayOfTheText) {
        if (word === currentWord) {
            console.log(inputWord);
            theWordIsPrinted = true;
            break;
        }
    }
    if (theWordIsPrinted === false) {
        console.log(`${inputWord} not found!`);
    }
}
