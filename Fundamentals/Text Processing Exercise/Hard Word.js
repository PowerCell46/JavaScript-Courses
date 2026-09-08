function hardWords(mainArray) {
    let text = mainArray[0].split(" ");
    let array = mainArray[1];
    let printArray = [];
    let pointIsUsed = false;
    let commaIsUsed = false;

    for (let word of text) {

        if (word[0] === "_") {
            let currentLength = word.length;

            if (word[word.length - 1] === "." || word[word.length - 1] === ",") {
                currentLength--;
                if (word[word.length - 1] === ".") {
                    pointIsUsed = true;
                } else if (word[word.length - 1] === ",") {
                   commaIsUsed = true;
                }
            }

            for (wordFromArray of array) {
                if (currentLength === wordFromArray.length) {

                    if (commaIsUsed) {
                        printArray.push(wordFromArray + ",");
                        commaIsUsed = false;    
                    } else if (pointIsUsed) {
                        printArray.push(wordFromArray + ".");
                        pointIsUsed = false;
                    } else {
                        printArray.push(wordFromArray);
                    }
                }
            }
        } else {
            printArray.push(word);

        }
    }
    console.log(printArray.join(" "));
}
