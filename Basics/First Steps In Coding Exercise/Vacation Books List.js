function compulsaryLiterature(input) {
let numberOfPages = Number(input[0]);
let pages = Number(input[1]);
let numberOfDays = Number(input[2]);
let numberOfHours = Number(numberOfPages / pages);
let finalAnswer = Number(numberOfHours / numberOfDays);   
console.log(finalAnswer);
}
