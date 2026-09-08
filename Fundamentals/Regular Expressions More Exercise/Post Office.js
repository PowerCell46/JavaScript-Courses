function postOffice(input) {
    input = input.join("")
    let [firstPart, secondPart, thirdPart] = input.split('|');

    const firstPartRegex = /(\#|\$|\%|\*|\&)([A-Z]{1,})\1/g;
    let firstMatches = firstPart.match(firstPartRegex)[0].split("");
    firstMatches.splice(0, 1);
    firstMatches.pop();
    let letters = firstMatches.slice();


    const secondPartRegex = /([0-9]{1,})\:([0-9]{2})/g;
    const secondMatches = secondPart.match(secondPartRegex);
    let secondFinalArray = [];
    for (let data of secondMatches) {
        data = data.split(":");

        if (firstMatches.includes(String.fromCharCode(Number(data[0])))) {
            const index = firstMatches.indexOf(String.fromCharCode(Number(data[0])));
            firstMatches.splice(index, 1);
            secondFinalArray.push({ letter: String.fromCharCode(Number(data[0])), length: Number(data[1]) });
        }
    }

    let thirdMatches = thirdPart.split(" ");
    for (let letter of letters) {
        for (let word of thirdMatches) {
            if (letter === word[0]) {
                for (let obj of secondFinalArray) {
                    if (obj.letter === letter && obj.length === word.length - 1) {
                        console.log(word);
                    }
                }
            }
        }
    }
}
