function listProcessor(arrayOfCommands) {
    function operations() {
        let currentCollection = [];
        function add(item) {
            currentCollection.push(item)
        }
        function remove(item) {
            while (currentCollection.includes(item)) {
                let searchedIndex = currentCollection.indexOf(item);
                currentCollection.splice(searchedIndex, 1);
            }
        }
        function print() {
            console.log(currentCollection.join(","));
        }
        return {
            "add": add,
            "remove": remove,
            "print": print,
        }
    }
    
    let currentOperations = operations();
    for (const input of arrayOfCommands) {
        currentInput = input.split(" ");
        if (currentInput.length > 1) {
            currentOperations[currentInput[0]](currentInput[1]);
        } else {
            currentOperations[currentInput[0]]();
        }
    }
}
