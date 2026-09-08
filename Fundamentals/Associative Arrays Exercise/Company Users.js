function companyUsers(array) {
    let mapOfCompanyNames = new Map();

    for (let index = 0; index < array.length; index++) {
        let currentInput = array[index].split(" -> ");
        let currentCompanyName = currentInput.shift();
        let currentPersonId = currentInput.shift();

        if (mapOfCompanyNames.has(currentCompanyName)) {
            let previousSet = mapOfCompanyNames.get(currentCompanyName);
            previousSet.add(currentPersonId);
            mapOfCompanyNames.set(currentCompanyName, previousSet);
        } else {
            let currentSet = new Set()
            currentSet.add(currentPersonId)
            mapOfCompanyNames.set(currentCompanyName, currentSet);

        }

    }
    let arrayOfCompanyNames = Array.from(mapOfCompanyNames.keys());
    let sorted = arrayOfCompanyNames.sort((a, b) => a.localeCompare(b));

    for (let key of sorted) {
        console.log(key);
        let currentSet = mapOfCompanyNames.get(key);
        for (let item of currentSet) {
            console.log(`-- ${item}`);
        }
    }
}
