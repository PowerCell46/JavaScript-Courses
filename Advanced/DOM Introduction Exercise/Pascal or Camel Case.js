function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value; 
  let resultField = document.getElementById('result');
  
  switch (convention) {
    case "Camel Case":
      text = text.split(" ");
      let finalText = "" + text[0].toLowerCase();
      for (let index = 1; index < text.length; index++) {
        let currentText = text[index].toLowerCase().split("");
        let firstChar = currentText.shift();
        currentText.unshift(firstChar.toUpperCase());
        finalText += currentText.join("");
      }
      resultField.innerText = finalText;
      break;

    case "Pascal Case":
      text = text.split(" ");
      let printText = "";
      for (let index = 0; index < text.length; index++) {
        let currentText = text[index].toLowerCase().split("");
        let firstChar = currentText.shift();
        currentText.unshift(firstChar.toUpperCase());
        printText += currentText.join("");
      }
      resultField.innerText = printText;
      break;

    default:
      resultField.innerText = "Error!";
      break;
  }
}
