function triangleArea(side1, side2, side3) {
halfAddition = (side1 + side2 + side3) / 2;
let area = Math.sqrt(halfAddition * (halfAddition - side1) * (halfAddition - side2) * (halfAddition - side3));
console.log(area);
}
