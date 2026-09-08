function cleverLilly(input) {
    
    let age = Number(input[0]);
    let priceOfTheWashingMachine = Number(input[1]);
    let priceForOneToy = Number(input[2]);
    let money = 0;
    let numberofBirthdaysForToys = 0;
    let numberofBirthdaysForMoney = 0;
    let currentMoney = 10;

    for(let rotatingAge = 1; rotatingAge <= age; rotatingAge++) {
        if(rotatingAge % 2 === 0) {
    numberofBirthdaysForMoney++;
    money += currentMoney;
    currentMoney += 10;
    } else {
    numberofBirthdaysForToys++;
        }
    }
    let moneyFromMoney = money - (numberofBirthdaysForMoney * 1);
    let moneyFromToys = numberofBirthdaysForToys * priceForOneToy;

    let sumOfMoney = moneyFromMoney + moneyFromToys;
    
    if(sumOfMoney >= priceOfTheWashingMachine) {
        let leftMoney = sumOfMoney - priceOfTheWashingMachine;
        console.log("Yes! " + leftMoney.toFixed(2));
    } else if(priceOfTheWashingMachine > sumOfMoney) {
        let notEnoughMoney = priceOfTheWashingMachine - sumOfMoney;
        console.log("No! " + notEnoughMoney.toFixed(2));
    }
}
