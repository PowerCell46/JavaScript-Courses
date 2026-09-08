function theLift(array) {
    let waitingPeople = Number(array[0]);
    let wagonsArray = (array[1]).split(" ");
    let wagonsArrayFinal = [];
    let thePeopleHaveFinished = false;

    for (let index = 0; index < Number(wagonsArray.length); index++) {
        let currentWagon = Number(wagonsArray[index]);
        while (currentWagon < 4 && thePeopleHaveFinished === false) {
            waitingPeople--;
            if (waitingPeople < 0) {
                thePeopleHaveFinished = true;
                continue;

            }
            currentWagon++;

        }
        wagonsArrayFinal.push(currentWagon);

    }

    if (waitingPeople === 0 && wagonsArrayFinal.includes(0) || wagonsArrayFinal.includes(1) || wagonsArrayFinal.includes(2) || wagonsArrayFinal.includes(3)) {
        console.log(`The lift has empty spots!`);
        console.log(wagonsArrayFinal.join(" "));
    } else if (waitingPeople > 0 && !wagonsArrayFinal.includes(0) && !wagonsArrayFinal.includes(1) && !wagonsArrayFinal.includes(2) && !wagonsArrayFinal.includes(3)) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(wagonsArrayFinal.join(" "));
    } else if (waitingPeople === 0 && !wagonsArrayFinal.includes(0) && !wagonsArrayFinal.includes(1) && !wagonsArrayFinal.includes(2) && !wagonsArrayFinal.includes(3)) {
        console.log(wagonsArrayFinal.join(" "));
    }
}
