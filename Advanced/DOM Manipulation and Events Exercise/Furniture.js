function solve() {
  let buttons = document.querySelectorAll('button');
  const checkboxInputs1 = document.querySelectorAll('input[type="checkbox"]');
  checkboxInputs1[0].disabled = false;

  buttons[0].addEventListener("click", function getInfo() {
    let inputFieldInfo = document.querySelector("textarea").value;
    inputFieldInfo = JSON.parse(inputFieldInfo);
    for (let obj of inputFieldInfo) {
      let image = obj["img"];
      let name = obj["name"];
      let price = obj["price"];
      let decFactor = obj["decFactor"]; 
      let currentTr = `<tr>\n    <td><img src=${image}></td>\n    <td><p>${name}</p></td>\n    <td><p>${price}</p></td>\n    <td><p>${decFactor}</p></td>\n    <td><input type="checkbox"/></td>\n</tr>`;
      document.querySelector("tbody").innerHTML += currentTr;
    }
    document.querySelector("textarea").value = "";
  })

  buttons[1].addEventListener("click", function buy() {
    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDecorationFactor = 0;
    let factorCounter = 0;
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    const tableRows = document.querySelectorAll("tbody tr");
    let currentIndex = 0;

    for (let checkbox of checkboxInputs) {
      if (checkbox.checked) {
        console.log("Checked");
        const currentRow = tableRows[currentIndex];
        
        const nameCell = currentRow.querySelector("td:nth-child(2)");
        const nameP = nameCell.querySelector("p");
        boughtFurniture.push(nameP.textContent);
        
        const priceCell = currentRow.querySelector("td:nth-child(3)");
        const priceP = priceCell.querySelector("p");
        totalPrice += Number(priceP.textContent);

        const factorCell = currentRow.querySelector("td:nth-child(4)");
        const factorP = factorCell.querySelector("p");
        averageDecorationFactor += Number(factorP.textContent);
        factorCounter++;
      } else {
        console.log("Not checked");
      }
      currentIndex++;
    }
    let finalTextArea = document.querySelectorAll("textarea");
    let resultText = `Bought furniture: ${boughtFurniture.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor / factorCounter}`
    finalTextArea[1].value = resultText;
  })
}
