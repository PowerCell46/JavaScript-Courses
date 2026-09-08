function tickets(arrayOfStrings, singleString) {
    class TicketsClass {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = Number(price),
                this.status = status
        }
    }
    let arrayOfObjects = []

    for (const input of arrayOfStrings) {
        let currentClassInstance = new TicketsClass(...input.split("|"));
        arrayOfObjects.push(currentClassInstance);
    }


    switch (singleString) {
        case "destination":
            arrayOfObjects.sort((a, b) => (a.destination).localeCompare(b.destination));
            break;
        case "price":
            function comparePrices(a, b) {
                return a.price - b.price;
            }
            arrayOfObjects.sort(comparePrices);
            break;
        case "status":
            arrayOfObjects.sort((a, b) => (a.status).localeCompare(b.status));
            break;
    }

    return arrayOfObjects;
}
