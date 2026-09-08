function result() {
    
    let func = {
        mage(type) {
            let currentObj = {}
            currentObj["name"] = type; currentObj["health"] = 100; currentObj["mana"] = 100;
            let mageObj = {
                cast(spell) { currentObj["mana"] -= 1; console.log(`${currentObj["name"]} cast ${spell}`) },
                get mana() {return currentObj["mana"]},
                get health() {return currentObj["health"]},
                get name() {return currentObj["name"]}
            }
            return mageObj;
        },

        fighter(type) {
            let currentObj = {}
            currentObj["name"] = type; currentObj["health"] = 100; currentObj["stamina"] = 100;
            let fighterObj = {
                fight() { currentObj["stamina"] -= 1; console.log(`${currentObj["name"]} slashes at the foe!`) },
                get stamina() {return currentObj["stamina"]},
                get health() {return currentObj["health"]},
                get name() {return currentObj["name"]}
            };
            return fighterObj;
        }
    }
    return func;
}
