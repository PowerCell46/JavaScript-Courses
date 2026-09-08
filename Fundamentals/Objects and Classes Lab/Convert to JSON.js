function convertToJSON(firstName, secondName, hairColor) {

    let inputObject = {
        name: firstName,
        lastName: secondName,
        hairColor: hairColor
    }
    inputObject = JSON.stringify(inputObject);
    console.log(inputObject);

}
