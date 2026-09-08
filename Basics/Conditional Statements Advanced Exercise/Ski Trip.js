function skiVacation(input) {

let stayingDays = Number(input[0]);
let typeOfRoom = input[1];
let review = input[2];
let priceForTheRoom = 0;
let numberOfDays = stayingDays - 1;
let discount = 0;
let sum = 0;
let almostFinalSum = 0;
let finalSum = 0;

switch(typeOfRoom) {
case "room for one person":
priceForTheRoom = 18;
sum = numberOfDays * priceForTheRoom; break;
case "apartment":
priceForTheRoom = 25;
sum = numberOfDays * priceForTheRoom; break;
case "president apartment":
priceForTheRoom = 35;
sum = numberOfDays * priceForTheRoom; break;
default: console.log("Error!");
}

if(numberOfDays < 10) {
    switch(typeOfRoom) {
    case "room for one person":
    discount = 0; break;
    case "apartment":
    discount = (sum/100) * 30; break;
    case "president apartment":
    discount = (sum/10); break;
    default: console.log("Error!")
    }
} else if(numberOfDays >= 10 && numberOfDays <= 15) {
    switch(typeOfRoom) {
        case "room for one person":
        discount = 0; break;
        case "apartment":
        discount = (sum/100) * 35; break;
        case "president apartment":
        discount = (sum/100) * 15; break;
        default: console.log("Error!")
        }
} else if(numberOfDays > 15) {
    switch(typeOfRoom) {
        case "room for one person":
        discount = 0; break;
        case "apartment":
        discount = (sum/100) * 50; break;
        case "president apartment":
        discount = (sum/100) * 20; break;
        default: console.log("Error!")
        }
}
almostFinalSum = sum - discount;

switch(review) {
case "positive":
finalSum = almostFinalSum + ((almostFinalSum/100) * 25); break;
case "negative":
finalSum = almostFinalSum - ((almostFinalSum/100) * 10); break;
default: console.log("Error!"); break;
}

console.log(finalSum.toFixed(2));
}
