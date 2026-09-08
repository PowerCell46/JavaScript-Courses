function cutAndReverse(inputString) {

    let firstHalf = inputString.substring(0, (inputString.length / 2));
    let secondHalf = inputString.substring((inputString.length / 2), inputString.length);
    firstHalf = Array.from(firstHalf).reverse();
    secondHalf = Array.from(secondHalf).reverse();
    console.log(firstHalf.join(""));
    console.log(secondHalf.join(""));
}
