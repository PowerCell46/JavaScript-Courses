function tennisRanklist(input) {
let index = 0
let numberOfTourneys = Number(input[index]);
index++;
let startingPoints = Number(input[index]);
index++;
let wonPoints = 0;
let wonCounter = 0;

for(let rotatingTourneys = 0; rotatingTourneys < numberOfTourneys; rotatingTourneys++) {
let currentTourneyResult = input[index];
index++;

if(currentTourneyResult === "W") {
wonPoints+=2000;
wonCounter+=1;
} else if(currentTourneyResult === "F") {
wonPoints+=1200;
} else if(currentTourneyResult === "SF") {
wonPoints+=720;
}
}

let finalPoints = startingPoints + wonPoints;
console.log("Final points: " + finalPoints);

let averagePoints = (wonPoints/numberOfTourneys);
console.log("Average points: " + Math.floor(averagePoints));

let percentageOfWinnigs = (wonCounter/ numberOfTourneys) * 100;
console.log(percentageOfWinnigs.toFixed(2) + "%"); 
}
