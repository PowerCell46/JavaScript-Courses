function generateReport() {
        let resultArray = []
        const tableHeadings = document.querySelectorAll("th input");
        let headingObj = {} // номер на позицията и име на клетката
        let checkedIndexes = []; // индексите на чекнатите колони
        let index = 1;
        for (heading of tableHeadings) {
            if (heading.checked) {
                checkedIndexes.push(index);
            }
            index++;
        }
        let tableHeadingsFinal = document.querySelectorAll("th");
        index = 1;
        for (let heading of tableHeadingsFinal) {
            let headingData = heading.textContent;
            headingData = headingData.split("");
            headingData.pop();
            headingData = headingData.join("");
            headingObj[index] = headingData;
            index++;
        }
        const tableRows = document.querySelectorAll("td");
        const numberOfRows = (tableRows.length / Object.keys(headingObj).length); // брой редове
        let rotatingIndex = 0; // този индекс помни до къде сме стигнали (брой на клетката)
        for (let index = 0; index < numberOfRows; index++) { // в този цикъл въртим всеки един ред
            let currentObj = {};
            let counter = 1;
            for (let xedni = rotatingIndex; xedni < (rotatingIndex + Object.keys(headingObj).length); xedni++) { // взимаме всички клетки на current row-a
                let currentCell = tableRows[xedni].textContent;
                if (checkedIndexes.includes(counter)) { // ако индексът на current cell-a е тикнат, добави стойноста към currentObj
                    currentObj[(headingObj[counter]).toLowerCase()] = currentCell;
                }
                counter++;
            }
            rotatingIndex += Object.keys(headingObj).length; // увеличаваме го с дължината на current row-a
            resultArray.push(currentObj);
        } 
        let outputArea = document.getElementById('output');
        outputArea.textContent = JSON.stringify(resultArray);
    }
