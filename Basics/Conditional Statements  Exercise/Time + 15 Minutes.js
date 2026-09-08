function time(input) {
let hour = Number(input[0]);
let minutes = Number(input[1]);
let time = minutes + (hour * 60); // преобразуваме часовете в минути
let timePlus15 = time + 15;  // добавяме 15 минути (по условие)

let finalResultH = Math.floor(timePlus15 /60); // (делим минутите на 60, за да видим колко часа са това)
let finalResultM = timePlus15 % 60; // определяме с % остатъка 

if(finalResultH >= 24) { // ако часът стане >= 24 се преобразува в 00
    finalResultH = 00;
}
if(finalResultM <= 9) { // добавяме 0 пред малките минути до 9
    finalResultM = "0" + finalResultM;
}

console.log(finalResultH + ":" + finalResultM);
};
