function schoolGrades(array) {
    let mapOfStudents = new Map();

    let arrayOfNames = [];
    let arrayOfSums = [];
    let arrayOfLengths = [];

    for (let index = 0; index < array.length; index++) {

        let currentInput = (array[index]).split(" ");
        let currentName = currentInput.shift();
        let totalGrade = 0;

        for (let z = 0; z < currentInput.length; z++) {
            let currentGrade = Number(currentInput[z]);
            totalGrade += currentGrade;
        }

        if (mapOfStudents.has(currentName)) {
            let searchedIndex = arrayOfNames.indexOf(currentName);
            let previousSum = arrayOfSums[searchedIndex];
            let previousLength = arrayOfLengths[searchedIndex];
            let totalGrade1 = (previousSum + totalGrade) / (previousLength + currentInput.length);
            mapOfStudents.set(currentName, totalGrade1.toFixed(2));
            arrayOfNames.splice(searchedIndex, 1, "------");
            arrayOfNames.push(currentName);
            arrayOfSums.push(previousSum + totalGrade);
            arrayOfLengths.push(previousLength + currentInput.length);
        } else {
            arrayOfSums.push(totalGrade);
            totalGrade /= currentInput.length;
            mapOfStudents.set(currentName, totalGrade.toFixed(2));
            arrayOfNames.push(currentName);
            arrayOfLengths.push(currentInput.length);
        }
    }

    let sorted = Array.from(mapOfStudents.entries()).sort(([keyA, ValA], [keyB, ValB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [key, value] of sorted) {
        console.log(`${key}: ${value}`);
    }
}
