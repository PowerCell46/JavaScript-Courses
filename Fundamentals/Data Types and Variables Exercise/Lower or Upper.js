function lowerOrUpper(letter) {
let letterIsUppercase = false;

    for(let index = 65; index <= 90; index++) {
        if(letter === String.fromCharCode(index)) {
            console.log("upper-case");
            letterIsUppercase = true;
            break;
        }
    }

    if(letterIsUppercase === false) {
        for(let index = 97; index <= 122; index++) {
            if(letter === String.fromCharCode(index)) {
                console.log("lower-case");
                break;
            }
        }
    }
}
