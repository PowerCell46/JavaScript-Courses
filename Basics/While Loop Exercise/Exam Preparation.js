function examPreparation(input) {
let index = 0;
let numberOfBadGrades = Number(input[index]);
let badGradesCounter = 0;
index++;
let nameOfTheTask = input[index];
index++;
let gradeForTheTask = Number(input[index]);
let sumOfGrades = 0;
let numberOfTasks = 0;
let enough = false;
let failiure = false;

while(nameOfTheTask !== "Enough") {
if(gradeForTheTask <= 4) {
badGradesCounter++;
if(badGradesCounter === numberOfBadGrades) {
failiure = true;
    break;
}}
sumOfGrades+= gradeForTheTask;
numberOfTasks++;
index++;
nameOfTheTask = input[index];
index++;
gradeForTheTask = Number(input[index]);
if(nameOfTheTask === "Enough") {
enough = true;
}
}

let averageGrade = sumOfGrades / numberOfTasks;
if(enough === true) {
console.log("Average score: " + averageGrade.toFixed(2));
console.log("Number of problems: " + numberOfTasks);
console.log("Last problem: " + input[index - 3]);
} else if(failiure === true) {
console.log("You need a break, " + badGradesCounter + " poor grades.");
}
}
