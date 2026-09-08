function searchForANumber(array, commands) {
    let newArray = [];
    let counter = 0;

    for (let index = 0; index < commands[0]; index++) {
        newArray.push(array.shift());
    }

    for (let index1 = 0; index1 < commands[1]; index1++) {
        newArray.shift();
    }

    for (let index = 0; index < Number(newArray.length); index++) {
        let currentNum = newArray[index];
        if (currentNum === commands[2]) {
            counter++;
        }
    }

    console.log(`Number ${commands[2]} occurs ${counter} times.`);
}
