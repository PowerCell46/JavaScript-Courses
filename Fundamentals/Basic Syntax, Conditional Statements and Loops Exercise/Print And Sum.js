function printTask(start, stop) {

let sum = 0;
let printNumbers = "";

while(start <= stop) {
    printNumbers += start + " "
    sum += start;
    start++;
}
console.log(printNumbers);
console.log(`Sum: ${sum}`);
}
