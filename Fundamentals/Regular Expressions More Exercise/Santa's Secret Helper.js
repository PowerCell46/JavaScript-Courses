function santasSecretHelper(array) {
const decryptKey = Number(array[0]);
const regex = /([^@\-!:>]{0,})\@([A-Z|a-z]+)([^@\-!:>]{0,})\!([G|N])\!([^@\-!:>]{0,})/;
let goodKids = [];

for (let index = 1; index < array.length - 1; index++) {
    let currentString = array[index];
    let newCurrentString = "";
    for (let letter of currentString) {
        newCurrentString += String.fromCharCode(letter.charCodeAt() - decryptKey);
    }
    const result = newCurrentString.match(regex);
    try {
        const currentName = result[2];
        const currentGoodOrBad = result[4]
        if (currentGoodOrBad == "G") {
            goodKids.push(currentName);
        }
    } catch {
        
    }
}
return goodKids.join("\n");
}
