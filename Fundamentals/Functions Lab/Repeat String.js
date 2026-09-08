function repeatString(string, timesRepeating) {
let newString = "";

while(timesRepeating > 0) {
newString += string;
timesRepeating--;
}
console.log(newString);
}
