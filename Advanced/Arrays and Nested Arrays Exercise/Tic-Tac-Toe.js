function ticTacToe(arrayOfMoves) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let index = 0;

    while (index < arrayOfMoves.length) {
        let currentMove = arrayOfMoves[index].split(" ");
        let currentArray = Number(currentMove[0]);
        let currentPosition = Number(currentMove[1]);
        while (dashboard[currentArray][currentPosition] != false) {
            console.log("This place is already taken. Please choose another!");
            arrayOfMoves.splice(index, 1);
            currentMove = arrayOfMoves[index].split(" ");
            currentArray = Number(currentMove[0]);
            currentPosition = Number(currentMove[1]);
        }
        if (index % 2 == 0) {
            let currentPlayer1 = "X";
            dashboard[currentArray][currentPosition] = "X";
        } else {
            let currentPlayer2 = "O";
            dashboard[currentArray][currentPosition] = "O";
        }

        if (!dashboard[0].includes(false) && !dashboard[1].includes(false) && !dashboard[2].includes(false)) {
            console.log("The game ended! Nobody wins :(");
            for (let array of dashboard) {
                console.log(array.join("\t"));
            }
            break;
        }

        if (!dashboard[currentArray].includes(false) && !dashboard[currentArray].includes("O") || dashboard[0][currentPosition] === "X" && dashboard[1][currentPosition] === "X" && dashboard[2][currentPosition] === "X" || dashboard[0][0] === "X" && dashboard[1][1] === "X" && dashboard[2][2] === "X" || dashboard[0][2] === "X" && dashboard[1][1] === "X" && dashboard[2][0] === "X") {
            console.log("Player X wins!");
            for (let array of dashboard) {
                console.log(array.join("\t"));
            }
            break;
        }

        if (!dashboard[currentArray].includes(false) && !dashboard[currentArray].includes("X") || dashboard[0][currentPosition] === "O" && dashboard[1][currentPosition] === "O" && dashboard[2][currentPosition] === "O" || dashboard[0][0] === "O" && dashboard[1][1] === "O" && dashboard[2][2] === "O" || dashboard[0][2] === "O" && dashboard[1][1] === "O" && dashboard[2][0] === "O") {
            console.log("Player O wins!");
            for (let array of dashboard) {
                console.log(array.join("\t"));
            }
            break;
        }
        index++;
    }
}
