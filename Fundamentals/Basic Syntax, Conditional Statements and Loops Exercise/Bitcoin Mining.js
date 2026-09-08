function bitcoinMining(input) {
    let index = 0;
    let gramsForADay = Number(input[index]);

    let bitcoinPrice = 11949.16;
    let gramOfGoldPrice = 67.51;

    let currentDay = 0;
    let moneyForTheDay = 0;
    let totalmoney = 0;
    let boughtBitcoins = 0;
    let dayOfTheFirstPurchase = 0;

    while (index < input.length) {
        currentDay++;
        moneyForTheDay = gramsForADay * gramOfGoldPrice;

        if (currentDay % 3 === 0) {
            moneyForTheDay -= ((moneyForTheDay / 100) * 30);
        }

        totalmoney += moneyForTheDay;

        if (totalmoney >= bitcoinPrice) {
            boughtBitcoins++;
            totalmoney -= bitcoinPrice;
            if (boughtBitcoins === 1) {
            dayOfTheFirstPurchase = currentDay;
            }
        }

        index++;
        gramsForADay = Number(input[index]);
    }

    if (totalmoney > bitcoinPrice) {
        while (totalmoney >= bitcoinPrice) {
            totalmoney -= bitcoinPrice;
            boughtBitcoins++;
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchase}`);
    }
    console.log(`Left money: ${totalmoney.toFixed(2)} lv.`);
}
