function coffeeTask([coffeearr, numberOfCommands, ...data]) {
    coffeearr = coffeearr.split(" ");

    for (let i = 0; i < Number(numberOfCommands); i++) {
        const currentCommand = data[i].split(" ")[0];

        if (currentCommand === "Include") {
            coffeearr.push(data[i].split(" ")[1]);
        
        } else if (currentCommand === "Remove") {
            const removingSide = data[i].split(" ")[1];

            let numberOfRemovals = Number(data[i].split(" ")[2]);
            if (numberOfRemovals > coffeearr.length) {
                continue;
            }

            if (removingSide === "first") {
                while (numberOfRemovals > 0) {
                    coffeearr.shift();
                    numberOfRemovals--;
                }
        
            } else if (removingSide === "last") {
                while (numberOfRemovals > 0) {
                    coffeearr.pop();
                    numberOfRemovals--;
                }
            }
        
        } else if (currentCommand === "Prefer") {
            const firstIndex = Number(data[i].split(" ")[1]);
            const secondIndex = Number(data[i].split(" ")[2]);
            
            if (
                firstIndex >= 0 && firstIndex < coffeearr.length && 
                secondIndex >= 0 && secondIndex < coffeearr.length
            ) {
                const temp = coffeearr[firstIndex];
                coffeearr[firstIndex] = coffeearr[secondIndex];
                coffeearr[secondIndex] = temp;
            }
        } else if (currentCommand === "Reverse") {
            coffeearr.reverse();
        }
    }

    console.log(`Coffees:\n${coffeearr.join(" ")}`);
}
