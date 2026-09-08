function makeADictionary(array) {

    let arrayOfDictionaries = [];
    let arrayOfTerms = [];

    for (let index = 0; index < array.length; index++) {
        let currentDictionaryEntry = JSON.parse(array[index]);
        let currentKey = Object.keys(currentDictionaryEntry);
        // console.log(currentKey[0]);
        if (!arrayOfTerms.includes(currentKey[0])) {
            arrayOfTerms.push(currentKey[0]);
            arrayOfDictionaries.push(currentDictionaryEntry);
        } else if (arrayOfTerms.includes(currentKey[0])) {
            let searchedIndex = arrayOfTerms.indexOf(currentKey[0]);
            arrayOfDictionaries.splice(searchedIndex, 1);
            arrayOfTerms.splice(searchedIndex, 1);
            arrayOfTerms.push(currentKey[0]);
            arrayOfDictionaries.push(currentDictionaryEntry);
        }
    }

    let copyArrayTerms = arrayOfTerms.slice();
    copyArrayTerms.sort((a, b) => a.localeCompare(b));
    // console.log(arrayOfTerms);
    // console.log(copyArrayTerms);

    let printArray = [];

    while (copyArrayTerms.length > 0) {
        let currentElement = copyArrayTerms.shift();
        let searchedIndex = arrayOfTerms.indexOf(currentElement);
        arrayOfTerms.splice(searchedIndex, 1);
        let currentObj = arrayOfDictionaries.splice(searchedIndex, 1);
        printArray.push(currentObj);

    }
    for (let index = 0; index < printArray.length; index++) {
        let currentDictionary = printArray[index]
        // console.log(currentDictionary[0]);
        for (let key of Object.keys(currentDictionary[0])) {
            console.log(`Term: ${key} => Definition: ${currentDictionary[0][key]}`);
        }
    }

}
