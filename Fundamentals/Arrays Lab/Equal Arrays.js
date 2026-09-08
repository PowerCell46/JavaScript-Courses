function equalArrays(array1, array2) {
let theArraysAreEqual = false;
let sum = null;
let falseIndex = null;

for(let index = 0; index < Number(array1.length); index++) {
if(array1[index] === array2[index]) {
theArraysAreEqual = true;
sum += Number(array1[index]);
} else {
theArraysAreEqual = false;
falseIndex = index;
break;
}
}

if(theArraysAreEqual === true) {
console.log(`Arrays are identical. Sum: ${sum}`);
} else {
console.log(`Arrays are not identical. Found difference at ${falseIndex} index`)
}
}
