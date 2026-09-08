function monthPrinter(month) {

    month = month + ""
let printedOutput = " ";

switch(month) {
case "1": printedOutput = "January"; break;
case "2": printedOutput = "February"; break;
case "3": printedOutput = "March"; break;
case "4": printedOutput = "April"; break;
case "5": printedOutput = "May"; break;
case "6": printedOutput = "June"; break;
case "7": printedOutput = "July"; break;
case "8": printedOutput = "August"; break;
case "9": printedOutput = "September"; break;
case "10": printedOutput = "October"; break;
case "11": printedOutput = "November"; break;
case "12": printedOutput = "December"; break;
default: printedOutput = "Error!"; break;
}
console.log(printedOutput);
}
