function math(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let print = "";
    let sum = 0;
    let currentNumber = 0;

    for(let rotatingnum = number1; rotatingnum <= number2; rotatingnum++) {
        if(rotatingnum % 9 === 0) {
        sum = Number(sum + rotatingnum); 
    }
    }
    
    console.log("The sum: " + sum);

    for(let rotatingNumber = number1; rotatingNumber <= number2; rotatingNumber++) {
        if( rotatingNumber % 9 === 0) {
        console.log(rotatingNumber);
    }
    }
}
