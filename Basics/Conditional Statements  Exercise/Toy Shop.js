function toyshop(input) {
let puzzlePrice = 2.60;
let dollPrice = 3;
let bearPrice = 4.10;
let minionPrice = 8.20; 
let truckPrice = 2;

let priceforExcursion = Number(input[0]);
let puzzles = Number(input[1]);
let dolls = Number(input[2]);
let bears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);
let allToys = puzzles + dolls + bears + minions + trucks;
let sum = (puzzles * puzzlePrice) + (dolls * dollPrice) + (bears * bearPrice) + (minions * minionPrice) + (trucks * truckPrice);
if(allToys >= 50) {
    sum = sum - ((sum/ 100) * 25);
} else {
    sum = sum;
}

let wonMoney = sum - ((sum / 100) * 10);

if(wonMoney >= priceforExcursion) {
    let moneyLeft = (wonMoney - priceforExcursion).toFixed(2);
    console.log("Yes! " + moneyLeft + " lv left.");
} else{
    let neededMoney = (priceforExcursion - wonMoney).toFixed(2); 
    console.log("Not enough money! " + neededMoney + " lv needed.")
}
}
