function storeProvision(firstArray, secondArray) {

    let firstArrayObj = {

    }

    let index = 0;
    while (index < firstArray.length) {
        let currentProduct = firstArray[index];
        index++;
        let currentNumberOfTheProduct = Number(firstArray[index]);
        index++;
        firstArrayObj[currentProduct] = currentNumberOfTheProduct;
    }

    let xedni = 0;
    while (xedni < secondArray.length) {
        let currentProduct2 = secondArray[xedni];
        xedni++;
        let currentNumberOfTheProduct2 = Number(secondArray[xedni]);
        xedni++;
        if (Object.keys(firstArrayObj).includes(currentProduct2)) {
            firstArrayObj[currentProduct2] += currentNumberOfTheProduct2
        } else {
            firstArrayObj[currentProduct2] = currentNumberOfTheProduct2;
        }

    }
    for (let key of Object.keys(firstArrayObj)) {
        console.log(`${key} -> ${firstArrayObj[key]}`);
    }
}
