function sorting(array) {
    
    array.sort((a, b) => a - b);
    let newArray = [];
    let length = Number(array.length);

    for (let index = 1; index <= length; index++) {
        if (index % 2 !== 0) {
            newArray.push(array.pop());
        } else {
            newArray.push(array.shift());
        }
    }

console.log(newArray.join(" "));
}
