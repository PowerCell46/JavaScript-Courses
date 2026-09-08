function journey(input) {

let budget = Number(input[0]);
let season = input[1];

let spentMoney = 0;
let placeToStay = 0;
let hotelOrCumping = 0;

if(budget <= 100) { 
placeToStay = "Bulgaria";
    if(season === "summer") {
spentMoney = (budget/100) * 30;
} else if(season === "winter") {
spentMoney = (budget/100) * 70;
}
} else if(budget <= 1000) { 
placeToStay = "Balkans"
if(season === "summer") {
    spentMoney = (budget/100) * 40;
} else if(season === "winter") {
    spentMoney = (budget/100) * 80;
}
} else if(budget > 1000) { 
placeToStay = "Europe";
spentMoney = (budget/100) * 90;
}

if(season === "summer") {
hotelOrCumping = "Camp"; 
} else if(season === "winter") {
hotelOrCumping = "Hotel";
}

if(placeToStay === "Europe") {
hotelOrCumping = "Hotel";
}

console.log("Somewhere in " + placeToStay);
console.log(hotelOrCumping + " - " + spentMoney.toFixed(2));

}
