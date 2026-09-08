function filterEmployees(JSONdata, search) {
    if (search == "all") {
    
    let counter = 0;
    let parsedData = JSON.parse(JSONdata);
    for (let obj of parsedData) {
        console.log(`${counter}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`);
        counter++;
    }

    } else {
        search = search.split("-")
        const key = search[0];
        const searchedValue = search[1];
        let counter = 0;
    
        let parsedData = JSON.parse(JSONdata);
        for (let obj of parsedData) {
            if (obj[key] == searchedValue) {
                console.log(`${counter}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`);
                counter++;
            }
        }
    }
}
