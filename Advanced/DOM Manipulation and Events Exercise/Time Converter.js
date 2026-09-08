function attachEventsListeners() {
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let daysConvert = document.getElementById("daysBtn");
    
    daysConvert.addEventListener("click", function daysFunc() {
        let daysValue = days.value;
        hours.value = (daysValue * 24);
        minutes.value = (daysValue * 24 * 60);
        seconds.value = (daysValue * 24 * 60 * 60);
    });

    let hoursConvert = document.getElementById("hoursBtn");
    hoursConvert.addEventListener("click", function hoursFunc() {
       let hoursValue = hours.value;
       days.value = hoursValue / 24;
       minutes.value = hoursValue * 60;
       seconds.value = hoursValue * 60 * 60;
    });

    let minutesConvert = document.getElementById("minutesBtn");
    minutesConvert.addEventListener("click", function minutesFunc() {
        let minutesValue = minutes.value;
        days.value = minutesValue / 60 / 24;
        hours.value = minutesValue / 60;
        seconds.value = minutesValue * 60;
    });

    let secondsConvert = document.getElementById("secondsBtn");
    secondsConvert.addEventListener("click", function secondsFunc() {
        let secondsValue = seconds.value;
        days.value = secondsValue / 60 / 60 / 24;
        hours.value = secondsValue / 60 / 60;
        minutes.value = secondsValue / 60;
    });

}
