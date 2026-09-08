function personInfo(inputObject) {

    
    for (let key of Object.keys(inputObject)) {
        console.log(`${key} -> ${inputObject[key]}`)
    }

}
