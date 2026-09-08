function numberOfArguments(...args) {
    let objOfTypes = {};
    for (let element of args) {
        let currentType = typeof (element);
        if (!Object.keys(objOfTypes).includes(currentType)) {
            objOfTypes[currentType] = [];
        }
        objOfTypes[currentType].push(element);
        console.log(`${currentType}: ${element}`);
    }
    const orderedObj = Object.fromEntries(Object.entries(objOfTypes).sort(([type1, arr1], [type2, arr2]) => arr2.length - arr1.length));
    for(let key of Object.keys(orderedObj)) {
        console.log(`${key} = ${orderedObj[key].length}`);
    }
}
