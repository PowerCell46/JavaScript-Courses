function inventory(array) {

    let arrayOfObjects = [];
    for (let index = 0; index < array.length; index++) {
        let currentInput = (array[index]).split(" / ");
        let currentHeroObj = {
            hero: currentInput[0],
            level: Number(currentInput[1]),
            items: currentInput[2],
            printHero() {

                return "Hero: " + this.hero
            },
            printLevel() {
                return "level => " + this.level 
            },
            printItems() {
                return "items => " + this.items
            }
        }
        arrayOfObjects.push(currentHeroObj);
        // console.log(currentHeroObj);
    }

    let arrayOfLevels = []
    for (let x = 0; x < arrayOfObjects.length; x++) {
        let currentObj = arrayOfObjects[x];
        arrayOfLevels.push(currentObj["level"]);
    }

    while (arrayOfObjects.length > 0) {
        let currentSmallestLevel = Math.min.apply(Math, arrayOfLevels);
        let currentSmallestLevelIndex = arrayOfLevels.indexOf(currentSmallestLevel);
        arrayOfLevels.splice(currentSmallestLevelIndex, 1);
        let smallestObj = arrayOfObjects.splice(currentSmallestLevelIndex, 1);
        // console.log(smallestObj[0]);
        let currentObj = smallestObj[0];
        console.log(currentObj.printHero());
        console.log(currentObj.printLevel());
        console.log(currentObj.printItems());
    }
}
