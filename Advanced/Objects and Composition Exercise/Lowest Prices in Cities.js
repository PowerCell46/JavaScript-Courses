function lowestPricesInCities(array) {
    let productObj = {}

    for (let input of array) {
        input = input.split(" | ");
        let townName = input[0];
        let productName = input[1];
        let productPrice = Number(input[2]);
        if (!Object.keys(productObj).includes(productName)) {
            productObj[productName] = {};
            productObj[productName][productPrice] = townName;
        } else {
            let previousPrice = Object.keys(productObj[productName]);
            if (productPrice < previousPrice) {
                productObj[productName] = {};
                productObj[productName][productPrice] = townName;
            }
        }
    }
    for (let key of Object.keys(productObj)) {
        for (let key1 of Object.keys(productObj[key])) {
            console.log(`${key} -> ${key1} (${productObj[key][key1]})`);
        }
    }
}
