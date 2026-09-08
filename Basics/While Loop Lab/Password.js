function pass(input) {
    let index = 0;
    let nameOfUser = input[index];
    index++;
    let rightPassword = input[index];
    index++;
    let inputedPassword = input[index];

    while(inputedPassword !== rightPassword) {
        inputedPassword = input[index];
        index++;
        
    }
    console.log("Welcome " + nameOfUser + "!");
}
