function processOddNumbers(array) {
  let arrayPrint = [];
  for (let index = 0; index < Number(array.length); index++) {
    let currentNum = array[index];
    if (index % 2 !== 0) {
      arrayPrint.push(currentNum * 2);
    }
  }
  let printArray = [];
  for (let index = Number(arrayPrint.length - 1); index >= 0; index--) {
    printArray.push(arrayPrint[index]);
  }
  console.log(printArray.join(" "));
}
