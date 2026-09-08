function thePianist(array) {
    let numberOfPieces = Number(array[0]);
    let xedni = numberOfPieces;
    let index = 0;
    let currentLine = array[index];
    let storingObj = {};

    while (numberOfPieces > 0) {
        numberOfPieces--;
        index++;
        currentLine = array[index].split("|");
        let currentPiece = currentLine.shift();
        let currentComposer = currentLine.shift();
        let currentKey = currentLine.shift();
        if (!storingObj.hasOwnProperty(currentPiece)) {
            storingObj[currentPiece] = {};
        }
        storingObj[currentPiece][currentComposer] = currentKey;
    }

    for (let index = xedni + 1; index < array.length - 1; index++) {
        let currentLine = array[index].split("|");
        let currentCommand = currentLine.shift();

        if (currentCommand === "Add") {
            let currentPiece = currentLine.shift();
            let currentComposer = currentLine.shift();
            let currentKey = currentLine.shift();

            if (!storingObj.hasOwnProperty(currentPiece)) {
                storingObj[currentPiece] = {
                    [currentComposer]: currentKey,
                };
                console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);

            } else {
                console.log(`${currentPiece} is already in the collection!`);
            }

        } else if (currentCommand == "Remove") {
            let currentPiece = currentLine.shift();

            if (storingObj.hasOwnProperty(currentPiece)) {
                delete storingObj[currentPiece];
                console.log(`Successfully removed ${currentPiece}!`);

            } else {
                console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
            }

        } else if (currentCommand == "ChangeKey") {
            let currentPiece = currentLine.shift();
            let newKey = currentLine.shift();

            if (storingObj.hasOwnProperty(currentPiece)) {
                let previousOutput = (storingObj[currentPiece]);
                let composer = Object.keys(previousOutput);
                let finalChangeKey = {
                    [composer]: newKey,
                }
                storingObj[currentPiece] = finalChangeKey;
                console.log(`Changed the key of ${currentPiece} to ${newKey}!`);

            } else {
                console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
            }
        }
    }

    let keys = Object.keys(storingObj);
    
    for (let index = 0; index < keys.length; index++) {
        let currentPiece = keys[index];
        let currentObj = storingObj[currentPiece];
        let composer = Object.keys(currentObj)[0];
        let key  = currentObj[composer];
        console.log(`${currentPiece} -> Composer: ${composer}, Key: ${key}`)
    }
}
