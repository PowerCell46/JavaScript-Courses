function squareOfStars(numberOfStars) {
    if (numberOfStars === undefined) {
        numberOfStars = 5;
    }
    let result = "";
    for (let index = 0; index < numberOfStars; index++) {
        let currentRow = ""
        for (let xedni = 0; xedni < numberOfStars; xedni++) {
            currentRow += "* " 
        }
        result += currentRow + "\n"
    }
    return result
}
