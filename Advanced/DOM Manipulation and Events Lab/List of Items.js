function addItem() {
    let inputElement = document.getElementById("newItemText").value;
    let liElement = document.createElement("li"); // the newly created li
    let itemsElement = document.getElementById("items"); // getting the whole list items
    liElement.textContent = inputElement; // adding the input value to the newly created li element
    itemsElement.appendChild(liElement); // appending the newly created li to the list items
}
