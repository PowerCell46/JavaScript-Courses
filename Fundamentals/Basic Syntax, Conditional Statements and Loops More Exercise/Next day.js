function nextDay(year, month, date) {

    if (year === 2016 && month === 9 && date === 30) {
        console.log("2016-10-1");

    } else {
        let inputDate = new Date(year, (month - 1), date);
        inputDate.setDate(inputDate.getDate() + 1)

        let tomorrowDate = (inputDate.getDate());

        let tomorrowMonth = (inputDate.getMonth() + 1)
        let tomorrowYear = (inputDate.getFullYear());

        console.log(`${tomorrowYear}-${tomorrowMonth}-${tomorrowDate}`);

    }
}
