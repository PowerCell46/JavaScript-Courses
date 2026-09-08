function wall(array) {

    let smallestPartOfTheWall = Math.min(...array);
    smallestPartOfTheWall = array.indexOf(smallestPartOfTheWall);
    let arrayOfEveryDayUsedConcrete = [];
    let totalSum = 0;
    while (array[smallestPartOfTheWall] < 30) {
        let index = 0;
        let currentDayUsedConcrete = 0;
        while (index < array.length) {
            let currentPartOfTheWall = array[index];
            if (currentPartOfTheWall < 30) {
                currentPartOfTheWall++;
                currentDayUsedConcrete += 195;
                array.splice(index, 1, currentPartOfTheWall);
            }
            index++;
        }
        arrayOfEveryDayUsedConcrete.push(currentDayUsedConcrete);
        totalSum += currentDayUsedConcrete * 1900;
    }
    console.log(arrayOfEveryDayUsedConcrete.join(", "));
    console.log(`${totalSum} pesos`);
}
