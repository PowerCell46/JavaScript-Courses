function softUniReception(array) {
    let firstReceptionist = Number(array[0]);
    let secondReceptionist = Number(array[1]);
    let thirdReceptionist = Number(array[2]);
    let studentsCount = Number(array[3]);

    let numberOfHours = 0;
    let sumOfReceptionist = firstReceptionist + secondReceptionist + thirdReceptionist;

    while (studentsCount > 0) {
        numberOfHours++;
        if (numberOfHours % 4 === 0) {
            continue;
        }
        studentsCount -= sumOfReceptionist;
        if (studentsCount < 0) {
            studentsCount = 0;
        }
    }

    console.log(`Time needed: ${numberOfHours}h.`);
}
