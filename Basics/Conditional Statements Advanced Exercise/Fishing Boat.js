function fishingBoat(input) {

let budget = Number(input[0]);
let season = input[1]; 
let numberOfFishers = Number(input[2]);

let priceOfTheBoat = 0;
let discount = 0;
let secondDiscount = 0;
let leftmoney = 0;

if(season === "Spring") {
priceOfTheBoat = 3000;
} else if(season ==="Summer" || season ==="Autumn") {
priceOfTheBoat = 4200; 
} else if(season === "Winter") {
priceOfTheBoat = 2600;
}

if(numberOfFishers <= 6) {
discount = priceOfTheBoat/10;
} else if(numberOfFishers >= 7 && numberOfFishers <= 11) {
discount = (priceOfTheBoat/100) * 15;
} else if(numberOfFishers >=12) {
discount = (priceOfTheBoat/100) * 25;
} else {
    console.log("Некъде има грешка");
}

let finalSum = priceOfTheBoat - discount;
if(numberOfFishers % 2 === 0 && season !== "Autumn") {
secondDiscount = (finalSum/100) * 5;
}
let finalFinalSum = finalSum - secondDiscount;

if(finalFinalSum <= budget) {
leftmoney = budget - finalFinalSum;
console.log("Yes! You have " + leftmoney.toFixed(2) + " leva left."); 
} else if(finalFinalSum > budget) {
leftmoney = finalFinalSum - budget;
console.log("Not enough money! You need " + leftmoney.toFixed(2) + " leva.");
}
}
