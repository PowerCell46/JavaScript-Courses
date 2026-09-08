function travelTime(array) {

    let travelObj = {};

    for (let line of array) {
        let [country, town, cost] = line.split(" > ");
        if (!travelObj.hasOwnProperty(country)) {
            travelObj[country] = {

            }
            travelObj[country][town] = Number(cost);
        } else {
            let arrayOfTowns = Object.keys(travelObj[country]);
            if (arrayOfTowns.includes(town)) {
                let previousPrice = travelObj[country][town];
                if (previousPrice > Number(cost)) {
                    travelObj[country][town] = Number(cost);
                }
            } else {
                travelObj[country][town] = Number(cost);
            }
        }
    }
    let countryNamesArray = Object.keys(travelObj);
    countryNamesArray = countryNamesArray.sort((a, b) => a.localeCompare(b));

    for (let country of countryNamesArray) {
        let currentObj = travelObj[country];
        let currentObjPricesArray = Object.values(currentObj);
        let currentObjTownsArray = Object.keys(currentObj);
        currentObjPricesArray = currentObjPricesArray.sort((a, b) => a - b);
        let printString = `${country} -> `
        for (let price of currentObjPricesArray) {
            for (let town of currentObjTownsArray) {
                let currentPrice = currentObj[town];
                if (price === currentPrice) {
                    printString += town + " -> " + currentPrice + " "
                }
            }
        }
        console.log(printString);
    }
}
