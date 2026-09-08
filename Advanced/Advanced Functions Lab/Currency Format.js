function createFormatter(firstValue, secondValue, thirdValue, currencyFormatter) {
    return currencyFormatter.bind(this, firstValue, secondValue, thirdValue);
}
