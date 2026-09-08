function doingProjects(input) {
let nameOfTheArchitect = input[0];
let numberOfProjects = Number(input[1]);
let numberOfHours = Number(numberOfProjects * 3);
let finalAnswer = "The architect " + nameOfTheArchitect + " will need " + numberOfHours +" hours to complete " + numberOfProjects + " project/s."
    console.log(finalAnswer)
}
