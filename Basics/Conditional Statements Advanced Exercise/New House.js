function newHouse(input) {

let typeOfFlowers = input[0];
let numberOfFlorwers = Number(input[1]);
let budget = Number(input[2]);
let finalSum = 0;
let discount = 0;
let expensivness = 0;
let leftSum = 0;
let neededMoney = 0;

let rosePrice = 5;
let daliaPrice = 3.80;
let lalePrice = 2.80;
let narcisPrice = 3;
let gladiolaPrice = 2.50;

if(typeOfFlowers === "Roses") {
    finalSum = numberOfFlorwers * rosePrice;
} else if(typeOfFlowers === "Dahlias") {
    finalSum = numberOfFlorwers * daliaPrice;
} else if(typeOfFlowers === "Tulips") {
    finalSum = numberOfFlorwers * lalePrice;
} else if(typeOfFlowers === "Narcissus") {
    finalSum = numberOfFlorwers * narcisPrice;
} else if(typeOfFlowers === "Gladiolus") {
    finalSum = numberOfFlorwers * gladiolaPrice;
}

switch(typeOfFlowers) {
    case "Roses":
        if(numberOfFlorwers > 80) {
            discount = (finalSum/100) * 10;
        } break;
    case "Dahlias":
        if(numberOfFlorwers > 90) {
            discount = (finalSum/100) * 15;
        } break;
    case "Tulips":
        if(numberOfFlorwers > 80) {
            discount = (finalSum/100) * 15;
        } break;
    case "Narcissus":
        if(numberOfFlorwers < 120) {
            expensivness = (finalSum/100) * 15;
        } break;
    case "Gladiolus":
        if(numberOfFlorwers <80) {
            expensivness = (finalSum/100) * 20;
        } break;
    default: console.log("Error!");
}   
let finalFinalSum = finalSum - discount + expensivness;

if(finalFinalSum <= budget) {
    leftSum = budget - finalFinalSum; 
    console.log("Hey, you have a great garden with " + numberOfFlorwers + " " + typeOfFlowers + " and " + leftSum.toFixed(2) + " leva left.")
} else if(finalFinalSum > budget) {
    neededMoney = finalFinalSum - budget;
    console.log("Not enough money, you need " + neededMoney.toFixed(2) + " leva more.")

}
}
