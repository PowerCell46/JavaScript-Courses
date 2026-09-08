function solve() {
   
   let nextButton = document.getElementById("next-btn");
     nextButton.addEventListener("click", function nextFunc(event) {
        event.preventDefault();
        
        let carModel = document.getElementById("car-model")
        let carYear =document.getElementById("car-year")
        let partName = document.getElementById("part-name")
        let partNumber = document.getElementById("part-number")
        let condition = document.getElementById("condition")
        let valuesArray = [carModel.value, Number(carYear.value), partName.value, Number(partNumber.value), condition.value ]

        if(!valuesArray.includes("") && 1980 < valuesArray[1] && valuesArray[1] < 2023) {
           let image = document.getElementById("complete-img");
           image.style.visibility = "hidden";
           let paragraph = document.getElementById("complete-text");
           paragraph.textContent = "";
           
           let currentLi = document.createElement("li");
           currentLi.classList.add("part-content");

           let currentArticle = document.createElement("article");

           let modelP = document.createElement("p");
           modelP.textContent = `Car Model: ${valuesArray[0]}`

           let yearP = document.createElement("p");
           yearP.textContent = `Car Year: ${valuesArray[1]}`

           let partNameP = document.createElement("p");
           partNameP.textContent = `Part Name: ${valuesArray[2]}`

           let partNumberP = document.createElement("p");
           partNumberP.textContent = `Part Number: ${valuesArray[3]}`

           let conditionP = document.createElement("p");
           conditionP.textContent = `Condition: ${valuesArray[4]}`;

           let editButton = document.createElement("button");
           editButton.classList.add("edit-btn");
           editButton.textContent = "Edit";

           let continueButton = document.createElement("button");
           continueButton.classList.add("continue-btn");
           continueButton.textContent = "Continue";
           
           currentArticle.appendChild(modelP);
           currentArticle.appendChild(yearP);
           currentArticle.appendChild(partNameP);
           currentArticle.appendChild(partNumberP);
           currentArticle.appendChild(conditionP);

           currentLi.appendChild(currentArticle);
           currentLi.appendChild(editButton);
           currentLi.appendChild(continueButton);

           let parentUl = document.getElementsByClassName("info-list")[0];
           parentUl.appendChild(currentLi);

           carModel.value = "";
           carYear.value = "";
           partName.value = "";
           partNumber.value = "";
           condition.value = "";

           nextButton.disabled = true;

           editButton.addEventListener("click", function editFunc() {
           carModel.value = valuesArray[0];
           carYear.value = valuesArray[1];
           partName.value = valuesArray[2];
           partNumber.value = valuesArray[3];
           condition.value = valuesArray[4];

           currentLi.remove();
           nextButton.disabled = false;
           })

           continueButton.addEventListener("click", function continueFunc() {
           currentLi.remove()

           let continueLi = document.createElement("li");
           continueLi.classList.add("part-content");

           continueLi.appendChild(currentArticle);

           let confirmButton = document.createElement("button");
           confirmButton.classList.add("confirm-btn");
           confirmButton.textContent = "Confirm";
           
           let cancelButton = document.createElement("button");
           cancelButton.classList.add("cancel-btn")
           cancelButton.textContent = "Cancel";
           
           continueLi.appendChild(confirmButton);
           continueLi.appendChild(cancelButton);

           let confirmUl = document.getElementsByClassName("confirm-list")[0];
           confirmUl.appendChild(continueLi);

           confirmButton.addEventListener("click", function confirmFunc() {
                continueLi.remove();
                nextButton.disabled = false;
                image.style.visibility = "visible";
                paragraph.textContent = "Part is Ordered!"
           })

           cancelButton.addEventListener("click", function cancelFunc() {
                continueLi.remove();
                nextButton.disabled = false;
           })
        })

        }
   })
}
