function solve() {
    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    // hexadecimalOption.selected = true;
    // binaryOption.selected = true;

    const convertMenuOptions = document.getElementById("selectMenuTo");
    convertMenuOptions.appendChild(binaryOption);
    convertMenuOptions.appendChild(hexadecimalOption);

    const convertButton = document.querySelector('button');
    convertButton.addEventListener('click', function () {
    innderFunction()});
    function innderFunction() {
        let enteredNumber = document.getElementById("input").value;
        let selectMenu = document.getElementById("selectMenuTo");
        let selectedOption = selectMenu.options[selectMenu.selectedIndex];
        let resultField = document.getElementById("result");
        switch (selectedOption.textContent) {
            case "Hexadecimal":
                let hexadecimalNumber = [];
                let hexadecimalObj = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
                while (enteredNumber > 0) {
                    if (enteredNumber >= 16) {
                        let remainingValue = enteredNumber % 16;
                        hexadecimalNumber.push(hexadecimalObj[remainingValue]);
                        enteredNumber = ((enteredNumber - remainingValue) / 16);
                    } else {
                        hexadecimalNumber.push(hexadecimalObj[enteredNumber]);
                        enteredNumber = 0;
                    }
                }
                hexadecimalNumber = hexadecimalNumber.reverse();
                resultField.value = hexadecimalNumber.join("");
                break;
    
            case "Binary":
                let binaryNumber = [];
                while (enteredNumber > 0) {
                    if (enteredNumber % 2 === 0) {
                        binaryNumber.push(0);
                        enteredNumber /= 2;
                    } else {
                        binaryNumber.push(1);
                        enteredNumber = (enteredNumber - 1) / 2;
                    }
                }
                binaryNumber = binaryNumber.reverse();
                resultField.value = binaryNumber.join("");
                break;
        }
    }
}
