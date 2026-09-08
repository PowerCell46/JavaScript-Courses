function messageDecrypter(array) {
    let pattern = /^([\$|\%]{1})([A-Z]{1}[a-z]{2,})\1\: (\[[0-9]+\][\|]){3}$/g

    for (let index = 1; index < array.length; index++) {
        let currentLine = array[index];
        const foundResult = currentLine.match(pattern);
        if (foundResult == null) {
            console.log("Valid message not found!");
        } else {
            let word = "";
            let workingString = foundResult[0];
            for (let x = 1; x < workingString.length; x++) {
                if (workingString[x] != "$" && workingString[x] != "%") {
                    word += workingString[x];
                } else {
                    break;
                }
            }
            let searchIndex = workingString.indexOf("[");
            let currentNumber = "";
            let weAreIn = true;
            let currentFinalResult = "";

            for (let xedni = searchIndex + 1; xedni < workingString.length; xedni++) {
                let currentDigit = workingString[xedni];
                if (currentDigit != "]" && weAreIn) {
                    currentNumber += currentDigit;
                } else if (currentDigit == "]" && weAreIn) {
                    currentNumber = Number(currentNumber);
                    currentFinalResult += String.fromCharCode(currentNumber);
                    currentNumber = "";
                    weAreIn = false;
                } else if (weAreIn == false && currentDigit == "[") {
                    weAreIn = true
                }
            }
            console.log(`${word}: ${currentFinalResult}`);
        }
    }
}
