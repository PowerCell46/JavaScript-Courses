function catalogue(array) {

    let objArray = [];
    let arrayOfItems = [];


    for (let index = 0; index < array.length; index++) {
        let currentInput = (array[index]).split(" : ");

        let currentObj = {
            item: currentInput[0],
            price: Number(currentInput[1]),
            printFunc() {
                return `  ` + this.item + ": " + this.price
            }
        }
        objArray.push(currentObj);
        arrayOfItems.push(currentInput[0]);
    }

    let orderedItemsList = arrayOfItems.slice();
    orderedItemsList = orderedItemsList.sort((a, b) => a.localeCompare(b));
    let copyOfOrderedItemsList = orderedItemsList.slice();

    let orderedObjectList = [];

    while (objArray.length > 0) {
        let currentSearchedIndex = orderedItemsList.shift();
        currentSearchedIndex = arrayOfItems.indexOf(currentSearchedIndex);
        arrayOfItems.splice(currentSearchedIndex, 1);
        let currentObj = objArray.splice(currentSearchedIndex, 1);
        orderedObjectList.push(currentObj);
    }

    let youShouldBreak = false;

    while (copyOfOrderedItemsList.length > 0) {
        let currentObjPrint = orderedObjectList[0][0];
        let currentLetter = copyOfOrderedItemsList[0][0]
        console.log(currentLetter);
        console.log(currentObjPrint.printFunc());
        if (copyOfOrderedItemsList.length === 1) {
            break
        }

        while (currentLetter == copyOfOrderedItemsList[1][0]) {
            currentObjPrint = orderedObjectList[1][0];
            orderedObjectList.splice(1, 1);
            copyOfOrderedItemsList.splice(1, 1);
            console.log(currentObjPrint.printFunc());
            if (copyOfOrderedItemsList.length === 1) {
                youShouldBreak = true;
                break;
            }
        }
        if (youShouldBreak === true) {
            break;
        }
        orderedObjectList.splice(0, 1);
        copyOfOrderedItemsList.splice(0, 1);
    }
}
