window.addEventListener('load', solve);
// Doesn't work properly with more than one elements in the cart
function solve() {
    let addButton = document.getElementById("add");
    addButton.addEventListener("click", function addItem(event) {
        event.preventDefault(); // Prevent form submission and page refresh

        let model = document.getElementById("model");
        let year = document.getElementById("year");
        let description = document.getElementById("description");
        let price = document.getElementById("price");
        let inputValues = [model.value, Number(year.value), description.value, Number(price.value)];

        if (inputValues[0] !== "" && inputValues[2] !== "" && inputValues[1] > 0 && inputValues[3] > 0) {
            let tbody = document.getElementById("furniture-list");

            let currentTr = document.createElement("tr");
            currentTr.classList.add("info");
            let modelTd = document.createElement("td");
            modelTd.textContent = inputValues[0];
            let priceTd = document.createElement("td");
            priceTd.textContent = inputValues[3].toFixed(2);
            let buttonsTd = document.createElement("td");
            let moreBtn = document.createElement("button");
            moreBtn.classList.add('moreBtn');
            moreBtn.textContent = "More Info";
            let buyBtn = document.createElement("button");
            buyBtn.classList.add("buyBtn");
            buyBtn.textContent = "Buy it";
            buttonsTd.appendChild(moreBtn);
            buttonsTd.appendChild(buyBtn);

            currentTr.appendChild(modelTd);
            currentTr.appendChild(priceTd);
            currentTr.appendChild(buttonsTd);
            tbody.appendChild(currentTr);

            let hiddenTr = document.createElement("tr");
            hiddenTr.classList.add("hide");
            let yearTd = document.createElement("td");
            yearTd.textContent = `Year: ${inputValues[1]}`;
            let descId = document.createElement('td');
            descId.colSpan = "3";
            descId.textContent = `Description: ${inputValues[2]}`;

            hiddenTr.appendChild(yearTd);
            hiddenTr.appendChild(descId);
            tbody.appendChild(hiddenTr);

            model.value = "";
            year.value = "";
            description.value = "";
            price.value = "";
       
            moreBtn = document.getElementsByClassName("moreBtn")[0];
            moreBtn.addEventListener("click", function moreInfoFunc() {
                if (moreBtn.textContent === "More Info") {
                    moreBtn.textContent = "Less Info";
                    let hiddenEl = document.getElementsByClassName("hide");
                    hiddenEl[0].style.display = "contents"    
                } else {
                    moreBtn.textContent = "More Info";
                    let hiddenEl = document.getElementsByClassName("hide");
                    hiddenEl[0].style.display = "none";  
                }
            })

            buyBtn = document.getElementsByClassName("buyBtn")[0];
            buyBtn.addEventListener("click", function buyFunc() {
                let totalPrice = document.getElementsByClassName("total-price")[0];
                totalPrice.textContent = (Number(totalPrice.textContent) + inputValues[3]).toFixed(2);
                let removeFromTable = document.getElementsByClassName("info")[0];
                removeFromTable.remove();
                let removeFromTable2 = document.getElementsByClassName("hide")[0];
                removeFromTable2.remove();
            })
        }
    });
}
