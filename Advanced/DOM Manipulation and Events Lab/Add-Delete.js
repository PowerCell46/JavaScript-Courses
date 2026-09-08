function addItem() {
    let inputField = document.getElementById("newItemText").value;
    let items = document.getElementById("items");
    let newListItem = document.createElement("li");
    newListItem.textContent = inputField;
    
    let linkElement = document.createElement("a");
    linkElement.href = "#";
    linkElement.textContent = "[Delete]"; 

    newListItem.appendChild(linkElement);
    items.appendChild(newListItem);
    linkElement.addEventListener("click", function () {
        items.removeChild(newListItem)
    })

}
