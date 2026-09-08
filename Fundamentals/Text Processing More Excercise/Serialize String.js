function serializeString(array) {

let myMap = new Map();

for(let index = 0; index < array[0].length; index++) {
    let currentDigit = array[0][index];
    if(!myMap.has(currentDigit)) {
        myMap.set(currentDigit, index);
    } else if(myMap.has(currentDigit)) {
        let previousOcurrences = myMap.get(currentDigit);
        let newOccurences = previousOcurrences + "/" + index;
        myMap.set(currentDigit, newOccurences);
    }
}
let arrayOfKeys = Array.from(myMap.keys());

let arrayOfValues = Array.from(myMap.values());

for(let x = 0; x < arrayOfKeys.length; x++) {
    console.log(`${arrayOfKeys[x]}:${arrayOfValues[x]}`);
}
}
