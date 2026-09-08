function histogram(input) {

let numberOfNumbers = Number(input[0]); // първото число по условие показва броят на числата от цикъла;

let p1Counter = 0;
let p2Counter = 0;
let p3Counter = 0;
let p4Counter = 0;
let p5Counter = 0;

for(let number = 1; number <= numberOfNumbers; number++) {
    let currentNumber = Number(input[number]); //задаваме да върти числата в цикъла;
    if(currentNumber < 200) {
        p1Counter++;
    } else if(currentNumber >= 200 && currentNumber <= 399) {
        p2Counter++;
    } else if(currentNumber >= 400 && currentNumber <= 599) {
        p3Counter++;
    } else if(currentNumber >= 600 && currentNumber <= 799) {
        p4Counter++;  
    } else if(currentNumber >= 800) {
        p5Counter++;
    } // отпечатваме в каунтрите броя на числата;
}

let p1 = (p1Counter/ numberOfNumbers) * 100;
    let p2 = (p2Counter/ numberOfNumbers) * 100;
    let p3 = (p3Counter/ numberOfNumbers) * 100;
    let p4 = (p4Counter/ numberOfNumbers) * 100;
    let p5 = (p5Counter/ numberOfNumbers) * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}
