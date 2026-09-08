function rotateArray(array) {
    let numberOfRotations = Number(array.pop());


    while (numberOfRotations > 0) {
        let takenElement = array.pop();
        array.unshift(takenElement);
        numberOfRotations--;
    }
    console.log(array.join(" "));
}
