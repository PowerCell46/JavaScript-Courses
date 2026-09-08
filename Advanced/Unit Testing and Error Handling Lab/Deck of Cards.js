function printDeckOfCards(array) {
    function createCard(currentFace, currentSuit) {
        currentFace = currentFace.toUpperCase();
        currentSuit = currentSuit.toUpperCase();
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = { "S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663" };
        if (faces.includes(currentFace) && Object.keys(suits).includes(currentSuit)) {
            return `${currentFace}${suits[currentSuit]}`;

        } else {
            return "Invalid Card";
        }
    }
    let cardsResult = [];
    for (let card of array) {
        card = card.split("");
        let suit = card.pop();
        let face = card.join("");
        let currentResult = createCard(face, suit);
        if (currentResult === "Invalid Card") {
            return console.log(`Invalid card: ${face}${suit}`);
        }
        cardsResult.push(currentResult);
    }
    return console.log(cardsResult.join(" "));
}
