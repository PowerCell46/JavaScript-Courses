function bunnyKill(arrayOfArrays) {

    let arrayOfArraysFinal = [];
    let bombCoordinates = (arrayOfArrays[arrayOfArrays.length - 1]).split(" ");
    for (let index = 0; index < arrayOfArrays.length - 1; index++) {
        let currentArray = (arrayOfArrays[index]).split(" ");
        arrayOfArraysFinal.push(currentArray);
    }

    let dealtDamage = 0;
    let numberOfKills = 0;

    for (let i = 0; i < bombCoordinates.length; i++) {
        let currentCoordinates = (bombCoordinates[i]).split(",");
        let currentElement = Number(currentCoordinates.pop());
        let currentArray = Number(currentCoordinates.pop());
        let currentArrayFinal = arrayOfArraysFinal[currentArray];
        arrayOfArraysFinal.splice(currentArray, 1);
        let currentElementFinal = Number(currentArrayFinal[currentElement]);
        if (currentElementFinal > 0) {
            numberOfKills++;
            dealtDamage += currentElementFinal;
        }
        currentArrayFinal.splice(currentElement, 1, 0);
        if (currentElementFinal < 0) {
            currentElementFinal = 0;
        }
        
        if (currentElement - 1 >= 0) {
            let previousElement = Number(currentArrayFinal[currentElement - 1]);
            previousElement -= currentElementFinal;
            currentArrayFinal.splice((currentElement - 1), 1, previousElement);
        }
        
        if (currentElement + 1 < currentArrayFinal.length) {
            let nextElement = Number(currentArrayFinal[currentElement + 1]);
            nextElement -= currentElementFinal;
            currentArrayFinal.splice((currentElement + 1), 1, nextElement);
        }

        // console.log(currentArrayFinal);
        arrayOfArraysFinal.splice(currentArray, 0, currentArrayFinal);

        if (currentArray - 1 >= 0) {
            let previousArray = currentArray - 1;
            let previousArrayFinal = arrayOfArraysFinal[previousArray];
            arrayOfArraysFinal.splice(previousArray, 1);
            let previousArrayElement = Number(previousArrayFinal[currentElement]);
            previousArrayElement -= currentElementFinal;
            previousArrayFinal.splice(currentElement, 1, previousArrayElement);

            if (currentElement - 1 >= 0) {
                let previousArrayPreviousElement = Number(previousArrayFinal[currentElement - 1]);
                previousArrayPreviousElement -= currentElementFinal;
                previousArrayFinal.splice((currentElement - 1), 1, previousArrayPreviousElement);
            }

            if (currentElement + 1 < currentArrayFinal.length) {
                let previousArrayNextElement = Number(previousArrayFinal[currentElement + 1]);
                previousArrayNextElement -= currentElementFinal;
                previousArrayFinal.splice((currentElement + 1), 1, previousArrayNextElement);
            }
            // console.log(previousArrayFinal);
            arrayOfArraysFinal.splice(previousArray, 0, previousArrayFinal);
        }

        if (currentArray + 1 < arrayOfArraysFinal.length) {
            let nextArray = currentArray + 1;
            let nextArrayFinal = arrayOfArraysFinal[nextArray];
            arrayOfArraysFinal.splice(nextArray, 1);
            let nextArrayElement = Number(nextArrayFinal[currentElement]);
            nextArrayElement -= currentElementFinal;
            nextArrayFinal.splice(currentElement, 1, nextArrayElement);

            if (currentElement - 1 >= 0) {
                let nextArrayPreviousElement = Number(nextArrayFinal[currentElement - 1]);
                nextArrayPreviousElement -= currentElementFinal;
                nextArrayFinal.splice((currentElement - 1), 1, nextArrayPreviousElement);
            }

            if (currentElement + 1 < currentArrayFinal.length) {
                let nextArrayNextElement = Number(nextArrayFinal[currentElement + 1]);
                nextArrayNextElement -= currentElementFinal;
                nextArrayFinal.splice((currentElement + 1), 1, nextArrayNextElement);
            }
            // console.log(nextArrayFinal);
            arrayOfArraysFinal.splice(nextArray, 0, nextArrayFinal);
        }

        //    for (let x = 0; x < arrayOfArraysFinal.length; x++) {
        //     let currentArrayPrint = arrayOfArraysFinal[x];
        //     console.log(currentArrayPrint.join(" "))
        //    }
    }

    for (let xedni = 0; xedni < arrayOfArraysFinal.length; xedni++) {
        let currentArrayPrint = arrayOfArraysFinal[xedni];
        for (let x = 0; x < currentArrayPrint.length; x++) {
            currentNumber = Number(currentArrayPrint[x]);
            if (currentNumber > 0) {
                dealtDamage += currentNumber;
                numberOfKills++;
            }
        }
    }

    console.log(dealtDamage);
    console.log(numberOfKills);
}
