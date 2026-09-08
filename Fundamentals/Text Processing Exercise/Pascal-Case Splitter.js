function pascalCaseSplitter(pascalCaseInput) {

    let finalStringOutput = pascalCaseInput[0];

    for (let index = 1; index < pascalCaseInput.length; index++) {
        let character = pascalCaseInput[index];
        let currentASCIIvalue = character.charCodeAt();
        if (currentASCIIvalue > 64 && currentASCIIvalue < 91) {
            finalStringOutput += ", ";
        }
        finalStringOutput += character;
    }
    console.log(finalStringOutput);
}
