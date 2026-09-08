function townPopulation(array) {
    let townPopulationObj = {}
    for (let input of array) {
        input = input.split(" <-> ");
        let name = input[0];
        let population = input[1];
        if (!Object.keys(townPopulationObj).includes(name)) {
            townPopulationObj[name] = Number(population);
        } else {
            townPopulationObj[name] += Number(population);
        }
    }
    let keys = Array.from(Object.keys(townPopulationObj));
    for(let key of keys) {
        console.log(`${key} : ${townPopulationObj[key]}`);
    }
}
