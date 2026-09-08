function replaceRepeatingChars(sequenceOfChars) {

    let newString = "";
    let index = 0;

    while (index < sequenceOfChars.length) {
        let currentChar = sequenceOfChars[index];
        index++;
        if (index === sequenceOfChars.length) {
            newString += currentChar;
            break;
        }
        let nextChar = sequenceOfChars[index];
        while (currentChar === nextChar) {
            index++;
            if (index === sequenceOfChars.length) {
                newString += currentChar;
                break;
            }
            nextChar = sequenceOfChars[index];
        }
        if(index != sequenceOfChars.length) {
            newString += currentChar;
        }
    }
    console.log(newString);
}
