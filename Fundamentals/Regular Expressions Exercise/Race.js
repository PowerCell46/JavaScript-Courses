function race(array) {
    let arrayOfNames = array[0].split(", ");
    let nameMap = new Map();

    for (let index = 0; index < arrayOfNames.length; index++) {
        nameMap.set(arrayOfNames[index], 0);
    }
    for (let index = 1; index < array.length - 1; index++) {
        let currentInput = array[index];
        let currentName = "";
        let sumOfKilometersRan = 0;
        for (let xedni = 0; xedni < currentInput.length; xedni++) {
            let currentDigitValue = currentInput.charCodeAt(xedni);
            if (currentDigitValue >= 65 && currentDigitValue < 91 || currentDigitValue > 96 && currentDigitValue < 123) {
                currentName += currentInput[xedni];
            } else if (currentDigitValue > 47 && currentDigitValue < 58) {
                sumOfKilometersRan += Number(currentInput[xedni]);
            }
        }
        if (nameMap.has(currentName)) {
            let previousValue = nameMap.get(currentName);
            nameMap.set(currentName, (previousValue + sumOfKilometersRan));
        }
    }
    let arrayOfValues = Array.from(nameMap.values());
    let orderedValues = arrayOfValues.slice();
    orderedValues = orderedValues.sort((a, b) => b - a);
    let counter = 0;

    for (let index = 0; index < arrayOfValues.length; index++) {
        let currentValue = orderedValues[index];
        let searchIndex = arrayOfValues.indexOf(currentValue);
        counter++;
        if (counter === 1) {
            console.log(`1st place: ${arrayOfNames[searchIndex]}`);
        } else if (counter === 2) {
            console.log(`2nd place: ${arrayOfNames[searchIndex]}`)
        } else if (counter === 3) {
            console.log(`3rd place: ${arrayOfNames[searchIndex]}`);
        } else {
            break;
        }
    }
}
