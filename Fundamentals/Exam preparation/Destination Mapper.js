function destinationMapper(inputString) {
    let points = 0;
    let pattern = /([=|\/])([A-Z][A-Z|a-z]{2,})\1/g;
    let destinations = [];
    let foundedCorrectLocations = inputString.match(pattern);

    if (foundedCorrectLocations !== null) {
        let arrayFromTheDestinations = Array.from(foundedCorrectLocations.values());

        for (let currrentDest of arrayFromTheDestinations) {
            currrentDest = currrentDest.split("")
            currrentDest.pop();
            currrentDest.shift();
            currrentDest = currrentDest.join("");

            let currentInputPoints = currrentDest.length;
            destinations.push(currrentDest);

            points += currentInputPoints;
        }
        
        console.log(`Destinations: ${destinations.join(", ")}`);
        console.log(`Travel Points: ${points}`);

    } else {
        console.log("Destinations: ");
        console.log("Travel Points: 0");
    }
}
