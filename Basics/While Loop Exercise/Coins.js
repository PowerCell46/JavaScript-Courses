function pennies(input) {
    let returnedMoney = Number(input[0]);
    let returnedMoneyIncoins = Math.floor(returnedMoney * 100);
    let coins = 0;

while(returnedMoneyIncoins > 0) {
    coins++;
    if(returnedMoneyIncoins >= 200) {
        returnedMoneyIncoins = returnedMoneyIncoins - 200;
    } else if(returnedMoneyIncoins >= 100) {
        returnedMoneyIncoins = (returnedMoneyIncoins - 100);
    } else if(returnedMoneyIncoins >= 50) {
        returnedMoneyIncoins = returnedMoneyIncoins - 50;
    } else if(returnedMoneyIncoins >= 20) {
        returnedMoneyIncoins = returnedMoneyIncoins - 20;
    } else if(returnedMoneyIncoins >= 10) {
        returnedMoneyIncoins = returnedMoneyIncoins - 10;
    } else if(returnedMoneyIncoins >= 5) {
        returnedMoneyIncoins = returnedMoneyIncoins - 5;
    } else if(returnedMoneyIncoins >= 2) {
        returnedMoneyIncoins = returnedMoneyIncoins - 2;
    } else if(returnedMoneyIncoins >= 1) {
        returnedMoneyIncoins = returnedMoneyIncoins - 1;
    }
}
console.log(coins);
}
