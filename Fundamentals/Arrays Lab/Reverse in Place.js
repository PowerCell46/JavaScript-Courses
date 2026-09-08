function reverseInPlace(array) {

arrayLength = Number(array.length);
let objectT = "";

for(let i = 0; i <  arrayLength / 2; i++) {
objectT = array[i];
array[i] = array[arrayLength - (1 + i)];
array[arrayLength - (1 + i)] = objectT
}
console.log(array.join(" "));
}
