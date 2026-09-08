function flightSchedule(arrayOfArrays) {
    let airport = {};

    for (let index = 0; index < arrayOfArrays.length; index++) {
        let currentArray = arrayOfArrays[index];
        if (index === 0) {
            for (let xedni = 0; xedni < currentArray.length; xedni++) {
                let array4e = currentArray[xedni].split(" ");
                let flightNumber = array4e.shift()
                let destination = array4e.join(" ");
                airport[flightNumber] = {};
                airport[flightNumber][destination] = "Unchanged";
            }
        } else if (index === 1) {
            for (let xedni = 0; xedni < currentArray.length; xedni++) {
                let [numberOfTheFlight, status] = currentArray[xedni].split(" ");
                if (airport.hasOwnProperty(numberOfTheFlight)) {
                    let something = airport[numberOfTheFlight];
                    let location = Object.keys(something)[0];
                    airport[numberOfTheFlight] = {}
                    airport[numberOfTheFlight][location] = status;
                    a = 5
                }
            }

        } else if (index === 2) {
            let searchedStatus = currentArray[0];
            let keys = Object.keys(airport);
            for (let x = 0; x < keys.length; x++) {
                let currentKey = keys[x];
                let currentSomething = airport[currentKey];
                let currentStatus = Object.values(currentSomething)[0];
                let currentLocation = Object.keys(currentSomething)[0];
                if (searchedStatus === "Ready to fly" && currentStatus === "Unchanged") {
                    console.log(`{ Destination: '${currentLocation}', Status: 'Ready to fly' }`);
                } else if (searchedStatus === currentStatus) {
                    console.log(`{ Destination: '${currentLocation}', Status: '${currentStatus}' }`);
                }

            }
        }
    }

}
