function moving(input) {
let index = 0;
let widthOfTheFreeSpace = Number(input[index]);
index++;
let lengthOfTheFreeSpace = Number(input[index]);
index++;
let heightOfTheFreeSpace = Number(input[index]);
index++;
let totalFreeSpace = widthOfTheFreeSpace * lengthOfTheFreeSpace * heightOfTheFreeSpace;
let numberOfCurrentBoxes = input[index];
let totalNumberOfBoxes = 0;
let theSpaceIsnotEnough = false;

while(numberOfCurrentBoxes !== "Done") {
numberOfCurrentBoxes = Number(input[index]);
totalNumberOfBoxes += numberOfCurrentBoxes;
if(totalNumberOfBoxes > totalFreeSpace) {
theSpaceIsnotEnough = true; break; }
index++;
numberOfCurrentBoxes = input[index];
}

if(totalFreeSpace > totalNumberOfBoxes) {
let freeMeters = totalFreeSpace - totalNumberOfBoxes;
console.log(freeMeters + " Cubic meters left.");
}

if(theSpaceIsnotEnough === true) {
let neededSpace = totalNumberOfBoxes - totalFreeSpace;
console.log("No more free space! You need " + neededSpace + " Cubic meters more.");
}
}
