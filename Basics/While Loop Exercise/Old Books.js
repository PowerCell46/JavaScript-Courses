function oldBooks(input) {
let index = 0;
let searchedBook = input[index];
index++;
let book = input[index];
let numberOfCheckedBooks = 0;
let bookIsFound = false;

while(book !== "No More Books") {
    if(book === searchedBook) {
    bookIsFound = true;
    break;
    }
    numberOfCheckedBooks++;
    index++;
    book = input[index];
} 

if(bookIsFound === true) {
    console.log("You checked " + numberOfCheckedBooks + " books and found it.");
} else if(bookIsFound === false) {
    console.log("The book you search is not here!");
    console.log("You checked " + numberOfCheckedBooks + " books.");
}
}
