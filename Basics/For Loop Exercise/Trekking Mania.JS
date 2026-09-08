function trekking(input) {
    let index = 0;
    let numberOfGroups = input[index];
    index++;
    let allCounter = 0;
    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimanjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;

    for(let current = 0; current < numberOfGroups; current++) {
        let membersOfTheCurrentGroup = Number(input[index]);
        index++;
        
        allCounter += membersOfTheCurrentGroup

        if(membersOfTheCurrentGroup <= 5) { 
        musalaCounter+=membersOfTheCurrentGroup;
        } else if( membersOfTheCurrentGroup >= 6 && membersOfTheCurrentGroup <=12) {
        monblanCounter+= membersOfTheCurrentGroup;
        } else if( membersOfTheCurrentGroup >= 12 && membersOfTheCurrentGroup <=25) {
        kilimanjaroCounter+= membersOfTheCurrentGroup;
        } else if( membersOfTheCurrentGroup >=26 && membersOfTheCurrentGroup <= 40) {
        k2Counter+= membersOfTheCurrentGroup;
        } else {
        everestCounter+= membersOfTheCurrentGroup;
        }
    }

let musalaCounterAll = (musalaCounter / allCounter) * 100;
let monblanCounterAll = (monblanCounter / allCounter) * 100;
let kilimanjaroCounterAll = (kilimanjaroCounter / allCounter) * 100;
let k2CounterAll = (k2Counter / allCounter) * 100;
let everestCounterAll = (everestCounter / allCounter) * 100;
    
console.log(musalaCounterAll.toFixed(2) + "%");
console.log(monblanCounterAll.toFixed(2) + "%");
console.log(kilimanjaroCounterAll.toFixed(2) + "%");
console.log(k2CounterAll.toFixed(2) + "%");
console.log(everestCounterAll.toFixed(2) + "%");
}
