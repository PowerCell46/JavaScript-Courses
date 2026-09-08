function printEveryNthElementFromAnArray(array, nthNumber) {
let counter = 0;
let resultArray = [array[0]];
for(let index = 1; index < array.length; index++) {
    let currentElement = array[index];
    counter++;
    if (counter === nthNumber) {
        resultArray.push(currentElement);
        counter = 0;
    }
}
return resultArray 
}
