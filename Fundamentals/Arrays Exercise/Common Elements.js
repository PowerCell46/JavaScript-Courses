function commonElements(first, second) {

for(let index = 0; index < Number(first.length); index++) {
let currentElement = first[index];

for(let index1 = 0; index1 < Number(second.length); index1++) { 
let currentElement1 = second[index1];

if(currentElement === currentElement1) {
console.log(currentElement);
}
}    
}

}
