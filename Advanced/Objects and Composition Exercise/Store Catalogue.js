function storeCatalogue(array) {
    let storeObj = {};

    for (let input of array) {
        input = input.split(" : ");
        storeObj[input[0]] = Number(input[1]);
    }
    let arrayOfNames = Object.keys(storeObj);
    arrayOfNames = arrayOfNames.sort((a, b) => a.localeCompare(b));
    let previousFirstLetter = arrayOfNames[0][0];
    console.log(previousFirstLetter);
    for (let name of arrayOfNames) {
        let currentFirstLetter = name[0];
        if (currentFirstLetter === previousFirstLetter) {
            console.log(`  ${name}: ${storeObj[name]}`);
        } else {
            console.log(currentFirstLetter);
            console.log(`  ${name}: ${storeObj[name]}`);
            previousFirstLetter = currentFirstLetter;
        }
    }
}
