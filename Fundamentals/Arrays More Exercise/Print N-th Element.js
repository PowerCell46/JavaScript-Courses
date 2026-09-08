function printElements(array) {
  let step = Number(array[Number(array.length - 1)]);
  let currentStep = -1;
  let newArray = [];
  newArray.push(array[0]);

  for (let index = 0; index < Number(array.length) - 1; index++) {
    currentStep++;
    if (currentStep === step) {
      newArray.push(array[index]);
      currentStep = 0;
    }
  }

  console.log(newArray.join(" "));
}
