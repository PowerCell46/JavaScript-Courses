function netherRealms(workingString) {
    workingString = workingString.split(/\s*,\s*/);
    let demonBook = {};

    for (let string of workingString) {
      let currentHealth = 0;
      let forbidden = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '+', '-', '*', '/', "."];
  
      for (let char of string) {
        if (!forbidden.includes(char)) {
          currentHealth += char.charCodeAt();
        }
      }
  
      let currentRegex = /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;
      let currentNumbers = string.match(currentRegex);
        if (currentNumbers === null) {
        currentNumbers = [];
        } else {
        currentNumbers = currentNumbers.map(match => parseFloat(match));
        }
      let currentDamage = currentNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      
      for (let char of string) {
        if (char === "*") {
            currentDamage *= 2
        } else if (char === "/") {
            currentDamage /= 2
        }
      }
      
      demonBook[string] = [currentHealth, currentDamage];
    }

    let sortedDemons = Object.keys(demonBook).sort((a,b) => a.localeCompare(b));

    for(let demon of sortedDemons) {
        console.log(`${demon} - ${demonBook[demon][0]} health, ${demonBook[demon][1].toFixed(2)} damage`);
    }
  }
