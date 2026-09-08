function bookShelf(array) {

    let objOfShelves = {}
    let objOfPairs = {}

    for (let index = 0; index < array.length; index++) {
        let currentInput = array[index].split(" ");
        if (currentInput[1] === "->") {
            let currentShelfNumber = Number(currentInput[0]);
            let currentShelfGanre = currentInput[2];
            if (!objOfShelves.hasOwnProperty(currentShelfNumber)) {
                objOfShelves[currentShelfNumber] = {}
                objOfPairs[currentShelfNumber] = currentShelfGanre;
            }
        } else {
            currentInput = currentInput.join(" ");
            currentInput = currentInput.split(": ");
            let currentBookTitle = currentInput[0].split("");
            currentBookTitle = currentBookTitle.join("");
            currentInput = currentInput[1].split(", ");
            let currentAutor = currentInput[0];
            let currentGanre = currentInput[1];
            let arrayOfGanres = Object.values(objOfPairs);
            if (arrayOfGanres.includes(currentGanre)) {
                let searchedIndex = arrayOfGanres.indexOf(currentGanre);
                let currentShelfNumber = Object.keys(objOfPairs)[searchedIndex];
                objOfShelves[currentShelfNumber][currentBookTitle] = currentAutor;
                a = 6
            }
        }
    }

    let shelvesToBooksRatio = {}

    let arrayOfGanres = Object.keys(objOfShelves);

    for (let ganre of arrayOfGanres) {
        let currentArrayOfBooksLength = Object.values(objOfShelves[ganre]).length;
        shelvesToBooksRatio[objOfPairs[ganre]] = currentArrayOfBooksLength;
    }

    let orderedNumberOfBooks = Object.values(shelvesToBooksRatio).sort((a, b) => b - a);
    for (let numberOfBooks of orderedNumberOfBooks) {
        for (let shelve of Object.keys(shelvesToBooksRatio)) {
            if (numberOfBooks === shelvesToBooksRatio[shelve]) {
                let searchedIndex = Object.values(objOfPairs).indexOf(shelve);
                let indexOfTheCurrentShelf = Object.keys(objOfPairs)[searchedIndex];
                console.log(`${indexOfTheCurrentShelf} ${shelve}: ${numberOfBooks}`);
                delete shelvesToBooksRatio[shelve];
                let arrayOfCurrentShelfBooksOrdered = Object.keys(objOfShelves[indexOfTheCurrentShelf]).sort((a,b) => a.localeCompare(b));
                for (let book of arrayOfCurrentShelfBooksOrdered) {
                    console.log(`--> ${book}: ${objOfShelves[indexOfTheCurrentShelf][book]}`);
                }
            }
        }
    }
}
