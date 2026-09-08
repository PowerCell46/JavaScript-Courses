function cake(input) {
let index = 0;
let width = Number(input[index]);
index++;
let length = Number(input[index]);
index++;
let sizeOfTheCake = Number(width * length);
let numberOfSlices = Number(sizeOfTheCake);
let numberOfEatenSlices = input[index];
let allNumberOfEatenSlices = 0;
let theCakeIsEaten = false;

while(numberOfEatenSlices !== "STOP") {
numberOfEatenSlices = Number(input[index]);
allNumberOfEatenSlices+= numberOfEatenSlices;

if(allNumberOfEatenSlices > numberOfSlices) {
theCakeIsEaten = true; break;
} 
index++;
numberOfEatenSlices = input[index];
}
if(numberOfSlices > allNumberOfEatenSlices) {
    let leftSlices = numberOfSlices - allNumberOfEatenSlices;
    console.log(leftSlices + " pieces are left.");
}

if(theCakeIsEaten === true) {
let neededSlices = allNumberOfEatenSlices - numberOfSlices;
console.log("No more cake left! You need " + neededSlices + " pieces more.");
}
}
