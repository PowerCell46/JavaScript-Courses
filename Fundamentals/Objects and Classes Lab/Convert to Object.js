function jsonTask(string) {

    let inputObject = JSON.parse(string);

    for (let key of Object.keys(inputObject)) {
        console.log(`${key}: ${inputObject[key]}`)
    }
}
