function solution() {
    const recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let currentMicroelements = {
        carbohydrate: 0, flavour: 0, fat: 0, protein: 0
    }

    return function managementFunc(inputData) {
        inputData = inputData.split(" ");
        if (inputData[0] === "restock") {
            currentMicroelements[inputData[1]] = Number(inputData[2]);
            return `Success`

        } else if (inputData[0] === "prepare") {
            let recipe = inputData[1];
            let quantity = Number(inputData[2]);
            let neededMicroelements = {};
            for (let ingredient in recipies[recipe]) {
                neededMicroelements[ingredient] = recipies[recipe][ingredient] * quantity;
            }

            for (let ingredient in neededMicroelements) {
                let currentQuantity = currentMicroelements[ingredient];
                let neededQuantity = neededMicroelements[ingredient];
                if (currentQuantity < neededQuantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in neededMicroelements) {
                currentMicroelements[ingredient] -= neededMicroelements[ingredient];
            }

            return "Success";

        } else if (inputData[0] === "report") {
            return `protein=${currentMicroelements["protein"]} carbohydrate=${currentMicroelements["carbohydrate"]} fat=${currentMicroelements["fat"]} flavour=${currentMicroelements["flavour"]}`;
        }

    }

}
