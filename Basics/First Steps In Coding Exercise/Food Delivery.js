function fooddelivery(input) {
    let chickenMenus = Number(input[0] * 10.35);
    let fishMenus = Number(input[1] * 12.40);
    let vegetarianMenus = Number(input[2] * 8.15);
    let deliverysum = Number(chickenMenus + fishMenus + vegetarianMenus);
    let deserts = Number(deliverysum *0.2);
    let delivery = Number(2.50)
    let finalSum = deliverysum + deserts + delivery
    console.log(finalSum);
}
