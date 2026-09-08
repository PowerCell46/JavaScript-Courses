function meetings(array) {

    let arrayOfObj = [];
    let arrayOfDays = [];

    for (let index = 0; index < array.length; index++) {
        let currentInput = (array[index]).split(" ");
        let currentDay = currentInput[0];
        if (!arrayOfDays.includes(currentInput[0])) {
            let currentObj = {
                [currentDay]: currentInput[1],
            }
            arrayOfDays.push(currentDay);
            arrayOfObj.push(currentObj);
            console.log(`Scheduled for ${currentDay}`);
        } else {
            console.log(`Conflict on ${currentDay}!`);
        }
    }

    for (let xedni = 0; xedni < arrayOfObj.length; xedni++) {
        let currentObj = arrayOfObj[xedni];
        for (let key of Object.keys(currentObj)) {
            console.log(`${key} -> ${currentObj[key]}`);
        }
    }

}
