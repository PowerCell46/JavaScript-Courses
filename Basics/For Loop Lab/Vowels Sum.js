function vowelsSum(input) {

let inputWord = input[0];
let letterOfTheWord = inputWord[0];
let sum = 0;

for(let letter = 0; letter < inputWord.length; letter++) {
    let something = inputWord[letter];
    if(something === "a") {
    sum+= 1;
    } else if(something === "e") {
    sum+= 2;
    } else if(something === "i") {
    sum+= 3;
    } else if(something === "o") {
    sum+= 4;
    } else if(something === "u") {
    sum+= 5;
    }
}
console.log(sum);
}
