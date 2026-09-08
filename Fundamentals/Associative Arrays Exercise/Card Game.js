function cardGame(array) {

    let arrayOfNames = [];
    let arrayOfPoints = [];
    let arrayOfAllCards = [];
    let thisIsNotTheFirstTimeThisPlayerIsPlaying = false;
    let searchedIndex = 0

    for (let index = 0; index < array.length; index++) {
        let currentInput = array[index].split(": ");
        let currentName = currentInput[0];
        let arrayOfCards = currentInput[1].split(", ");
        let currentPlayerCards = [];
        let currentPlayerPoints = 0;

        if (arrayOfNames.includes(currentName)) {
            searchedIndex = arrayOfNames.indexOf(currentName);
            arrayOfNames.splice(searchedIndex, 1);
            currentPlayerCards = arrayOfAllCards.splice(searchedIndex, 1)
            currentPlayerPoints = Number(arrayOfPoints.splice(searchedIndex, 1));
            thisIsNotTheFirstTimeThisPlayerIsPlaying = true;
        }

        for (let x = 0; x < arrayOfCards.length; x++) {
            let currentCard = arrayOfCards[x];

            if (currentPlayerCards.includes(currentCard)) {
                continue;
            }
            if (currentPlayerCards.length > 0) {
                if ((currentPlayerCards[0]).includes(currentCard)) {
                    continue;
                }
            }
            currentPlayerCards.push(currentCard);

            let powerOfTheCard = (currentCard[0]);

            if (currentCard.length === 3) {
                powerOfTheCard = currentCard[0] + currentCard[1];
                powerOfTheCard = Number(powerOfTheCard);
            } else {
                if (powerOfTheCard === "J") {
                    powerOfTheCard = 11;
                } else if (powerOfTheCard === "Q") {
                    powerOfTheCard = 12;
                } else if (powerOfTheCard === "K") {
                    powerOfTheCard = 13;
                } else if (powerOfTheCard === "A") {
                    powerOfTheCard = 14;
                } else {
                    powerOfTheCard = Number(powerOfTheCard);
                }
            }

            let typeOfCard = currentCard[1];
            if (currentCard.length === 3) {
                typeOfCard = currentCard[2];
            }

            if (typeOfCard === "S") {
                typeOfCard = 4;
            } else if (typeOfCard === "H") {
                typeOfCard = 3;
            } else if (typeOfCard === "D") {
                typeOfCard = 2;
            } else if (typeOfCard === "C") {
                typeOfCard = 1;
            }

            let result = powerOfTheCard * typeOfCard;
            currentPlayerPoints += result;
        }
        if (thisIsNotTheFirstTimeThisPlayerIsPlaying === true) {
            thisIsNotTheFirstTimeThisPlayerIsPlaying = false;
            arrayOfNames.splice(searchedIndex, 0, currentName);
            arrayOfPoints.splice(searchedIndex, 0, currentPlayerPoints);

            let newArrayOfAllCards = [];
            
                for(let x = 0; x < currentPlayerCards[0].length; x++) {
                    let currentCard = currentPlayerCards[0][x];
                    newArrayOfAllCards.push(currentCard);
                }
                for(let x = 1; x < currentPlayerCards.length; x++) {
                    let currentCard = currentPlayerCards[x];
                    newArrayOfAllCards.push(currentCard);
                }
            arrayOfAllCards.splice(searchedIndex, 0, newArrayOfAllCards);
        } else {
            arrayOfNames.push(currentName);
            arrayOfPoints.push(currentPlayerPoints);
            arrayOfAllCards.push(currentPlayerCards);
        }

    }
    for (let index = 0; index < arrayOfNames.length; index++) {
        let currentName = arrayOfNames[index];
        let currentPoints = arrayOfPoints[index];
        console.log(`${currentName}: ${currentPoints}`)
    }
}
