function task(array) {

    let pattern = /\+359([-| ])2\1[0-9]{3}\1[0-9]{4}/g
    let phoneNumbersList = array[0];
    let match = pattern.exec(phoneNumbersList);
    let result = [];
    while(match !== null) {
        result.push(match[0]);
        match = pattern.exec(phoneNumbersList);
    }
    console.log(result.join(", "));
}
