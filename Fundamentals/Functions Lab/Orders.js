function orders(order, numberOfOrders) {
let price = null;
switch(order) {
case "coffee": price = 1.50; break;
case "water": price = 1; break;
case "coke": price = 1.40; break;
case "snacks": price = 2; break;
}

let sum = numberOfOrders * price;
console.log(sum.toFixed(2));
}
