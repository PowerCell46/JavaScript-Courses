function piccolo(array) {

    let parkingObj = {

    }

    for (let index = 0; index < array.length; index++) {
        let currentInput = array[index].split(", ");
        let currentCommand = currentInput.shift();
        let currentCarNumber = currentInput.shift();
        if (currentCommand === "IN") {
            parkingObj[currentCarNumber] = "IN";
        } else {
            delete parkingObj[currentCarNumber];
        }
    }
    let unsortedKeys = Object.keys(parkingObj);
    let sortedKeys = unsortedKeys.sort((a, b) => a.localeCompare(b));
    if (sortedKeys.length > 0) {
    console.log(unsortedKeys.join("\n"));
    } else {
        console.log("Parking Lot is Empty");
    } 
}
