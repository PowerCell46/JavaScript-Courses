function task(text) {

    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g
    let currentMatch = pattern.exec(text);
    let printArray = [];
    while (currentMatch !== null) {
        printArray.push(currentMatch[0]);
        currentMatch = pattern.exec(text)
    }
    console.log(printArray.join(" "));
}
