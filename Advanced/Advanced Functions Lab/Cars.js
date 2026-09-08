function cars(array) {

    let objectsKeeper = {};

    for (let data of array) {
        data = data.split(" ");

        if (data[0] === "create") {
            if (data[2] === "inherit") {
                objectsKeeper[data[1]] = { "inherit-obj": data[3] };

            } else {
                objectsKeeper[data[1]] = {};
            }

        } else if (data[0] === "set") {
            objectsKeeper[data[1]][data[2]] = data[3];

        } else if (data[0] === "print") {
            let currentObj = objectsKeeper[data[1]];
            let printResult = [];

            if (Object.keys(currentObj).includes("inherit-obj")) {
                for (let key in currentObj) {
                    if (key !== "inherit-obj") {
                        printResult.push(`${key}:${currentObj[key]}`);
                    }
                }
                let parentObj = objectsKeeper[currentObj["inherit-obj"]];
                for (let key in parentObj) {
                    if (key !== "inherit-obj") {
                    printResult.push(`${key}:${parentObj[key]}`);
                    }
                }
                if (Object.keys(parentObj).includes("inherit-obj")) {
                    let grandparentObj = objectsKeeper[objectsKeeper[currentObj["inherit-obj"]]["inherit-obj"]];
                    for (let key in grandparentObj) {
                        if (key !== "inherit-obj") {
                        printResult.push(`${key}:${grandparentObj[key]}`);
                        }
                    }
                }

            } else {
                for (let key in currentObj) {
                    printResult.push(`${key}:${currentObj[key]}`);
                }
            }

            console.log(printResult.join(","));
        }
    }
}
