function shoppingList(array) {

    let shoppingListArray = (array[0]).split("!");
    let index = 0;
    let current_input = (array[index]).split(" ");

    while (true) {
        index++;
        current_input = (array[index]).split(" ");
        if (current_input[0] == "Go" && current_input[1] == "Shopping!") {
            break;
        }
        if (current_input[0] === "Urgent") {
            if (shoppingListArray.includes(current_input[1]) === false) {
                shoppingListArray.unshift(current_input[1]);
            } else {
                continue;
            }

        } else if (current_input[0] === "Unnecessary") {
            while (shoppingListArray.includes(current_input[1])) {
                let searched_index = shoppingListArray.indexOf(current_input[1]);
                shoppingListArray.splice(searched_index, 1);
            }
            
        } else if (current_input[0] === "Correct") {
            if (shoppingListArray.includes(current_input[1]) === true) {
                let searched_index1 = shoppingListArray.indexOf(current_input[1]);
                shoppingListArray.splice(searched_index1, 1, current_input[2]);
            }
        } else if (current_input[0] == "Rearrange") {
            if (shoppingListArray.includes(current_input[1]) == true) {
                let searched_index2 = shoppingListArray.indexOf(current_input[1]);
                shoppingListArray.splice(searched_index2, 1);
                shoppingListArray.push(current_input[1]);
            }
        }
    }
    console.log(shoppingListArray.join(", "));

}
