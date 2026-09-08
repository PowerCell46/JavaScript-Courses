function shopping(input) {

    let budget = Number(input[0]);

    let numberOfVideocards = Number(input[1]);
    let videocardPriceFor1 = 250;
    let videocardPrice = (numberOfVideocards * videocardPriceFor1);

    let numberOfCPUs = Number(input[2]);
    let CPUPriceFor1 = (videocardPrice/ 100) * 35;
    let CPUPrice = (numberOfCPUs * CPUPriceFor1);
    
    let numberOfRAMs = Number(input[3]);
    let RAMPriceFor1 = videocardPrice / 10;
    let RAMPrice = (numberOfRAMs * RAMPriceFor1);

    let FinalSum = videocardPrice + CPUPrice + RAMPrice;

    if(numberOfVideocards > numberOfCPUs) {
        FinalSum = FinalSum - ((FinalSum/ 100) * 15);
    } else {
        FinalSum = FinalSum;
    }

    if(budget >= FinalSum) {
        let leftmoney = budget - FinalSum;
        console.log("You have " + leftmoney.toFixed(2) + " leva left!"); 
    } else {
        let neededmoney = FinalSum - budget;
        console.log("Not enough money! You need " + neededmoney.toFixed(2) + " leva more!");
    }
}
