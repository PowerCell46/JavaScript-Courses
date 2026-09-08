function countStringOccurences(text, word) {
    if (word != " ") {


        let arrayOfText = text.split(" ");
        let counter = 0;
        for (let index = 0; index < arrayOfText.length; index++) {
            if (arrayOfText[index] === word) {
                counter++;
            }
        }
        console.log(counter);
    } else {
        let counter = 0;
        let arrayOfText = text.split("");
        for (let index = 0; index < arrayOfText.length; index++) {
            let currentChar = arrayOfText[index];
            if (currentChar === " ") {
                counter++;
            }
        }
        console.log(counter);
    }
}
