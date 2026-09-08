function condenceArrayToNum(array) {

let result = [];

for(let el of array) {
result.push(el);
}

while(result.length > 1) {
    tempArr = [];
   
    for(let i = 0; i < result.length - 1; i++) {
    tempArr[i] = result[i] + result[i + 1]; 
    }
    result = tempArr; 
}
console.log(result.join(""))
}
