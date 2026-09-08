function steps(input) {
let index = 0;
let goalSteps = 10000;
let currentSteps = input[index];
let inputLength = input.length;
let totalSteps = 0;
let goalReched = false;
let goingHome = false;

while(index <= (inputLength - 1)) {

if(currentSteps === "Going home") {
index++;
currentSteps = Number(input[index]);
totalSteps += currentSteps;
goingHome = true; break;
} else {
currentSteps = Number(input[index]);
totalSteps += currentSteps;

if(totalSteps >= goalSteps) {
goalReched = true; break;
}
index++;
currentSteps = input[index];
}}

if(goalReched === true || totalSteps >= goalSteps) {
let bonusSteps = totalSteps - goalSteps;
console.log("Goal reached! Good job!");
console.log(bonusSteps + " steps over the goal!");
} else if(totalSteps < goalSteps) {
let neededSteps = goalSteps - totalSteps;
    console.log(neededSteps + " more steps to reach goal.")
}
}
