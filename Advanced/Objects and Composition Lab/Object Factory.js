function objectFactory(libraryOfOrders, arrayOfOrders) {
    let resultArray = []
    for(let {template, parts} of arrayOfOrders) {
        let result = Object.assign({}, template);
        for (let part of parts) {
            let func = libraryOfOrders[part];
            result[part] = func;
        }
        resultArray.push(result)
    }
    return resultArray;
}
