function gladiatorInventory(input_array) {

    let inventory = input_array[0].split(" ");

    for (let index = 1; index < input_array.length; index++) {
        current_input = input_array[index].split(" ");
        current_command = current_input.shift();
        current_equipment = current_input.shift();

        switch (current_command) {

            case "Buy":
                if (inventory.includes(current_equipment) === false) {
                    inventory.push(current_equipment);
                } break;
            case "Trash":
                if (inventory.includes(current_equipment) === true) {
                    let searchedIndex1 = inventory.indexOf(current_equipment);
                    inventory.splice(searchedIndex1, 1);
                } break;
            case "Repair":
                if (inventory.includes(current_equipment) === true) {
                    let searchedIndex2 = inventory.indexOf(current_equipment);
                    inventory.splice(searchedIndex2, 1);
                    inventory.push(current_equipment);
                } break;
            case "Upgrade":
                current_equipment = current_equipment.split("-");
                if (inventory.includes(current_equipment[0]) === true) {
                    let searchedIndex3 = inventory.indexOf(current_equipment[0]);
                    inventory.splice(searchedIndex3 + 1, 0, current_equipment[0] + ":" + current_equipment[1]);
                } break;
        }
    }

    console.log(inventory.join(" "));

}
