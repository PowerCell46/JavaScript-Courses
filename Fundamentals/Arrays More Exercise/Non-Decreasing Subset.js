function nonDecreasingSubset(array) {
  let newArray = [];
  let currentBiggestNumber = array[0];

  for (let index = 0; index < Number(array.length); index++) {
    let currentNumber = array[index];

    if (currentNumber >= currentBiggestNumber) {
      newArray.push(currentNumber);
      currentBiggestNumber = currentNumber;
    }
  }
  console.log(newArray.join(" "));
}
