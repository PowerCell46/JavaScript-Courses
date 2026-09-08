function heroicInventory(arrayOfHeroes) {
    let resultArray = [];

    for (let input of arrayOfHeroes) {
        let currentObj = {};
        input = input.split(" / ");
        currentObj["name"] = input[0];
        currentObj["level"] = Number(input[1]);
        if (input[2] !== undefined) {
            currentObj["items"] = input[2].split(", ");
        } else {
            currentObj["items"] = []
        }
        resultArray.push(currentObj);
    }
    resultArray = JSON.stringify(resultArray);
    return resultArray;
}
