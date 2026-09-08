function revealWords(firstInput, secondInput) {
    let firstArray = firstInput.split(", ");
    let secondArray = secondInput.split(" ");
    for (let index = 0; index < secondArray.length; index++) {
        let currentWord = secondArray[index];
        if (currentWord[0] === "*") {
            let currentLength = currentWord.length;
            for (let xedni = 0; xedni < firstArray.length; xedni++) {
                let currentWordFirst = firstArray[xedni];
                if (currentLength === currentWordFirst.length) {
                    secondArray[index] = currentWordFirst;
                }
            }
        }
    }
    console.log(secondArray.join(" "));
}
