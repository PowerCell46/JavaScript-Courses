function jsTask(inputData) {
    const dataKeeper = {};
    const names = [];
    
    for (data of  inputData) {
        if (data === "End") { break; }

        const currentData = data.split(" ");
        
        switch (currentData[0]) {
            case "Enroll": {
                if (!Object.keys(dataKeeper).includes(currentData[1])) {
                    dataKeeper[currentData[1]] = [];
                    names.push(currentData[1]);
                
                } else {
                    console.log(`${currentData[1]} is already enrolled.`);
                }

                break;
            }
            case "Learn": {
                if (!Object.keys(dataKeeper).includes(currentData[1])) {
                    console.log(`${currentData[1]} doesn't exist.`);
                
                } else if (dataKeeper[currentData[1]].includes(currentData[2])) {
                    console.log(`${currentData[1]} has already learnt ${currentData[2]}.`);
                
                } else {
                    dataKeeper[currentData[1]].push(currentData[2]);
                }

                break;
            }
            case "Unlearn": {
                if (!Object.keys(dataKeeper).includes(currentData[1])) {
                    console.log(`${currentData[1]} doesn't exist.`);
                
                } else if (!dataKeeper[currentData[1]].includes(currentData[2])) {
                    console.log(`${currentData[1]} doesn't know ${currentData[2]}.`);

                } else {
                    dataKeeper[currentData[1]].splice(dataKeeper[currentData[1]].indexOf(currentData[2]), 1);
                }

                break;
            }
        }
    }

    console.log("Heroes:");
    for (person of names) {
        console.log(`== ${person}: ${dataKeeper[person].join(", ")}`);
    }
}
