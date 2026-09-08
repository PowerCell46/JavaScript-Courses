function sequences(arrayOfArrays) {

    let keeperArray = [];
    let finalKeeperArray = [];

    for (let index = 0; index < arrayOfArrays.length; index++) {
        let currentArray = arrayOfArrays[index];
        let keeper = currentArray.split("");
        keeper.shift();
        keeper.pop();
        keeper = keeper.join("");
        currentArray = keeper.split(", ");
        currentArray = currentArray.map(a => Number(a));
        currentArray.sort((a, b) => b - a);
        let stringArray = currentArray.join(", ");
        if (!keeperArray.includes(stringArray)) {
            keeperArray.push(stringArray);
        }

    }


    for (let index = 0; index < keeperArray.length; index++) {
        let currentArray = keeperArray[index].split(", ");
        currentArray = currentArray.map(a => Number(a));
        finalKeeperArray.push(currentArray);
    }

    let arrayOfLengths = []
    for (let xedni = 0; xedni < finalKeeperArray.length; xedni++) {
        let currentLength = finalKeeperArray[xedni].length;
        arrayOfLengths.push(currentLength);
    }

    while (arrayOfLengths.length > 0) {
        let smallestLength = Math.min(...arrayOfLengths);
        let smallestLengthIndex = arrayOfLengths.indexOf(smallestLength);
        console.log(`[${finalKeeperArray[smallestLengthIndex].join(", ")}]`);
        finalKeeperArray.splice(smallestLengthIndex, 1);
        arrayOfLengths.splice(smallestLengthIndex, 1);

    }
}
