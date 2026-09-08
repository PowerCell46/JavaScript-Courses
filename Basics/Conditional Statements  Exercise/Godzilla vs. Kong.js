function movieMath(input) {
    let budget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let priceOfTheClothesOfOneExtra = Number(input[2]);
    let priceOfTheClothesOfAllExtras = numberOfExtras * priceOfTheClothesOfOneExtra;
    let decore = budget / 10;

    if(numberOfExtras > 150) {
        priceOfTheClothesOfAllExtras = priceOfTheClothesOfAllExtras - (priceOfTheClothesOfAllExtras/10);
    } else {
        priceOfTheClothesOfAllExtras = priceOfTheClothesOfAllExtras;
    }

    if((decore + priceOfTheClothesOfAllExtras) > budget ) {
        let neededMoney = (decore + priceOfTheClothesOfAllExtras) - budget;
        console.log("Not enough money!");
        console.log("Wingard needs " + neededMoney.toFixed(2) + " leva more.")
    } else {
        let leftMoney = budget - (decore + priceOfTheClothesOfAllExtras);
        console.log("Action!");
        console.log("Wingard starts filming with " + leftMoney.toFixed(2) + " leva left.")
    }
}
