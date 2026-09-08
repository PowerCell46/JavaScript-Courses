function solve() {
    let buttons = document.querySelectorAll("button");

    let checkButton = buttons[0];
    checkButton.addEventListener("click", function checkSudoku() {
        let cells = document.querySelectorAll("input");
        let theSudokuIsValid = true;

        if (cells.length === 9) {
        // Check rows
        let arrayOfElements = []
        for (let index = 0; index < 9; index += 3) {
            let firstPos = cells[index].value;
            let secondPos = cells[index + 1].value;
            let thirdPos = cells[index + 2].value; 
            arrayOfElements.push(firstPos, secondPos, thirdPos);
            let currentArray = [firstPos, secondPos, thirdPos];
            let currentSet = new Set(currentArray);
            if (currentArray.length != currentSet.size) {
                theSudokuIsValid = false;
                break;
            }
        }

        //Check columns
        for (let index = 0; index < 3; index++) {
            let firstCol = cells[index].value;
            let secondCol = cells[index + 3].value;
            let thirdCol = cells[index + 6].value;
            let currentArray = [firstCol, secondCol, thirdCol];
            let currentSet = new Set(currentArray);
            if (currentArray.length != currentSet.size) {
                theSudokuIsValid = false;
                break;
            }
        }

        //Check the whole square
        // let setOfElements = new Set(arrayOfElements);
        // if (arrayOfElements.length != setOfElements.size) {
        //     theSudokuIsValid = false;
        // }

        let table = document.querySelector("table");
        let finalMessage = document.querySelector('#check p');
        if (theSudokuIsValid) {
            table.style.border = "2px solid green";
            finalMessage.textContent = "You solve it! Congratulations!";
            finalMessage.style.color = "green";
        } else { 
            table.style.border = "2px solid red";
            finalMessage.textContent = "NOP! You are not done yet...";
            finalMessage.style.color = "red";
        }

        let clearButton = buttons[1];
        clearButton.addEventListener("click", function clearSudoku() {
        console.log("cleared");
        let finalMessage = document.querySelector('#check p');
        finalMessage.textContent = "";
        let table = document.querySelector("table");
        table.style.border = "none";
        let cells = document.querySelectorAll("input");
        for (let index = 0; index < 9; index++) {
            let currentCell = cells[index];
            currentCell.value = "";
        }
        })

        } else if (cells.length === 81) {
           let a;
        }
    })
}
