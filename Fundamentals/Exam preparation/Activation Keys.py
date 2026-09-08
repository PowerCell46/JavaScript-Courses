function activationKeys(array) {
    let rawActivationKey = array[0];

    for (let index = 1; index < array.length - 1; index++) {
        let currentInput = array[index].split(">>>");
        switch (currentInput[0]) {
            case "Contains":
                let substring = currentInput[1];
                if (rawActivationKey.includes(substring)) {
                    console.log(`${rawActivationKey} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;

            case "Flip":
                let startIndex = Number(currentInput[2]);
                let endIndex = Number(currentInput[3]);
                let spliceString = rawActivationKey.substring(startIndex, endIndex);
                let spliceStringFinal = spliceString;

                if (currentInput[1] === "Upper") {
                    spliceStringFinal = spliceStringFinal.toUpperCase();

                } else if (currentInput[1] === "Lower") {
                    spliceStringFinal = spliceStringFinal.toLowerCase();
                }
                rawActivationKey = rawActivationKey.replace(spliceString, spliceStringFinal)
                console.log(rawActivationKey);
                break;
            case "Slice":
                let startIndexSlice = Number(currentInput[1]);
                let endIndexSlice = Number(currentInput[2]);
                let deleteSubstring = rawActivationKey.substring(startIndexSlice, endIndexSlice);
                rawActivationKey = rawActivationKey.replace(deleteSubstring, "");
                console.log(rawActivationKey);
        }

    }

    console.log(`Your activation key is: ${rawActivationKey}`);
}
