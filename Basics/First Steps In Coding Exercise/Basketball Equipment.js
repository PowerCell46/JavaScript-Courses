function basketballequipment(input) {
    let annualTax = Number(input[0]);
    let shoes = Number((annualTax/100) * 40);
    let shoesFinalPrice = Number(annualTax - shoes);
    let clothes = Number((shoesFinalPrice/100) * 20);
    let clothesFinalprice = Number(shoesFinalPrice - clothes);
    let ball = Number(clothesFinalprice / 4);
    let accessories = Number(ball / 5);
    let finalCalculation = Number(annualTax + shoesFinalPrice + clothesFinalprice + ball + accessories); 
    console.log(finalCalculation)
}
