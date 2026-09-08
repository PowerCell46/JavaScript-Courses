function swimmingRecord(input) {
let theRecordInSec = Number(input[0]);
let lengthOfThePool = Number(input[1]);
let timeFor1meterOfSwimming = Number(input[2]);
 
let IvansTime = lengthOfThePool * timeFor1meterOfSwimming;
let slowingOfTheWater = Math.floor(lengthOfThePool / 15);
let totalTime = (IvansTime + (slowingOfTheWater * 12.5));

if(totalTime < theRecordInSec) {
    console.log("Yes, he succeeded! The new world record is " + totalTime.toFixed(2) + " seconds.");
} else {
    let loss = totalTime - theRecordInSec;
    console.log("No, he failed! He was " + loss.toFixed(2) + " seconds slower.");
}
}   
