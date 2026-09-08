function garage(array) {

    let garageObj = {}

    for (let index = 0; index < array.length; index++) {
        let [numberOfTheGarage, value] = array[index].split(" - ");
        numberOfTheGarage = Number(numberOfTheGarage);
        value = value.split(": ");
        value = value.join(" - ");
        if (garageObj.hasOwnProperty(numberOfTheGarage)) {
            garageObj[numberOfTheGarage][value] = 0;
        } else {
            garageObj[numberOfTheGarage] = {}
            garageObj[numberOfTheGarage][value] = 0;
        }
    }

    let orderedGaragesArray = Object.keys(garageObj).map(a => Number(a));
    orderedGaragesArray.sort((a, b) => a - b);

    for (let numberOfTheGarage of orderedGaragesArray) {
        console.log(`Garage № ${numberOfTheGarage}`);
        let currentGarageObj = garageObj[numberOfTheGarage];
        let currentGarageObjKeys = Object.keys(currentGarageObj);
        for (let key of currentGarageObjKeys) {
            console.log(`--- ${key} `);
        }
    }
}
