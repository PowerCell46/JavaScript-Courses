function phoneBook(array) {

    let arrayOfObj = [];
    let arrayOfNames = [];

    for (let index = 0; index < array.length; index++) {
        let currentInput = (array[index]).split(" ");
        let currentObj = {
            name: currentInput[0],
            number: currentInput[1],
        }
        if (arrayOfNames.includes(currentInput[0])) {
            let searchedIndex = arrayOfNames.indexOf(currentInput[0]);
            arrayOfObj.splice(searchedIndex, 1, currentObj);
            arrayOfNames.splice(searchedIndex, 1, currentInput[0]);
        } else {
            arrayOfObj.push(currentObj);
            arrayOfNames.push(currentInput[0]);
        }

    }

    for (let index = 0; index < arrayOfObj.length; index++) {
        let currentObj = arrayOfObj[index];
        console.log(currentObj.name + " -> " + currentObj.number);
    }
}
