function addressBook(array) {

    let objOfaddresses = {

    }
    let arrayOfNames = [];

    for (let index = 0; index < array.length; index++) {
        let [name, address] = (array[index]).split(":");
        objOfaddresses[name] = address;
    }

    // let entries = Object.entries(objOfaddresses);
    // let sortedEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
    //     return keyA.localeCompare(keyB);
    // })

    // for (let [name, address] of sortedEntries) {
    //     console.log(name, "->", address);
    // }

    let unsortedKeys = Object.keys(objOfaddresses);
    let sortedKeys = unsortedKeys.sort((a,b) => a.localeCompare(b));

    for(let key of sortedKeys) {
        console.log(key, "->",objOfaddresses[key]);
    }
}
