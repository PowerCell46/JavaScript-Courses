function oscars(input) {
let index = 0;
let nameOfTheActor = input[index]; // input[0]
    index++;
let pointsFromTheAcademy = Number(input[index]); // input[1]
    index++;
let numberOfTheJury = Number(input[index]); // input[2]
index++;

hasNomenee = false;

for(let currentJuryMember = 0; currentJuryMember < numberOfTheJury; currentJuryMember++) {
let currentName = input[index]; // input[3]
index++;
let currentPoints = Number(input[index]); //input[4] // при следващо завъртане input[6]
index++; // input[5] // при следващо завъртане input[7]

let points = (currentName.length * currentPoints) /2;
pointsFromTheAcademy += points;

if(pointsFromTheAcademy > 1250.5) {
hasNomenee = true;
console.log("Congratulations, " + nameOfTheActor + " got a nominee for leading role with " + pointsFromTheAcademy.toFixed(1) + "!");
break;
} 
}

if(!hasNomenee) {
let neededPoints = 1250.5 - pointsFromTheAcademy; 
console.log("Sorry, " + nameOfTheActor + " you need " + neededPoints.toFixed(1) + " more!")
}
}
