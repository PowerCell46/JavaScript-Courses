function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll("button");
    const encodeAndSentButton = buttons[0];
    const decodeAndReadButton = buttons[1];

    encodeAndSentButton.addEventListener("click", () => {
        const enteredMessage = document.querySelector("textarea").value;
        let newMessage = "";
        for (let letter of enteredMessage) {
            newMessage += String.fromCharCode(letter.charCodeAt() + 1);
        }
        document.querySelector("textarea").value = "";
        document.querySelectorAll("textarea")[1].value = newMessage;
    });

    decodeAndReadButton.addEventListener("click", () => {
        const decodedEnteredMessage = document.querySelectorAll("textarea")[1].value;
        let newMessage = "";
        for (let letter of decodedEnteredMessage) {
            newMessage += String.fromCharCode(letter.charCodeAt() - 1);
        } 
        document.querySelectorAll("textarea")[1].value = newMessage;
    })
}
