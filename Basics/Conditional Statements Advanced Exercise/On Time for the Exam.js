function OnTimeForTheExam(input) {

let hourOfTheExam = Number(input[0]);
let minutesOfTheExam = Number(input[1]);
let hourOfArrival = Number(input[2]);
let minutesOfArrival = Number(input[3]);

let convertOfTheExam = 60 * hourOfTheExam;
let convertOfArrival = 60 * hourOfArrival;
let earlierTimeInMin = 0;
let hours = 0;
let minutes = 0;


let finalconvExam = minutesOfTheExam + convertOfTheExam;
let finalconvArrival = minutesOfArrival + convertOfArrival;

if(finalconvArrival < (finalconvExam - 30)) { // ако си дошъл повече от 30 мин преди изпита
earlierTimeInMin = finalconvExam - finalconvArrival;
if(earlierTimeInMin >= 60) {
    hours = Math.floor(earlierTimeInMin / 60);
    minutes = earlierTimeInMin % 60;
    if(minutes > 10) {
        console.log("Early");
        console.log(hours + ":" + minutes + " hours before the start");    
    } else if(minutes < 10) {
        console.log("Early");
    console.log(hours + ":0" + minutes + " hours before the start");
    }
    } else {
    console.log("Early");
    console.log(earlierTimeInMin + " minutes before the start");
}
    
} else if(finalconvArrival >= (finalconvExam - 30) && finalconvArrival < finalconvExam) { // ако си дошъл до 30 мин преди изпита
    earlierTimeInMin = finalconvExam - finalconvArrival;
    hours = Math.floor(earlierTimeInMin / 60);
    minutes = earlierTimeInMin % 60;
    if(earlierTimeInMin < 60) {
        console.log("On time");
    console.log(earlierTimeInMin + " minutes before the start");
    }
    else if(minutes > 10) {
        console.log("On time");
        console.log(hours + ":" + minutes + " hours before the start");    
    } else if(minutes < 10) {
        console.log("On time");
    console.log(hours + ":0" + minutes + " hours before the start");
    }
    

} 

else if(finalconvArrival > finalconvExam) { // ако си закъснял за изпита
    earlierTimeInMin = finalconvArrival - finalconvExam;
    hours = Math.floor(earlierTimeInMin / 60);
    minutes = earlierTimeInMin % 60;
    if(earlierTimeInMin < 60) {
        console.log("Late");
    console.log(earlierTimeInMin + " minutes after the start");
    } else if(minutes > 10) {
        console.log("Late");
        console.log(hours + ":" + minutes + " hours after the start");    
    } else if(minutes < 10) {
        console.log("Late");
    console.log(hours + ":0" + minutes + " hours after the start");
    } 
    }
    
    else if( finalconvArrival === finalconvExam) { // ако си дошъл точно на време за изпита
        console.log("On time")
    }
}
