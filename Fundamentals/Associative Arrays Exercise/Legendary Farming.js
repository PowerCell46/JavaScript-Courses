function legendaryFarming(inputString) {
    inputString = inputString.split(" ");
    let containerObj = { "shards": 0, "fragments": 0, "motes": 0, "other": 0 };
    let junkObj = {}

    for (let index = 0; index < inputString.length; index += 2) {
        let currentQuantity = Number(inputString[index]);
        let currentItem = inputString[index + 1].toLowerCase();
        switch (currentItem) {
            case "shards": {
                containerObj[currentItem] += currentQuantity;
            } break;
            case "fragments": {
                containerObj[currentItem] += currentQuantity;
            } break;
            case "motes": {
                containerObj[currentItem] += currentQuantity;
            } break;
            default: {
                containerObj["other"] += currentQuantity;

                if (!Object.keys(junkObj).includes(currentItem)) {
                    junkObj[currentItem] = currentQuantity
                } else {
                    junkObj[currentItem] += currentQuantity;
                }
            }
        }
        if (containerObj[currentItem] >= 250) {
            if (currentItem == "shards") {
                console.log(`Shadowmourne obtained!`);
            } else if (currentItem === "fragments") {
                console.log(`Valanyr obtained!`);
            } else if (currentItem === "motes") {
                console.log(`Dragonwrath obtained!`);
            }
            containerObj[currentItem] -= 250;
            break;
        }

    }

    const sortedItemsObj = Object.entries(containerObj).sort((a, b) => {
        // Sort by quantity in descending order
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }

        // If quantities are the same, sort by name in ascending order
        return a[0].localeCompare(b[0]);
    })
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});

    for (let item of Object.keys(sortedItemsObj)) {
        if (item != "other") {
            console.log(`${item}: ${sortedItemsObj[item]}`);
        }
    }

    const sortedJunk = Object.fromEntries( Object.entries(junkObj).sort((a, b) => a[0].localeCompare(b[0])));
    
    for (let key of Object.keys(sortedJunk)) {
        console.log(`${key}: ${sortedJunk[key]}`);
    }
}
