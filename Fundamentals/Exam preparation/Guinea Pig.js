function guineaPig(array) {

    let foodQuantity = Number(array[0]) * 1000;
    let hayQuantity = Number(array[1]) * 1000;
    let coverQuantity = Number(array[2]) * 1000;
    let weightOfTheGuineaPig = Number(array[3]) * 1000;

    let day = 0;
    the_food_has_run_out = false;

    while (day < 30) {
        if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
            console.log("Merry must go to the pet store!");
            the_food_has_run_out = true
            break;
        }
        day++;
        foodQuantity -= 300;
        if (day % 2 == 0) {
            hayQuantity -= ((foodQuantity / 100) * 5);
        }
        if (day % 3 == 0) {
            coverQuantity -= (weightOfTheGuineaPig / 3);
        }
        if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
            console.log("Merry must go to the pet store!");
            the_food_has_run_out = true
            break;
        }

    }

    if (the_food_has_run_out === false) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(2)}, Hay: ${(hayQuantity / 1000).toFixed(2)}, Cover: ${(coverQuantity / 1000).toFixed(2)}.`)
    }

}
