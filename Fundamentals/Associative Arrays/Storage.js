function storage(array) {

    let myMap = new Map();

    for (let index = 0; index < array.length; index++) {
        let currentInput = array[index].split(" ");
        if (myMap.has(currentInput[0])) {
            let currentValue = Number(currentInput[1]) + myMap.get(currentInput[0]);
            myMap.set(currentInput[0], currentValue);
        } else {
            myMap.set(currentInput[0], Number(currentInput[1]));
        }
    }

    for (let [key, value] of myMap) {
        console.log(`${key} -> ${value}`)
    }

}
