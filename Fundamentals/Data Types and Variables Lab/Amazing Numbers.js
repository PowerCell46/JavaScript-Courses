function amazingNumbers(number) {

let result = 0;
number = number + "";

for(let index = 0; index < number.length; index++) {
let currentNum = Number(number[index]);
result += currentNum;
}

result = result + "";
let result3 = false;

for(let index1 = 0; index1 < result.length; index1++) {
    let currentNum1 = Number(result[index1]);
    if(currentNum1 == "9") {
    console.log(`${number} Amazing? ${"True"}`);
    result3 = true;
    }
}

if(result3 === false) {
    console.log(`${number} Amazing? ${"False"}`);
}
}
