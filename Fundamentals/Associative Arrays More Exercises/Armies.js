function armies(array) {

    let armyObj = {}

    for (let index = 0; index < array.length; index++) {
        let currentInput = array[index].split(" ");

        if (currentInput[currentInput.length - 1] === "arrives") {
            currentInput.pop();
            currentInput = currentInput.join(" ");
            if (!armyObj.hasOwnProperty(currentInput)) {
                armyObj[currentInput] = {}
            }

        } else if (currentInput[currentInput.length - 1] === "defeated") {
            currentInput.pop();
            currentInput = currentInput.join(" ");
            if (armyObj.hasOwnProperty(currentInput)) {
                delete armyObj[currentInput];
            }

        } else if (currentInput[1] === "+") {
            let armyName = currentInput[0];
            let armyCount = Number(currentInput[2]);
            let arrayOfGenerals = Object.keys(armyObj);
            for (let general of arrayOfGenerals) {
                let currentGeneralArmies = Object.keys(armyObj[general]);
                if (currentGeneralArmies.includes(armyName)) {
                    let searchedIndex = currentGeneralArmies.indexOf(armyName);
                    let previousValue = Object.values(armyObj[general])[searchedIndex];
                    armyObj[general][armyName] = (armyCount + previousValue);
                }
            }


        } else {
            let armyCount = Number(currentInput.pop());
            let armyName = currentInput.pop().split("");
            armyName.pop();
            armyName = armyName.join("");
            let leader = currentInput.join(" ");
            leader = leader.split("");
            leader.pop();
            leader = leader.join("");
            if (armyObj.hasOwnProperty(leader)) {
                armyObj[leader][armyName] = armyCount;
            }
        }
    }

    let objOfTotalArmies = {}
    let arrayOfGenerals = Object.keys(armyObj);

    for (let general of arrayOfGenerals) {
        let totalGeneralArmies = 0;
        let currentGeneralArmies = Object.values(armyObj[general]);
        for (let army of currentGeneralArmies) {
            totalGeneralArmies += army;
        }
        objOfTotalArmies[general] = totalGeneralArmies;
    }
    let arrayOfArmiesOrdered = Object.values(objOfTotalArmies).sort((a, b) => b - a);

    for (let currentArmie of arrayOfArmiesOrdered) {

        for (let general of arrayOfGenerals) {
            let currentGeneralArmies = objOfTotalArmies[general];
            if (currentArmie === currentGeneralArmies) {
                console.log(`${general}: ${currentArmie}`);
                let currentGeneralArmies = Object.values(armyObj[general]).sort((a, b) => b - a);
                let currentGeneralArmiesNames = Object.keys(armyObj[general]);
                for (let currentArmie of currentGeneralArmies) {
                    for (let currentArmieName of currentGeneralArmiesNames) {
                        if (currentArmie === armyObj[general][currentArmieName]) {
                            console.log(`>>> ${currentArmieName} - ${currentArmie}`);
                        }
                    }

                }
            }
        }



    }
}
