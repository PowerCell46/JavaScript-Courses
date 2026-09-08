function jansNotation(array) {
    let arrayOfNumbers = [];
    let stopTheProgram = false;

    for (let index = 0; index < array.length; index++) {
        let currentInput = array[index];

        if (typeof (currentInput) === "number") {
            arrayOfNumbers.push(currentInput);

        } else if (typeof (currentInput) === "string") {
            let previousInput = arrayOfNumbers[arrayOfNumbers.length - 2];
            let previousPreviousInput = arrayOfNumbers[arrayOfNumbers.length - 1];

            if (typeof (previousInput) === "number" && typeof (previousPreviousInput) === "number") {
                let result = 0;

                switch (currentInput) {
                    case "+":
                        result = previousInput + previousPreviousInput; break;
                    case "-":
                        result = previousInput - previousPreviousInput; break;
                    case "*":
                        result = previousInput * previousPreviousInput; break;
                    case "/":
                        result = previousInput / previousPreviousInput; break;
                }

                arrayOfNumbers.pop();
                arrayOfNumbers.pop();
                arrayOfNumbers.push(result);

            } else {
                console.log("Error: not enough operands!");
                stopTheProgram = true;
                break;
            }
        }
    }

    let numberOfNumbers = 0;
    for (let x = 0; x < arrayOfNumbers.length; x++) {
        let currentInput = arrayOfNumbers[x];
        if (typeof (currentInput) === "number") {
            numberOfNumbers++;
        }
    }

    if (numberOfNumbers === 1 && stopTheProgram === false) {
        for (let x = 0; x < arrayOfNumbers.length; x++) {
            let currentInput = arrayOfNumbers[x];
            if (typeof (currentInput) === "number") {
                console.log(currentInput);
            }
        }
        
    } else if (numberOfNumbers > 1 && stopTheProgram === false) {
        console.log("Error: too many operands!");
    }
}
