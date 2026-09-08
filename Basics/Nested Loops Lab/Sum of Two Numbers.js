function sumOf2Num(input) {
let beginning = Number(input[0])
let end = Number(input[1])
let magicNumber = Number(input[2]);
let counter = 0;
let flag = false;
for(let i = beginning; i <= end; i++) {
    for(let z = beginning; z <= end; z++) {
        let result = i + z;
        counter++;
        if(result === magicNumber) { 
            console.log("Combination N:" + counter + " (" + i + " + " + z + " = " + magicNumber + ")")
        flag = true; break;
        }
    }
    if(flag === true) {
        break;
    }
}
if(!flag) {
    console.log(counter + " combinations - neither equals " + magicNumber);
}
}
