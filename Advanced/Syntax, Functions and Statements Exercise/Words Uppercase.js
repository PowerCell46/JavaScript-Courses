function wordsUppercase(string) {
    string += " "
    let array = [];
    let currentWord = "";
    for (let digit of string) {
        if (64 < digit.charCodeAt() && digit.charCodeAt() < 91 || 96 < digit.charCodeAt() && digit.charCodeAt() < 123 || 47 < digit.charCodeAt() && digit.charCodeAt() < 58) {
            currentWord += digit.toUpperCase();
        } else {
            if (currentWord.length > 0) {
                array.push(currentWord);
                currentWord = ""
            }
        }
    }
    if (currentWord.length > 0) {
        array.push(currentWord);
    }
    return array.join(", ");
}
