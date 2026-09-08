function rosettaStone(inputArr) {
    const numbersToLettersObj = {
        0: " "
    }
    for (let index = 1; index < 27; index++) {
        numbersToLettersObj[index] = String.fromCharCode(64 + index);
    }


    const numberOfLinesForTemplate = Number(inputArr[0]);
    let template = [];
    for (let index = 1; index < numberOfLinesForTemplate + 1; index++) {
        template.push(inputArr[index].split(" "));
    }


    let decryptedMessageArr = [];
    for (let index = numberOfLinesForTemplate + 1; index < inputArr.length; index++) {
        decryptedMessageArr.push(inputArr[index].split(" "));
    }


    let currentWorkingRowIndex = 0;
    let currentWorkingPositionIndex = 0;

    while (currentWorkingRowIndex < decryptedMessageArr.length) {
       currentWorkingPositionIndex = 0;

        while (currentWorkingPositionIndex < decryptedMessageArr[0].length) {
            let counterRow = -1;
         
            for (let index = currentWorkingRowIndex; index < (currentWorkingRowIndex + template.length); index++) {
                if (index == decryptedMessageArr.length) {
                    break;
                }
                let counterPosition = -1;
                counterRow++;
             
                for (let xedni = currentWorkingPositionIndex; xedni < (currentWorkingPositionIndex + template[0].length); xedni++) {
                    if (xedni == decryptedMessageArr[0].length) {
                        break;
                    }
                    counterPosition++;
                    let mainArrayNumber = Number(decryptedMessageArr[index][xedni]);
                    let templateArrayNumber = Number(template[counterRow][counterPosition]);
                    let finalNumber = templateArrayNumber + mainArrayNumber;
                    while (finalNumber > 26) {
                        finalNumber -= 27;
                    }
                    decryptedMessageArr[index][xedni] = numbersToLettersObj[finalNumber];
                }
            }
            currentWorkingPositionIndex += template[0].length;
        }
        currentWorkingRowIndex += template.length;
    }
let finalString = "";

for (let row  of decryptedMessageArr) {
    for (let el of row) {
        finalString += el;
    }
}
console.log(finalString.trim());

}
