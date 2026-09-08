function oddOccurrences(string) {
    let arrayOfWords = string.split(" ");

    let mapOfWords = new Map();

    for (let index = 0; index < arrayOfWords.length; index++) {
        let currentInput = arrayOfWords[index];
        let currentWord = currentInput.toLowerCase()
        if (!mapOfWords.has(currentWord)) {
            mapOfWords.set(currentWord, 1);
        } else {
            let previousOccurences = Number(mapOfWords.get(currentWord));
            mapOfWords.set(currentWord, previousOccurences + 1);
        }
    }

    let arrayOfKeys = Array.from(mapOfWords.keys());
    let printOutput = "";

    for (let xedni = 0; xedni < arrayOfKeys.length; xedni++) {
        let currentKey = arrayOfKeys[xedni];
        if (mapOfWords.get(currentKey) % 2 != 0) {
            printOutput += currentKey + " ";
        }
    }
    console.log(printOutput);
}
