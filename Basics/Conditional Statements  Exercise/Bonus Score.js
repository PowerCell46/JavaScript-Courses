function bonusPoints(input) {
let wholeNumber = Number(input[0]);
let bonusPoints = 0;
if (wholeNumber <= 100) {
bonusPoints = bonusPoints +5;
}
if(wholeNumber > 100) {
    if(wholeNumber <= 1000) {
        bonusPoints = bonusPoints + ((wholeNumber / 100) * 20);
    }
    if(wholeNumber > 1000) {
        bonusPoints = bonusPoints + ((wholeNumber / 100) * 10);
    }
}
let finalPoints = wholeNumber + bonusPoints;

if(wholeNumber % 2 === 0) {
    bonusPoints = bonusPoints + 1;
}
if(wholeNumber % 10 === 5) {
    bonusPoints = bonusPoints + 2;
}
let finalFinalPoints = wholeNumber + bonusPoints;
console.log(bonusPoints);
console.log(finalFinalPoints);
}   
