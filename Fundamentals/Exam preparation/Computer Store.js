function computerStore(array) {
    let index = 0;
    let currentPartPrice = array[index];
    let sum = 0;
    let allTaxes = 0;
    let allParts = 0;

    while (currentPartPrice !== "special" && currentPartPrice !== "regular") {
        currentPartPrice = Number(array[index]);
        if (currentPartPrice < 0) {
            console.log("Invalid price!");
            index++;
            currentPartPrice = (array[index]);
            continue;
        }

        let taxesForThePart = (currentPartPrice / 100) * 20;
        allTaxes += taxesForThePart;
        allParts += currentPartPrice;

        let finalPriceForThePart = currentPartPrice + taxesForThePart;
        sum += finalPriceForThePart;
        
        index++;
        currentPartPrice = array[index];
    }

    switch (currentPartPrice) {
        case "regular":
            sum = sum; break;
        case "special":
            sum = sum - sum / 10; break;
    }

    if (sum > 0) {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${allParts.toFixed(2)}$`);
        console.log(`Taxes: ${allTaxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${sum.toFixed(2)}$`);
    } else if (sum === 0) {
        console.log("Invalid order!");
    }
}
