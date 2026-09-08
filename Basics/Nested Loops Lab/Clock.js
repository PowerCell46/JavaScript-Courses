function clock() {
let index = 0;
let minutes = index;
let hours = 0;
 
while(hours < 24) {

if(minutes >= 59) {
console.log(hours + ":" + minutes);
hours++;
index = 0; 
}
if(hours === 24) {break;}
minutes = index;
console.log(hours + ":" + minutes);
index++;
minutes = index;
}        
}
