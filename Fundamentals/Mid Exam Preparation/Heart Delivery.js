function heartDelivery(array) {

    let arrayOfInteger = (array[0]).split("@");
    let arrayOfIntegers = arrayOfInteger.map(x => Number(x));

    let index = 1
    let current_input = (array[index]).split(" ");
    let current_index = 0;

    while (current_input[0] !== "Love!") {
        current_index += Number(current_input[1]);
        if (current_index >= arrayOfIntegers.length) {
            current_index = 0;
        }

        if (arrayOfIntegers[current_index] <= 0) {
            console.log(`Place ${current_index} already had Valentine's day.`);
        } else {
            arrayOfIntegers[current_index] -= 2;
            if (arrayOfIntegers[current_index] <= 0) {
                console.log(`Place ${current_index} has Valentine's day.`);
            }
        }
        index++;
        current_input = (array[index]).split(" ");
    }

    console.log(`Cupid's last position was ${current_index}.`)


    unsatisfied_houses = 0;
    for (let xedni = 0; xedni < Number(arrayOfIntegers.length); xedni++) {
        current_house = Number(arrayOfIntegers[xedni]);
        if (current_house !== 0) {
            unsatisfied_houses += 1;
        }
    }

    if (unsatisfied_houses > 0) {
        console.log(`Cupid has failed ${unsatisfied_houses} places.`)
    } else {
        console.log(`Mission was successful.`)
    }

}
