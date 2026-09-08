function solve() {
    let addButton = document.getElementById("add-btn");
    addButton.addEventListener("click", function clicked() {
        let gemstoneName = document.getElementById("gem-name");
        let color = document.getElementById("color")
        let carats = document.getElementById("carats")
        let price = document.getElementById("price")
        let type = document.getElementById("type")
        let dataArray = [gemstoneName.value, color.value, carats.value, price.value, type.value];
        
        if (!dataArray.includes("")) {
            
            let currentLi = document.createElement("li");
            currentLi.classList.add("gem-info");
            let currentArticle = document.createElement("article");
            let currentH4 = document.createElement("h4");
            currentH4.textContent = dataArray[0];
            let colorP = document.createElement("p");
            colorP.textContent = "Color: " + dataArray[1];
            let caratsP = document.createElement("p");
            caratsP.textContent = "Carats: " + dataArray[2];
            let priceP = document.createElement("p");
            priceP.textContent = "Price: " + dataArray[3] + "$";
            let typeP = document.createElement("p");
            typeP.textContent = "Type: " + dataArray[4];
            currentArticle.appendChild(currentH4);
            currentArticle.appendChild(colorP);
            currentArticle.appendChild(caratsP);
            currentArticle.appendChild(priceP);
            currentArticle.appendChild(typeP);

            let saveButton = document.createElement("button");
            saveButton.classList.add("save-btn");
            saveButton.textContent = "Save to Collection";

            let editButton = document.createElement("button");
            editButton.classList.add("edit-btn");
            editButton.textContent = "Edit Information";

            let cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-btn");
            cancelButton.textContent = "Cancel";
            currentLi.appendChild(currentArticle);
            currentLi.appendChild(saveButton);
            currentLi.appendChild(editButton);
            currentLi.appendChild(cancelButton);

            let ulParent = document.getElementById("preview-list");
            ulParent.appendChild(currentLi);

            gemstoneName.value = "";
            color.value = "";
            carats.value = "";
            price.value = "";
            type.value = "";

            addButton.disabled = true;

            editButton.addEventListener("click", function editFunc() {
                currentLi.remove();
                gemstoneName.value = dataArray[0];
                color.value = dataArray[1];
                carats.value = dataArray[2];
                price.value = dataArray[3];
                type.value = dataArray[4];
                addButton.disabled = false;
            })

            saveButton.addEventListener("click", function saveFunc() {
                let saveLi = document.createElement("li");
                let saveP = document.createElement("p");
                saveP.classList.add("collection-item");
                saveP.textContent = `${dataArray[0]} - Color: ${dataArray[1]}/ Carats: ${dataArray[2]}/ Price: ${dataArray[3]}$/ Type: ${dataArray[4]}`
                saveLi.appendChild(saveP);
                let saveParent = document.getElementById("collection");
                saveParent.appendChild(saveLi);
                addButton.disabled = false;
                currentLi.remove();
            })

            cancelButton.addEventListener("click", function cancelFunc() {
                currentLi.remove();
                addButton.disabled = false;
            })
        }

    })
}
