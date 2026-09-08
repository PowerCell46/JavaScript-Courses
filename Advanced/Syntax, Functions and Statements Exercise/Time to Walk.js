function timeToWalk(numberOfStepsToTheUniversity, lengthOfTheFootprint, speed) {
    let distanceInKilometers = (numberOfStepsToTheUniversity * lengthOfTheFootprint / 1000);
    let seconds = 0;
    seconds += ((distanceInKilometers / speed) * 60 * 60);
    while (distanceInKilometers > 0.5) {
        seconds += 60
        distanceInKilometers -= 0.5;
    }
    seconds = Math.ceil(seconds);

    let hours = 0;
    while (seconds > 3600) {
        hours++;
        seconds -= 3600;
    }
    
    let minutes = 0;
    while (seconds > 60) {
        minutes++;
        seconds -= 60;
    }

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    return `${hours}:${minutes}:${seconds}`
}
