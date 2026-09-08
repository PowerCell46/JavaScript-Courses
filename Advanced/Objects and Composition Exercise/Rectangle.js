function rectangle(width, height, color) {
    color = color.split("");
    let firstLetter = color.shift();
    let returnObj = {
    "width": width,
    "height": height,
    "color": firstLetter.toUpperCase() + color.join(""),
    calcArea() {
        return this.height * this.width;
    }
}
    return returnObj;
}
