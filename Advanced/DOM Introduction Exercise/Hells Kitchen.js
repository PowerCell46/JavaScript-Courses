function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputArray = document.querySelector("textarea");
      inputArray = JSON.parse(inputArray.value);
      let objOfPizzaPlaces = {};

      for (let index = 0; index < inputArray.length; index++) {
         let currentInput = inputArray[index].split(" - ");
         let currentRestaurantName = currentInput.shift();

         if (!Object.keys(objOfPizzaPlaces).includes(currentRestaurantName)) {
            objOfPizzaPlaces[currentRestaurantName] = {}
            currentInput = currentInput[0].split(", ");
            let sumOfSalaries = 0;
            let biggestSalary = -10000;
            let numberOfPeople = 0;

            for (let input of currentInput) {
               input = input.split(" ");
               objOfPizzaPlaces[currentRestaurantName][input[0]] = Number(input[1]);
               sumOfSalaries += Number(input[1]);
               numberOfPeople++;
               if (Number(input[1]) > biggestSalary) {
                  biggestSalary = Number(input[1]);
               }
            }
            objOfPizzaPlaces[currentRestaurantName]["biggestSalary"] = biggestSalary;
            objOfPizzaPlaces[currentRestaurantName]["averageSalary"] = (sumOfSalaries / currentInput.length);
            objOfPizzaPlaces[currentRestaurantName]["sumOfSalaries"] = sumOfSalaries;
            objOfPizzaPlaces[currentRestaurantName]["numberOfPeople"] = numberOfPeople;

         } else {
            let newValueOfTheBiggestSalary = objOfPizzaPlaces[currentRestaurantName]["biggestSalary"];
            currentInput = currentInput[0].split(", ");
            let newSumOfSalaries = objOfPizzaPlaces[currentRestaurantName]["sumOfSalaries"];
            let numberOfNewPeople = objOfPizzaPlaces[currentRestaurantName]["numberOfPeople"];

            for (let input of currentInput) {
               input = input.split(" ");
               numberOfNewPeople++;
               objOfPizzaPlaces[currentRestaurantName][input[0]] = Number(input[1]);
               newSumOfSalaries += Number(input[1]);
               if (Number(input[1]) > newValueOfTheBiggestSalary) {
                  newValueOfTheBiggestSalary = Number(input[1]);
               }
            }
            let newAvgSalary = (newSumOfSalaries / numberOfNewPeople);
            objOfPizzaPlaces[currentRestaurantName]["averageSalary"] = newAvgSalary;
            objOfPizzaPlaces[currentRestaurantName]["biggestSalary"] = newValueOfTheBiggestSalary;
         }
      }
      let arrayOfPizzaPlaceNames = Object.keys(objOfPizzaPlaces);
      let finalObj = {};
      for (let pizzaPlace of arrayOfPizzaPlaceNames) {
         finalObj[pizzaPlace] = objOfPizzaPlaces[pizzaPlace]["averageSalary"];
      }
      let sortedFinalObj = Object.fromEntries(
      Object.entries(finalObj).sort(([,a],[,b]) => b - a));
      let workingShop = Object.keys(sortedFinalObj)[0];
      let resultField = document.getElementById("bestRestaurant").getElementsByTagName("p")[0];
      resultField.textContent = `Name: ${workingShop} Average Salary: ${objOfPizzaPlaces[workingShop]["averageSalary"].toFixed(2)} Best Salary: ${objOfPizzaPlaces[workingShop]["biggestSalary"].toFixed(2)}`;
      delete objOfPizzaPlaces[workingShop]["averageSalary"];
      delete objOfPizzaPlaces[workingShop]["biggestSalary"];
      delete objOfPizzaPlaces[workingShop]["sumOfSalaries"];
      delete objOfPizzaPlaces[workingShop]["numberOfPeople"];
      let orderedWorkers = Object.fromEntries(
      Object.entries(objOfPizzaPlaces[workingShop]).sort(([,a],[,b]) => b - a));
      let finalFinalResult = "";
      for (let key of Object.keys(orderedWorkers)) {
         finalFinalResult += `Name: ${key} With Salary: ${orderedWorkers[key]} `;
      }
      let finalResultField = document.getElementById("workers").getElementsByTagName("p")[0];
      finalResultField.textContent = finalFinalResult
   }
}
