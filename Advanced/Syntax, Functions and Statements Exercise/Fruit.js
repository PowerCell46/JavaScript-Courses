function fruit(typeOfFruit, weightInGrams, pricePerKilo) {
    return `I need $${(Number(weightInGrams) / 1000 * Number(pricePerKilo)).toFixed(2)} to buy ${(Number(weightInGrams) / 1000).toFixed(2)} kilograms ${typeOfFruit}.`;
}
