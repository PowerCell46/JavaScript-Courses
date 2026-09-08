function matchDates(dates) {

    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    ;
    while (true) {
        let vaidDate = pattern.exec(dates);
        if (vaidDate === null) {
            break;
        }
        let day = vaidDate.groups['day'];
        let month = vaidDate.groups['month'];
        let year = vaidDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
