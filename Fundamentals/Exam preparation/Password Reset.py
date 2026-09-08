function passwordReset(array) {
    let predefinedString = array[0].split("");

    for (let index = 1; index < array.length - 1; index++) {
        let currentInput = array[index].split(" ");
        let currentCommand = currentInput.shift();
        switch (currentCommand) {
            case "TakeOdd":
                let newPass = "";
                for (let index = 0; index < predefinedString.length; index++) {
                    if (index % 2 !== 0) {
                        newPass += predefinedString[index];
                    }
                }
                predefinedString = newPass.split("")
                console.log(newPass);
                break;

            case "Cut":
                let currentInputIndex = Number(currentInput.shift());
                let currentLength = Number(currentInput.shift());
                predefinedString.splice(currentInputIndex, currentLength);
                console.log(predefinedString.join(""));
                break;

            case "Substitute":
                let currentSubstring = currentInput.shift();
                let currentSubstitude = currentInput.shift();
                predefinedString = predefinedString.join("");
                let searchedIndex = predefinedString.indexOf(currentSubstring);
                if (searchedIndex === -1) {
                    console.log("Nothing to replace!");
                    predefinedString = predefinedString.split("");
                } else {
                    while (searchedIndex !== -1) {
                        predefinedString = predefinedString.split("");
                        predefinedString.splice(searchedIndex, currentSubstring.length, currentSubstitude);
                        predefinedString = predefinedString.join("");
                        searchedIndex = predefinedString.indexOf(currentSubstring);
                    }
                    predefinedString = predefinedString.split("");
                    console.log(predefinedString.join(""));
                }
                break;
            default:
                break;
        }
    }
    console.log(`Your password is: ${predefinedString.join("")}`);
}
