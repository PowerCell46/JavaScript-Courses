function furniture(array) {

    let bigString = "";
    for (let row of array) {
        bigString += row + " "
    }
    let furnitureArray = [];
    let totalPrice = 0;
    let pattern = />>(?<furniture>[A-Z]{1}[a-z|A-Z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/gm
    let valid = null;

    while ((valid = pattern.exec(bigString)) !== null) {
        let validName = valid.groups["furniture"];
        let validPrice = valid.groups["price"];
        let validQuantity = valid.groups["quantity"];
        furnitureArray.push(validName);
        totalPrice += Number(validPrice) * Number(validQuantity);
    }
    console.log("Bought furniture: ");
    furnitureArray.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
