function wordsTracker(array) {
    let searchedWords = array[0].split(" ");

    let result = new Map();

    let words = array.shift().split(" ");
    for (let word of words) {
        result.set(word, 0);
    }

    for (let word of array) {
        if (result.has(word)) {
            let oldValue = result.get(word)
            result.set(word, oldValue + 1);
        }
    }

    let sorted = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA
    })

    for (let [key, value] of sorted) {
        console.log(key + " - " + value);
    }
}
