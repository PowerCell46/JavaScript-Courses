function pyramid(input) {
    let inputNumber = Number(input[0]);
    let printNumber = 1;
    let theTaskIsFinished = false;

    for(let a = 1; a <= inputNumber; a++) {
        let buffer = "";
        for( let i = 0; i < a; i++) {
            buffer += (printNumber + " ");
            (printNumber++);
            if(printNumber > inputNumber){theTaskIsFinished = true; break;}
        }
        console.log(buffer);
        if(theTaskIsFinished === true) { break}
    }
}
