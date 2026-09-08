function addAndRemoveElements(arrayOfCommands) {
let workArray = [];
let currentNumber = 0
for(let index = 0; index < arrayOfCommands.length; index++) {
    let currentCommand = arrayOfCommands[index];
    if(currentCommand === "add") {
        currentNumber++;
        workArray.push(currentNumber);
    } else if(currentCommand === "remove") {
        currentNumber++;
        workArray.pop()
    }   
}
if (workArray.length > 0) {
    return workArray.join("\n");
} else {
    return "Empty"
}
}
