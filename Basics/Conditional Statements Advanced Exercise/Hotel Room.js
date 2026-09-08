function hotelRoom(input) {
    
let month = input[0];
let numberOfNights = input[1];

let studioPriceForOneNight = 0;
let apartmentPriceForOneNight = 0;

if(month == "May" || month == "October") {
studioPriceForOneNight = 50;
apartmentPriceForOneNight = 65; 
if(numberOfNights > 7 && numberOfNights <= 14) {
studioPriceForOneNight = studioPriceForOneNight - ((studioPriceForOneNight/100) * 5);
} else if(numberOfNights > 14) {
studioPriceForOneNight = studioPriceForOneNight - ((studioPriceForOneNight/100) * 30);
}
} else if(month == "June" || month == "September") {
studioPriceForOneNight = 75.20;
apartmentPriceForOneNight = 68.70;
if(numberOfNights > 14) {
studioPriceForOneNight = studioPriceForOneNight - ((studioPriceForOneNight/100) * 20); 
}
} else if(month == "July" || month == "August") {
studioPriceForOneNight = 76;
apartmentPriceForOneNight = 77;
}

if(numberOfNights > 14) {
apartmentPriceForOneNight = apartmentPriceForOneNight - (apartmentPriceForOneNight/10);
}

let apartmentFinalSum = apartmentPriceForOneNight * numberOfNights;
let studioFinalSum = studioPriceForOneNight * numberOfNights;

console.log("Apartment: " + apartmentFinalSum.toFixed(2) + " lv.");
console.log("Studio: " + studioFinalSum.toFixed(2) + " lv.");
}
