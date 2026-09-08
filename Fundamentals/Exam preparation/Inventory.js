function inventory(array) {
    let journal = array[0].split(", ");

    let index = 1;
    let currentInput = array[1];

    while (currentInput !== "Craft!") {
        currentInput = currentInput.split(" - ");
        switch (currentInput[0]) {
            case "Collect":
                if (!journal.includes(currentInput[1])) {
                    journal.push(currentInput[1]);
                }
                break;

            case "Drop":
                if (journal.includes(currentInput[1])) {
                    let searchIndex = journal.indexOf(currentInput[1]);
                    journal.splice(searchIndex, 1);
                }
                break;

            case "Combine Items":
                currentInput = currentInput[1].split(":");
                if (journal.includes(currentInput[0])) {
                    let searchIndex = journal.indexOf(currentInput[0]);
                    journal.splice(searchIndex + 1, 0, currentInput[1]);
                }
                break;

            case "Renew":
                if (journal.includes(currentInput[1])) {
                    let searchIndex = journal.indexOf(currentInput[1]);
                    journal.splice(searchIndex, 1);
                    journal.push(currentInput[1]);
                }
                break;
        }

        index++;
        currentInput = array[index];
    }

console.log(journal.join(", "));
}
