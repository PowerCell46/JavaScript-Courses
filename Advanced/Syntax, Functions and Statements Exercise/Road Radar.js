function roadRadar(speed, area) {
    let maxSpeed = null;
    switch (area) {
        case "motorway":
            maxSpeed = 130;
            break;
        case "interstate":
            maxSpeed = 90;
            break;
        case "city":
            maxSpeed = 50;
            break;
        case "residential":
            maxSpeed = 20;
            break;
    }

    if (speed <= maxSpeed) {
        return `Driving ${speed} km/h in a ${maxSpeed} zone`

    } else {
        let difference = speed - maxSpeed;
        let status = null;
        if (difference <= 20) {
            status = "speeding"
        } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }
        return `The speed is ${difference} km/h faster than the allowed speed of ${maxSpeed} - ${status}`
    }
}
