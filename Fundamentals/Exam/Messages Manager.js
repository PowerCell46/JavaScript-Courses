function messagesManager(array) {
    let capacityOfMessagesPerUser = Number(array[0]);
    let index = 1;
    let currentInput = array[index];
    let messageObj = {}

    while (currentInput != "Statistics") {
        currentInput = currentInput.split("=");
        switch (currentInput[0]) {
            case "Add":
                if (!Object.keys(messageObj).includes(currentInput[1])) {
                    messageObj[currentInput[1]] = {}
                    messageObj[currentInput[1]][Number(currentInput[2])] = Number(currentInput[3]);
                }
                break;

            case "Message":
                let sender = currentInput[1];
                let receiver = currentInput[2];
                if (Object.keys(messageObj).includes(sender) && Object.keys(messageObj).includes(receiver)) {
                    let senderSentMessages = Object.keys(messageObj[sender]);
                    senderSentMessages = Number(senderSentMessages[0]);
                    senderSentMessages++;
                    let senderReceivedMessages = Object.values(messageObj[sender]);
                    senderReceivedMessages = Number(senderReceivedMessages[0]);
                    if (senderSentMessages + senderReceivedMessages >= capacityOfMessagesPerUser) {
                        console.log(`${sender} reached the capacity!`);
                        delete messageObj[sender];
                    } else {
                        messageObj[sender] = {}
                        messageObj[sender][senderSentMessages] = senderReceivedMessages;
                    }
                    let receiverSentMessages = Object.keys(messageObj[receiver]);
                    receiverSentMessages = Number(receiverSentMessages[0]);
                    let receiverReceivedMessages = Object.values(messageObj[receiver]);
                    receiverReceivedMessages = Number(receiverReceivedMessages[0]);
                    receiverReceivedMessages++;
                    if (receiverSentMessages + receiverReceivedMessages >= capacityOfMessagesPerUser) {
                        console.log(`${receiver} reached the capacity!`);
                        delete messageObj[receiver];
                    } else {
                        messageObj[receiver] = {}
                        messageObj[receiver][receiverSentMessages] = receiverReceivedMessages;
                    }
                }
                break;

            case "Empty":
                let username = currentInput[1];
                if (username == "All") {
                    messageObj = {}
                } else {
                    if (Object.keys(messageObj).includes(username)) {
                        delete messageObj[username];
                    }
                }
                break;
        }
        index++;
        currentInput = array[index];
    }

    console.log(`Users count: ${Object.keys(messageObj).length}`);
    let arrayOfUsernames = Array.from(Object.keys(messageObj));
    for (let username of arrayOfUsernames) {
        let currentSentMessages = Object.keys(messageObj[username]);
        currentSentMessages = Number(currentSentMessages[0]);
        let currentReceivedMessages = Object.values(messageObj[username]);
        currentReceivedMessages = Number(currentReceivedMessages[0]);
        console.log(`${username} - ${currentSentMessages + currentReceivedMessages}`);
    }
}
