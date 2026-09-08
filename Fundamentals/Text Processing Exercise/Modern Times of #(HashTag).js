function modernTimes(string) {
    let arrayOfTheString = string.split(" ");
    for (let word of arrayOfTheString) {
        if (word[0] === "#" && word.length > 1) {
            let printIt = false;
            for (let xedni = 1; xedni < word.length; xedni++) {
                let currentDigit = word[xedni]
                let asciiValue = currentDigit.charCodeAt();
                if (asciiValue === 35 || asciiValue > 64 && asciiValue < 91 || asciiValue > 96 && asciiValue < 123) {
                    printIt = true;
                } else {
                    printIt = false;
                    break;
                }
            }
            if (printIt === true) {
                console.log(word.substring(1, word.length));
            }
        }
    }

}
