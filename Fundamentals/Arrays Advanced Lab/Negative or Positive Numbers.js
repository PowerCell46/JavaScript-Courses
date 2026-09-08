function negativeOfPositiveNumbers(array) {
  let printArray = [];

  for (let index = 0; index < Number(array.length); index++) {
    let currentNum = Number(array[index]);
    if (currentNum < 0) {
      printArray.unshift(currentNum);
    } else {
      printArray.push(currentNum);
    }
  }
  console.log(printArray.join("\n"));
}
