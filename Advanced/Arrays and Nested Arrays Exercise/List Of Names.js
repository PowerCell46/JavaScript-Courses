function sortNames(namesArray) {
namesArray = namesArray.sort((a,b) => a.localeCompare(b));
printString = "";
for(let index in namesArray) {
    printString += (Number(index) + 1) + "." + namesArray[index] + "\n" 
}
return printString
}
