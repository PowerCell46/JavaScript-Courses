function lunchbreak(input) {
let seriesName = input[0];
let lenghtOfTheEpisode = Number(input[1]);
let lenghtOfTheBreak = Number(input[2]);

let timeForLunch = Number(lenghtOfTheBreak / 8);
let chillTime = Number(lenghtOfTheBreak / 4);
let remainingTime = lenghtOfTheBreak - (timeForLunch + chillTime);

if(remainingTime >= lenghtOfTheEpisode) {
    let finalRemainingTime = Math.ceil(remainingTime - lenghtOfTheEpisode);
    console.log(" You have enough time to watch " + seriesName + " and left with " + finalRemainingTime + " minutes free time.");
} else {
    let finalRemainingTime = Math.ceil(lenghtOfTheEpisode - remainingTime);
    console.log("You don't have enough time to watch " + seriesName + ", you need " + finalRemainingTime + " more minutes.");
}
}
