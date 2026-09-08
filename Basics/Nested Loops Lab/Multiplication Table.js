function multiplicationTable(input) {

for(let firstMultiNum = 1; firstMultiNum <= 10; firstMultiNum++) {
    for(let secondMultiNum = 1; secondMultiNum <= 10; secondMultiNum++) {
    let result = firstMultiNum * secondMultiNum;
        console.log(firstMultiNum + " * " + secondMultiNum + " = " + result);
    }
}
}
