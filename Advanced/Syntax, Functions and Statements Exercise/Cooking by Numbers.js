function cookingByNumbers(number, first, second, third, fourth, fifth) {
    let array = [first, second, third, fourth, fifth];
    let result = "";
    for (let command of array) {
        switch (command) {
            case "chop":
                number = Number(number) / 2;
                break;
            case "dice":
                number = Math.sqrt(Number(number));
                break;
            case "spice":
                number = Number(number) + 1;
                break;
            case "bake":
                number = Number(number) * 3;
                break;
            case "fillet":
                number = Number(number) - ((Number(number) / 100) * 20);
                break;
        }
        result += number + "\n"
    }
    return result
}
