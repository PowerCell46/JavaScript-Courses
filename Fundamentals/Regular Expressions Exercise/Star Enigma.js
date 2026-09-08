function starEnigma(dataArray) {
    let attackedPlanets = {};
    let destroyedPlanets = {};

    for (let index = 1; index < dataArray.length; index++) {
        let currentData = dataArray[index];
        let currentCounter = 0;
        let chars = ["s", "t", "a", "r"] 
        

        for (let letter of currentData) {
            if (chars.includes(letter.toLowerCase())) {
                currentCounter++;
            }
        }
        let desypheredString = "";
        
        for (let letter of currentData) {
            desypheredString += String.fromCharCode(letter.charCodeAt() - currentCounter)
        }
        
        const myRegex = /^([^@\-!:>]{0,}?)\@([A-Z|a-z]+)([^@\-!:>]{0,}?)\:(([0-9]+))([^@\-!:>]{0,}?)\!(([A|D]))\!([^@\-!:>]{0,}?)\-\>(([0-9]+))([^@\-!:>]{0,}?)/
        
        let finalResult = myRegex.exec(desypheredString);
       
        if (finalResult != null) {
            let planet = finalResult[2];
            let population = finalResult[4];
            let attackType = finalResult[7];
            let soldiersCount = finalResult[10];
            if(attackType == "A") {
                attackedPlanets[planet] = [population, attackType, soldiersCount];
            } else {
                destroyedPlanets[planet] = [population, attackType, soldiersCount];
            }
        }
    }

    let sortedAttackedKeys = Object.keys(attackedPlanets).sort((a,b) => a.localeCompare(b));
    let sortedDestroyedKeys = Object.keys(destroyedPlanets).sort((a,b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sortedAttackedKeys.length}`);
    for(let planet of sortedAttackedKeys) {
        console.log(`-> ${planet}`);
    }
    
    console.log(`Destroyed planets: ${sortedDestroyedKeys.length}`);
    for(let planet of sortedDestroyedKeys) {
        console.log(`-> ${planet}`);
    }
    
}
