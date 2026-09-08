function mergeArrays(first, second) {

let printedArray = [];

for(let index = 0; index < Number(first.length); index++) {
    if(index % 2 === 0) {
printedArray.push(Number(first[index]) + Number(second[index]));
    } else if( index % 2 !== 0) {
printedArray.push(first[index] + second[index]);
    }
}
console.log(printedArray.join(" - "));
}
