function multiplicationTable(number) {

    let result = 0;

    for (let a = 1; a <= 10; a++) {
        result = number * a;
        console.log(`${number} X ${a} = ${result}`);
        result = 0;
    }
}
