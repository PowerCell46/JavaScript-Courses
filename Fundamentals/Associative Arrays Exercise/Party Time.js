function partyTime(array) {

    let guestArray = [];
    let vipArray = [];

    let index = 0;
    while (true) {
        let currentGuestOnTheList = array[index];
        if (currentGuestOnTheList === "PARTY") {
            index++;
            break;
        }
        if (currentGuestOnTheList[0] == "0" || currentGuestOnTheList[0] == "1" || currentGuestOnTheList[0] == "2" || currentGuestOnTheList[0] == "3" || currentGuestOnTheList[0] == "4" || currentGuestOnTheList[0] == "5" || currentGuestOnTheList[0] == "6" || currentGuestOnTheList[0] == "7" || currentGuestOnTheList[0] == "8" || currentGuestOnTheList[0] == "9") {
            vipArray.push(currentGuestOnTheList);
        } else {
            guestArray.push(currentGuestOnTheList);
        }
        index++;
    }

    while (index < array.length) {
        let currentCommingGuest = array[index];
        if(vipArray.includes(currentCommingGuest)) {
            let searchedIndex = vipArray.indexOf(currentCommingGuest);
            vipArray.splice(searchedIndex, 1);
        } else if (guestArray.includes(currentCommingGuest)) {
            let searchedIndex = guestArray.indexOf(currentCommingGuest);
            guestArray.splice(searchedIndex, 1);
        }
        index++;
    }
    console.log(vipArray.length + guestArray.length);
    console.log(vipArray.join("\n"));
    console.log(guestArray.join("\n"));
   
}
