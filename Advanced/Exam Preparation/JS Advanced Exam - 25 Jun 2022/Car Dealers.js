function solve() {
  let publishButton = document.getElementById("publish");
  publishButton.addEventListener("click", function publishFunc(event) {
    event.preventDefault(); // Prevent page reload

    let make = document.getElementById("make");
    let model = document.getElementById("model");
    let productionYear = document.getElementById("year");
    let fuel = document.getElementById("fuel");
    let originalCost = document.getElementById("original-cost");
    let sellingPrice = document.getElementById("selling-price");
    let arrayOfValues = [make.value, model.value, Number(productionYear.value), fuel.value, Number(originalCost.value), Number(sellingPrice.value)];
    
    if (!arrayOfValues.includes("") && arrayOfValues[5] > arrayOfValues[4]) {
      let workingTr = document.createElement("tr");
      workingTr.classList.add("row");
      let makeTd = document.createElement("td");
      makeTd.textContent = arrayOfValues[0];
      let modelTd = document.createElement("td");
      modelTd.textContent = arrayOfValues[1];
      let productionYearTd = document.createElement("td");
      productionYearTd.textContent = arrayOfValues[2];
      let fuelTd = document.createElement("td");
      fuelTd.textContent = arrayOfValues[3];
      let originalCostTd = document.createElement('td');
      originalCostTd.textContent = arrayOfValues[4];
      let sellingPriceTd = document.createElement("td");
      sellingPriceTd.textContent = arrayOfValues[5];
      let editButton = document.createElement('button');
      editButton.textContent = "Edit";
      editButton.classList.add("action-btn", "edit");
      let sellButton = document.createElement("button");
      sellButton.textContent = "Sell";
      sellButton.classList.add("action-btn", "sell");
      let buttonTd = document.createElement("td");
      buttonTd.appendChild(editButton);
      buttonTd.appendChild(sellButton);
      workingTr.appendChild(makeTd);
      workingTr.appendChild(modelTd);
      workingTr.appendChild(productionYearTd);
      workingTr.appendChild(fuelTd);
      workingTr.appendChild(originalCostTd);
      workingTr.appendChild(sellingPriceTd);
      workingTr.appendChild(buttonTd);
      let tableBody = document.getElementById("table-body");
      tableBody.appendChild(workingTr);

      make.value = "";
      model.value = "";
      productionYear.value = "";
      fuel.value = "";
      originalCost.value = "";
      sellingPrice.value = "";

      editButton.addEventListener("click", function editFunc() {
        make.value = arrayOfValues[0];
      model.value = arrayOfValues[1];
      productionYear.value = arrayOfValues[2];
      fuel.value = arrayOfValues[3];
      originalCost.value = arrayOfValues[4];
      sellingPrice.value = arrayOfValues[5];
      workingTr.remove();
      })

      sellButton.addEventListener("click", function sellFunc() {
        workingTr.remove();
        let soldLi = document.createElement("li");
        soldLi.classList.add("each-list");
        let firstSpan = document.createElement("span");
        firstSpan.textContent = `${arrayOfValues[0]} ${arrayOfValues[1]}`;
        let secondSpan = document.createElement("span");
        secondSpan.textContent = `${arrayOfValues[2]}`;
        let thirdSpan = document.createElement("span");
        thirdSpan.textContent = `${arrayOfValues[5] - arrayOfValues[4]}`;
        soldLi.appendChild(firstSpan);
        soldLi.appendChild(secondSpan);
        soldLi.appendChild(thirdSpan);
        let parentUl = document.getElementById("cars-list");
        parentUl.appendChild(soldLi);
        let profit = document.getElementById("profit");
        profit.textContent = (Number(profit.textContent) + (arrayOfValues[5] - arrayOfValues[4])).toFixed(2);
      })
    }
  });
}
