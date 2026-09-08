function coffeeLover(array) {

    let arrayOfCoffees = (array[0]).split(" ");

    let xedni = 1;
    for (let index = 0; index < Number(array[1]); index++) {
        xedni++;
        let currentInput = (array[xedni]).split(" ");
        let currentCommand = currentInput.shift();

        if (currentCommand === "Include") {
            arrayOfCoffees.push(currentInput[0]);

        } else if (currentCommand === "Remove") {
            let position = currentInput.shift();
            let numberOfRemoves = Number(currentInput.shift());
            if (numberOfRemoves < arrayOfCoffees.length) {

                if (position === "first") {
                    while (numberOfRemoves > 0) {
                        arrayOfCoffees.shift();
                        numberOfRemoves--;
                    }

                } else if (position === "last") {
                    while (numberOfRemoves > 0) {
                        arrayOfCoffees.pop();
                        numberOfRemoves--;
                    }

                }
            }

        } else if (currentCommand === "Prefer") {
            let coffeeIndex1 = Number(currentInput.shift());
            let coffeeIndex2 = Number(currentInput.shift());
            if (coffeeIndex1 >= 0 && coffeeIndex1 < arrayOfCoffees.length && coffeeIndex2 >= 0 && coffeeIndex2 < arrayOfCoffees.length) {

                if (coffeeIndex1 < coffeeIndex2) {
                    let firstCoffee = arrayOfCoffees.splice(coffeeIndex1, 1);
                    let secondCoffee = arrayOfCoffees.splice((coffeeIndex2 - 1), 1);
                    arrayOfCoffees.splice(coffeeIndex1, 0, secondCoffee[0]);
                    arrayOfCoffees.splice(coffeeIndex2, 0, firstCoffee[0]);
                } else {
                    let firstCoffee = arrayOfCoffees.splice(coffeeIndex1, 1);
                    let secondCoffee = arrayOfCoffees.splice(coffeeIndex2, 1);
                    arrayOfCoffees.splice((coffeeIndex2), 0, firstCoffee[0]);
                    arrayOfCoffees.splice(coffeeIndex1, 0, secondCoffee[0]);

                }


            }


        } else if (currentCommand === "Reverse") {
            arrayOfCoffees = arrayOfCoffees.reverse();
        }

    }

    console.log("Coffees:");
    console.log(arrayOfCoffees.join(" "));
}
