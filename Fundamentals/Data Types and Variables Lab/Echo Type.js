function echoType(inputed) {

let result = typeof(inputed);
console.log(result);

if(result === "string" || result === "number") {
console.log(inputed);
} else {
console.log("Parameter is not suitable for printing");
}
}
