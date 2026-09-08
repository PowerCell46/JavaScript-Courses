function calculateFigureArea(input) {
let type = input[0];
if(type == "square") {
    let sideOfTheSquare = Number(input[1]);
    let areaOfTheSquare = sideOfTheSquare * sideOfTheSquare
    console.log(areaOfTheSquare);
}
else if(type == "rectangle") {
    let aSideOfTheRectangle = Number(input[1]);
    let bSideOfTheRectangle = Number(input[2]);
    let areaOfTheRectangle = aSideOfTheRectangle * bSideOfTheRectangle
    console.log(areaOfTheRectangle);
}
else if(type == "triangle") {
    let sideOfTheTriangle = Number(input[1]);
    let heightOfTheTriangle = Number(input[2]);
    let areaOfTheTriangle = (sideOfTheTriangle * heightOfTheTriangle) / 2
    console.log(areaOfTheTriangle);
}
else if(type == "circle") {
    let radiusOfTheCircle = Number(input[1]);
    let areaOfTheCircle = Math.PI * radiusOfTheCircle * radiusOfTheCircle;
    console.log(areaOfTheCircle);
}
else {
    console.log("Бате ква е тая фигура???")
}
}
