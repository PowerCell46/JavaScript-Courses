function sortingNumbers(array) {
let finalArray = [];
array = array.sort((a,b) => a - b);
while (array.length > 0) {
    finalArray.push(array.shift());
    if(array.length === 0) {
        break;
    }
    finalArray.push(array.pop());
}
return finalArray;
}
