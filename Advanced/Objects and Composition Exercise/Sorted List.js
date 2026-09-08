function createSortedList() {
    let arrayOfNumbers = [];
    let sortedList = {
        add(element) {
            arrayOfNumbers.push(element);
            arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b);
        },
        remove(index) {
            if (index > -1 && index < arrayOfNumbers.length) {
                arrayOfNumbers.splice(index, 1);
                arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b);
            }
        },
        get size() {
            return arrayOfNumbers.length;
        },
        get(index) {
            if (index > -1 && index < arrayOfNumbers.length) {
                arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b);
                return arrayOfNumbers[index];
            }
        },
    };
    return sortedList;
}
