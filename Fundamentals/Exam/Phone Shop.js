function phoneShop(array) {

    let arrayOfPhones = (array[0]).split(", ");
    let currentInput = array[1];
    let index = 0;

    while (true) {
        index++;
        currentInput = array[index];
        if (currentInput === "End") {
            break;
        }
        currentInput = (array[index]).split(" - ");
        let currentCommand = currentInput.shift();

        if (currentCommand == "Add") {
            let phone = currentInput.shift();
            if (arrayOfPhones.includes(phone) === false) {
                arrayOfPhones.push(phone);
            }

        } else if (currentCommand == "Remove") {
            let phone = currentInput.shift();
            if (arrayOfPhones.includes(phone) === true) {
                let phoneIndex = arrayOfPhones.indexOf(phone);
                arrayOfPhones.splice(phoneIndex, 1);
            }

        } else if (currentCommand == "Bonus phone") {
            let input = currentInput[0];
            input = input.split(":");
            let oldPhone = input[0];
            let newPhone = input[1];
            if (arrayOfPhones.includes(oldPhone) === true) {
                oldPhoneIndex = arrayOfPhones.indexOf(oldPhone);
                arrayOfPhones.splice((oldPhoneIndex + 1), 0, newPhone);
            }
        } else if (currentCommand == "Last") {
            let phone = currentInput[0];
            if (arrayOfPhones.includes(phone) === true) {
                let phoneIndex = arrayOfPhones.indexOf(phone);
                arrayOfPhones.splice(phoneIndex, 1);
                arrayOfPhones.push(phone);
            }
        }
    }

    console.log(arrayOfPhones.join(", "));
}
