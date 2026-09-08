function ladybugs(array) {
    let sizeOfTheField = array[0];
    let arrayOfLadybugsInitialIndexes = (array[1]).split(" ");

    let areaSpace = [];
    for (let index = 0; index < sizeOfTheField; index++) {
        areaSpace.push(0);
    }
    for (let index = 0; index < arrayOfLadybugsInitialIndexes.length; index++) {
        let currentLadyBugIndex = Number(arrayOfLadybugsInitialIndexes[index]);
        if (0 <= currentLadyBugIndex && currentLadyBugIndex < sizeOfTheField) {
            areaSpace.splice(currentLadyBugIndex, 1, 1);
        }
    }

    let index = 2;
    while (index < array.length) {
        let currentInput = array[index].split(" ");
        let currentLadyBugIndex = Number(currentInput.shift());

        if (areaSpace[currentLadyBugIndex] === 1) {
            areaSpace.splice(currentLadyBugIndex, 1, 0);
            let currentDirection = currentInput.shift();
            let flyLength = Number(currentInput.shift());
            let newPositionIndex = 0;
            if (currentDirection === "right") {
                newPositionIndex = currentLadyBugIndex + flyLength;
            } else if (currentDirection === "left") {
                newPositionIndex = currentLadyBugIndex - flyLength;
            }

            if (newPositionIndex >= 0 && newPositionIndex < sizeOfTheField) {
                while (areaSpace[newPositionIndex] === 1) {
                    if(currentDirection === "right") {
                        newPositionIndex += flyLength;
                    } else if (currentDirection === "left") {
                        newPositionIndex -= flyLength;
                    }
                }
                if (newPositionIndex >= 0 && newPositionIndex < sizeOfTheField) {
                    areaSpace.splice(newPositionIndex, 1, 1);
                }
            }
        }
        index++;
    }

    console.log(areaSpace.join(" "));
}
