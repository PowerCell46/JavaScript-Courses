function maxNumber(array) {

    let newArray = [];
    let arrayL = Number(array.length);

    for (let index = 0; index < arrayL; index++) {
        let number1 = array[index];
        let isBiggest = true;

        for (let index1 = index + 1; index1 < arrayL; index1++) {
            let number2 = array[index1];

            if (number1 <= number2) {
                isBiggest = false;
            }

        }
        if (isBiggest === true) {
            newArray.push(number1);
        }
    }
    console.log(newArray.join(" "));

}
