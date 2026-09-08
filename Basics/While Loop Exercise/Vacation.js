function vacation(input) {
    let index = 0;
    let moneyForTheVacation = Number(input[index]);
    index++;
    let totalSavedMoney = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let currentSum = Number(input[index]);
    let spendCounter = 0;
    let daysCounter = 0;

    while(totalSavedMoney < moneyForTheVacation && spendCounter < 5) {
        daysCounter++;

        if(action === "save") {
            totalSavedMoney += currentSum;
            spendCounter = 0;

        } else if(action === "spend") {
            totalSavedMoney -= currentSum;
            spendCounter++;
            if(currentSum > totalSavedMoney) {
                totalSavedMoney = 0;
            }
        }
        index++;
        action = input[index];
        index++;
        currentSum = Number(input[index]);
    }

    if(spendCounter >= 5) {
    console.log("You can't save the money.");
    console.log(daysCounter);
    }

    if(totalSavedMoney >= moneyForTheVacation) {
    console.log("You saved the money for " + daysCounter + " days.");
    }
}
