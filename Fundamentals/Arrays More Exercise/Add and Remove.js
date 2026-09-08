function addOrRemove(array) {
  let printArray = [];
  let number = 0;

  for (let command = 0; command < Number(array.length); command++) {
    let currentCommand = array[command];
    number++;
    if (currentCommand === "add") {
      printArray.push(number);
    }
    if (currentCommand === "remove") {
      printArray.pop();
    }
  }

  if (printArray[0] === undefined) {
    console.log("Empty");
  } else {
    console.log(printArray.join(" "));
  }
}
