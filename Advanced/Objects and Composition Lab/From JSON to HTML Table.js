function fromJSONToHTMLTable(input) {
    let returnResult = [];
    function removeReservedCharacters(word) {
        let finalWord = "";
        word += "";
        for (let char of word) {
            if (char == "&" || char == "<" || char == ">" || char == `"` || char == "'") {
                switch (char) {
                    case "&":
                        finalWord += "&amp;";
                        break;
                    case "<":
                        finalWord += "&lt;";
                        break;
                    case ">":
                        finalWord += "&gt;";
                        break;
                    case `"`:
                        finalWord += "&quot;";
                        break;
                    case "'":
                        finalWord += "&#39;";
                }
            } else {
                finalWord += char;
            }
        }
        return finalWord;
    }

    let inputData = JSON.parse(input);
    let topRow = null;
    for (let data of inputData) {
        topRow = Array.from(Object.keys(data));
    }
    returnResult.push("<table> ");
    let firstRow = "   <tr>";
    for (let data of topRow) {
        data = removeReservedCharacters(data);
        firstRow += "<th>" + data + "</th>";
    }
    firstRow += "</tr>";
    returnResult.push(firstRow);
    for (let currentRow of inputData) {
        let currentString = "   <tr>";
        let currentRowData = Object.values(currentRow);
        for (let word of currentRowData) {
            word = removeReservedCharacters(word);
            currentString += "<td>" + word + "</td>";
        }
        currentString += "</tr>";
        returnResult.push(currentString);
    }
    returnResult.push("</table>");
    return returnResult.join("\n");
}
