function login(input) {
    let index = 0;
    let username = input[index];
    let usernameReversedElement = (username.length) - 1;
    let password = "";
    while(usernameReversedElement >= 0) {
    password += username[usernameReversedElement]; 
    usernameReversedElement--;
    }
    index++;
    let inputedPass = input[index]; 
    let counter = 0;

    while(inputedPass !== password) {
    counter++;

    if(counter === 4) {
    console.log(`User ${username} blocked!`);
    break;
    }
    console.log(`Incorrect password. Try again.`);
    index++;
    inputedPass = input[index];
    }

    if(inputedPass === password) {
    console.log(`User ${username} logged in.`);
    }
}
