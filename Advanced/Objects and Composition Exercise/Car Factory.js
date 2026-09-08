function carFactory(obj) {
    let engine = null;
    let enginePower = obj["power"];

    if (enginePower < 91) {
        engine = { power: 90, volume: 1800 }
    } else if (enginePower > 90 && enginePower < 121) {
        engine = { power: 120, volume: 2400 }
    } else {
        engine = { power: 200, volume: 3500 }
    }
    let carriages = { "hatchback": { type: 'hatchback', color: obj["color"] }, "coupe": { type: 'coupe', color: obj["color"] } };
    let carriage = carriages[obj["carriage"]];
    let wheelsize = obj["wheelsize"];
    if (wheelsize % 2 === 0) {
        wheelsize--;
    }
    return { model: obj["model"], engine: engine, carriage: carriage, wheels: [wheelsize, wheelsize, wheelsize, wheelsize] }
}
