function rightPlace(firstWord, letter, secondWord) {
let firstWordFinal = "";

for(let currentLetter = 0; currentLetter < firstWord.length; currentLetter++) {
    let currenrLetterFinal = firstWord[currentLetter];
    if(currenrLetterFinal === "_") {
    firstWordFinal += letter;
    } else {
    firstWordFinal += currenrLetterFinal;
    }
}

if(firstWordFinal !== secondWord) {
    console.log("Not Matched");
} else if(firstWordFinal === secondWord) {
    console.log("Matched");
}
}
