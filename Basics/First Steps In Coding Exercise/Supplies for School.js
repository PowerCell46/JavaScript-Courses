function suppliesForSchool(input) {
    let pens = Number(5.80 * input[0]);
    let markers = Number(7.20 * input[1]);
    let cleaner = Number(1.20 * input [2]);
    let percentage = Number(input[3] / 100);
    let sum = Number(pens + markers + cleaner);
    let finalSum = Number(sum - (sum * percentage));
    console.log(finalSum);
}
