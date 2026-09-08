function numbersendingin7() {
    let number1 = 1;
    number2 = 1000;

    for(let i = number1; i <= 1000; i++) {
        if(i % 10 === 7) { // намиране на всички числа, които завършват на 7;
            console.log(i);
        }
    }
}
