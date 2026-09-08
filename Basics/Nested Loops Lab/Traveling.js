function journey(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minimumBudget = Number(input[index]);
    index++;
    let currentSum = Number(input[index]);
    let collectedMoney = 0;

    while(destination !== "End") {

        while(collectedMoney < minimumBudget) {
            collectedMoney += currentSum;
            if(collectedMoney >= minimumBudget) {
            continue;
            }
            index++;
            currentSum = Number(input[index]);
        }
        console.log("Going to " + destination + "!");
        collectedMoney = 0;
        index++;
        destination = input[index];
        if(destination === "End") {
            continue;
        }
        index++;
        minimumBudget = Number(input[index]);
        index++;
        currentSum = Number(input[index]);
    }
}
