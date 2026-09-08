function calorieObject(array) {
    let index = 0;
    let stockObject = {};

while (index < array.length) {
    let currentKey = array[index];
    index++;
    let currentValue = Number(array[index]);
    index++;
    stockObject[currentKey] = currentValue;
}
return stockObject
}
