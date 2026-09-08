function rotateArray(array, number) {
while (number > 0) {
    number--;
    let currentElement = array.pop();
    array.unshift(currentElement);
}
return array.join(" ")
}
