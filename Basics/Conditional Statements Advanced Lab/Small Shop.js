function shopTask(input) {
let product = input[0];
let city = input[1];
let quantity = Number(input[2]);
let price = 0;

if(city === "Sofia") {
 if(product === "water") {
    price = Number(0.80);
 } else if(product === "coffee") {
     price = Number(0.50);
 } else if(product === "beer") {
     price = Number(1.20);
 } else if(product === "sweets") {
     price = Number(1.45);
 } else if(product === "peanuts") {
     price = Number(1.60);
 } else {
    console.log("Некъде има грешка батко!");
 }
}

if(city === "Plovdiv") {
    if(product === "water") {
    price = 0.70;
    } else if(product === "coffee") {
    price = 0.40;
    } else if(product === "beer") {
    price = 1.15;
    } else if(product === "sweets") {
    price = 1.30;
    } else if(product === "peanuts") {
    price = 1.50;
    } else {
       console.log("Некъде има грешка батко!");
    }
   }

   if(city === "Varna") {
    if(product === "water") {
    price = 0.70;
    } else if(product === "coffee") {
    price = 0.45;
    } else if(product === "beer") {
    price = 1.10;
    } else if(product === "sweets") {
    price = 1.35;
    } else if(product === "peanuts") {
    price = 1.55;
    } else {
       console.log("Некъде има грешка батко!");
    }
   }

   let finalSum = Number(price * quantity);
   console.log(finalSum);
}
