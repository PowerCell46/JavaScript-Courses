function carWash(array) {
  let percentage = 0;

  for (let index = 0; index < Number(array.length); index++) {
    let currentProcedure = array[index];
    switch (currentProcedure) {
      case "soap":
        percentage += 10;
        break;
      case "water":
        percentage = percentage + (percentage / 100) * 20;
        break;
      case "vacuum cleaner":
        percentage = percentage + (percentage / 100) * 25;
        break;
      case "mud":
        percentage = percentage - percentage / 10;
    }
  }

  console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}
