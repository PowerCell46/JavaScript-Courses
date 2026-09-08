function trainTheTrainers(input) {
    let index = 0;
    let membersOfTheJury = Number(input[index]);
    index++;
    let nameOfThePresentation = input[index];
    index++;
    let currentGrade = Number(input[index]);

    let sumOfGrades = 0;
    let gradeForTheTask = 0;
    let counter = 0;
    let sumOfAllGrades = 0;
    let counter2 = 0;

    while( nameOfThePresentation !== "Finish") {
    
    while(index < ((index + membersOfTheJury) + counter)) {
    currentGrade = Number(input[index]);
    sumOfGrades += currentGrade;
    index++;
    counter--; 
    }
    gradeForTheTask = (sumOfGrades / membersOfTheJury);
    sumOfAllGrades += gradeForTheTask;
    counter2++;
    console.log(nameOfThePresentation + " - " + gradeForTheTask.toFixed(2) + ".");
    nameOfThePresentation = input[index];
    index++; 
    counter = 0;
    sumOfGrades = 0;
}

let finalGrade = sumOfAllGrades / counter2;
console.log("Student's final assessment is " + finalGrade.toFixed(2) + ".");

}
