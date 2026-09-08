function fancyBarcode(array) {
    let numberOfInputs = Number(array[0]);
    let index = 0;
    let pattern = /([@][#]{1,})([A-Z][A-Z,a-z,0-9]{4,}[A-Z])([@][#]{1,})/g;
    let currentNum = "";

    while (numberOfInputs > 0) {
        numberOfInputs--;
        index++;
        let currentBarcode = array[index];
        let isValid = false;
        let match = pattern.exec(currentBarcode);
        while (match !== null) {
            isValid = true;
            let currentString = match[2];
            let currentNum = "";

            for (let index = 0; index < currentString.length; index++) {
                let currentDigit = currentString[index];
                if (currentDigit === "0" || currentDigit === "1" || currentDigit === "2" || currentDigit === "3" || currentDigit === "4" || currentDigit === "5" || currentDigit === "6" || currentDigit === "7" || currentDigit === "8" || currentDigit === "9") {
                    currentNum += currentDigit;
                }
            }
            if (currentNum.length === 0) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${currentNum}`);
            }
            match = pattern.exec(currentBarcode);
        }
        if (isValid === false) {
            console.log("Invalid barcode");
        }

    }
}
