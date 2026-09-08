function blackFlag(array) {
    let plunderDays = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);

    let currentDailyPlunder = 0;
    let collectedPlunder = 0;
    let counter = 0;

    while (plunderDays > 0) {
        counter++;
        if (counter % 3 === 0) {
            currentDailyPlunder = dailyPlunder + ((dailyPlunder / 100) * 50);
        } else {
            currentDailyPlunder = dailyPlunder;
        }
        collectedPlunder += currentDailyPlunder;

        if (counter % 5 === 0) {
            collectedPlunder = collectedPlunder - ((collectedPlunder / 100) * 30);
        }

        plunderDays--;
    }

    if (collectedPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained.`);
    } else if (collectedPlunder < expectedPlunder) {
        let percentage = expectedPlunder / 100;
        percentage = collectedPlunder / percentage;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
