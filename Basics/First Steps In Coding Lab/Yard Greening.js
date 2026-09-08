function greening(input) {
let priceForTheYards = Number(input[0] * 7.61);
let discount = Number((priceForTheYards / 100) * 18);
let finalPrice = Number(priceForTheYards - discount);
let finalMessage1 = "The final price is: " + finalPrice + " lv.";
let finalMessage2 = "The discount is: " + discount + " lv."; 
console.log(finalMessage1)
console.log(finalMessage2)
}
