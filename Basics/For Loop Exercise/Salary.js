function payment(input) {
    let numberOfOpenTabs = Number(input[0]);
    let payment = Number(input[1]);

    let facebookBan = 150;
    let instagramBan = 100;
    let redditBan = 50;

    let facebookCounter = 0;
    let instagramCounter = 0;
    let redditCounter = 0;

    for(let tab = 2; tab <= numberOfOpenTabs + 1; tab++) {
    let currentTab = input[tab];
    if(currentTab === "Facebook") {
    facebookCounter += 1;
    } else if(currentTab === "Instagram") {
    instagramCounter += 1;
    } else if(currentTab === "Reddit") {
    redditCounter += 1;
    }
    }

    let takenMoney = (facebookCounter * facebookBan) + (instagramCounter * instagramBan) + (redditCounter * redditBan);

    if(takenMoney >= payment) {
        console.log("You have lost your salary.");
    } else {
    let finalMoney = payment - takenMoney;
    console.log(finalMoney);
    }
}
