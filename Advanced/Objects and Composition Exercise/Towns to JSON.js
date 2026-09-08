function townsToJSON(array) {
    let finalTownsArray = [];

    for (let index = 1; index < array.length; index++) {
        let currentTownObj = {}
        let currentInput = array[index].split("|");
        currentTownObj["Town"] = currentInput[1].trim();
        currentTownObj["Latitude"] = Number(Number(currentInput[2].trim()).toFixed(2));
        currentTownObj["Longitude"] = Number(Number(currentInput[3].trim()).toFixed(2));
        finalTownsArray.push((currentTownObj));
    }
    return JSON.stringify(finalTownsArray);
}
