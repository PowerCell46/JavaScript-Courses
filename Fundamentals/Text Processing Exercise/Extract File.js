function extractFile(fileLocation) {
    let arrayOfTheLocation = fileLocation.split("\\");
    let lastRow = arrayOfTheLocation[arrayOfTheLocation.length - 1].split(".");
    let extension = lastRow.pop();
    console.log(`File name: ${lastRow.join(".")}`);
    console.log(`File extension: ${extension}`);
}
