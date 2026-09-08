function addItem() {
    const textElement = document.getElementById("newItemText");
    const valueOfTheElement = document.getElementById("newItemValue");
    let menuDropdown = document.getElementById("menu");
    const currentOption = document.createElement("option");
    currentOption.textContent = textElement.value;
    currentOption.value = valueOfTheElement.value;
    textElement.value = "";
    valueOfTheElement.value = "";
    menuDropdown.appendChild(currentOption);
}
