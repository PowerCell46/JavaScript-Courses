function theHuntingGames(array) {

    let adventureDays = Number(array[0]);
    let numberOfPlayers = Number(array[1]);
    let energyOfTheGroup = Number(array[2]);
    let waterForAPersonForADay = Number(array[3]);
    let foodForAPersonForADay = Number(array[4]);

    let foodForEveryone = foodForAPersonForADay * numberOfPlayers * adventureDays;
    let waterForEveryone = waterForAPersonForADay * numberOfPlayers * adventureDays;

    let index = 5;
    let counter = 0;
    while (index < array.length) {
        let currentLostEnergy = Number(array[index]);
        energyOfTheGroup -= currentLostEnergy;
        if (energyOfTheGroup <= 0) {
            console.log(`You will run out of energy. You will be left with ${foodForEveryone.toFixed(2)} food and ${waterForEveryone.toFixed(2)} water.`)
            break;
        }
        counter++;
        if (counter % 2 === 0) {
            energyOfTheGroup += ((energyOfTheGroup / 100) * 5);
            waterForEveryone -= ((waterForEveryone / 100) * 30);
        }

        if (counter % 3 === 0) {
            foodForEveryone -= (foodForEveryone / numberOfPlayers);
            energyOfTheGroup += (energyOfTheGroup / 10);
        }

        index++;

    }

    if (energyOfTheGroup > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energyOfTheGroup.toFixed(2)} energy!`);
    }
}
