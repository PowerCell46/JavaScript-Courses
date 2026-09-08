function playingCards(currentFace, currentSuit) {
    currentFace = currentFace.toUpperCase();
    currentSuit = currentSuit.toUpperCase();
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = { "S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663" };
    if (faces.includes(currentFace) && Object.keys(suits).includes(currentSuit)) {
        return {
            face: currentFace,
            suit: currentSuit,
            toString() {
                return `${currentFace}${suits[currentSuit]}`;
            }
        };
    } else {
        throw new Error("Invalid card: " + currentFace + currentSuit);
    }
}
