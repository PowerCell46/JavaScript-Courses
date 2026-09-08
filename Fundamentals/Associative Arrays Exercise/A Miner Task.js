function minerTask(array) {

    let minerMap = new Map();

    let index = 0;
    while (index < array.length) {
        let currentResourse = array[index];
        index++;
        let currentQuantity = Number(array[index]);
        index++;
        if (minerMap.has(currentResourse)) {
            let previousQuantity = minerMap.get(currentResourse);
            minerMap.set(currentResourse, (previousQuantity + currentQuantity));
        } else {
            minerMap.set(currentResourse, currentQuantity);
        }
    }
    let arrayOfKeys = Array.from(minerMap.keys())
    for (let [key, value] of minerMap) {
        console.log(`${key} -> ${value}`);
    }
}
