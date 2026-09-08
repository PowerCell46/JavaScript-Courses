function graduation(input) {
let index = 0;
let nameOfStudent = input[index];
index++;
let yearGrade = Number(input[index]);
let numberOfFails = 0;
let finalResult = "";
let sumOfGrades = 0;
let counter = 0;
let grade = 0;

while(yearGrade >= 0) {

if(yearGrade < 4) {
numberOfFails++;
if(numberOfFails === 2) {
finalResult = "fail";
break;
}
} 

sumOfGrades += yearGrade;
grade++;
counter++;
index++;
yearGrade = Number(input[index]);
if(grade === 12) {
    finalResult = "win";
    break;
}
}
let averageGrade = sumOfGrades / counter;

switch(finalResult) {
    case "fail":
console.log(nameOfStudent + " has been excluded at " + grade + " grade"); break;
    case "win":
console.log(nameOfStudent + " graduated. Average grade: " + averageGrade.toFixed(2));

}
}
