function solve() {
  let inputText = document.getElementById("input").value;
  inputText = inputText.split(".");
  let finalText = "";
  let currentParagraph = "  <p>";
  let counter = -1;
  for (let sentence of inputText) {
    if (sentence.length === 0) {
      continue;
    }
    counter++;
    if (counter === 3) {
      finalText += "\n" + currentParagraph + "</p>";
      currentParagraph = `  <p>${sentence}.`;
      counter = 0;
    } else {
      currentParagraph += `${sentence}.`;
    }
  }
  if (currentParagraph.length !== 5) {
    finalText += currentParagraph + "</p>";
  }

  let divContainer = document.getElementById("output");
  divContainer.innerHTML = finalText;
} 
