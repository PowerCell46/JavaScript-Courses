function calculator(input) {
    let depositSum = Number(input[0]);
    let timeForTheDeposit = Number(input[1]);
    let yearPersentage = Number(input[2]);
    let finalSum = depositSum + timeForTheDeposit * ((depositSum * yearPersentage / 100)/ 12);
    console.log(finalSum);
}
