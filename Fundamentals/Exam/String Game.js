function stringGame(array) {
    let workingString = array[0];
    let index = 1;
    let currentInput = array[index];

    while (currentInput !== "Done") {
        currentInput = currentInput.split(" ");
        switch (currentInput[0]) {
            case "Change":
                let character = currentInput[1];
                let replacement = currentInput[2];
                while (workingString.includes(character)) {
                    workingString = workingString.replace(character, replacement);
                }
                console.log(workingString);
                break;

            case "Includes":
                if (workingString.includes(currentInput[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }

                break;

            case "End":
                if (workingString.endsWith(currentInput[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;

            case "Uppercase":
                workingString = workingString.toUpperCase();
                console.log(workingString);
                break;

            case "FindIndex":
                console.log(workingString.indexOf(currentInput[1]));
                break;

            case "Cut":
                let startIndex = Number(currentInput[1]);
                let count = Number(currentInput[2]);
                workingString = workingString.split("");
                workingString = workingString.splice(startIndex, count);
                workingString = workingString.join("");
                console.log(workingString);
                break;

        }

        index++;
        currentInput = array[index]
    }

}
