function negativePositiveNumbers(array) {
    let newArray = [];
    for (let number of array) {
        if (Number(number) < 0) {
            newArray.unshift(number)
        } else {
            newArray.push(number)
        }
    }
    return newArray.join("\n");
}
