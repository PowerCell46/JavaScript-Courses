class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity,
            this.books = []
        this.arrayOfBookNames = []
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push([bookName, bookAuthor, false]);
        this.arrayOfBookNames.push(bookName);
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        if (!this.arrayOfBookNames.includes(bookName)) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        let searchIndex = this.arrayOfBookNames.indexOf(bookName);
        let currentArr = this.books[searchIndex];
        if (currentArr[2]) {
            throw new Error(`${bookName} has already been paid.`)
        }
        this.books[searchIndex][2] = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        if (!this.arrayOfBookNames.includes(bookName)) {
            throw new Error("The book, you're looking for, is not found.")
        }
        let searchIndex = this.arrayOfBookNames.indexOf(bookName);
        let currentArr = this.books[searchIndex];
        if (currentArr[2] === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.arrayOfBookNames.splice(searchIndex, 1);
        this.books.splice(searchIndex, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let sortedBooks = this.arrayOfBookNames.slice().sort((a, b) => a.localeCompare(b));
            let returnArray = [];
            for (let title of sortedBooks) {
                let currentIndex = this.arrayOfBookNames.indexOf(title);
                let currentArray = this.books[currentIndex];
                returnArray.push(`${currentArray[0]} == ${currentArray[1]} - ${currentArray[2] === false ? "Not Paid" : "Has Paid"}.`);
            }
            return `The book collection has ${this.capacity} empty spots left.\n${returnArray.join("\n")}`;
        } else {
            let searchedArray = ["empty"];
            for (let arr of this.books) {
                if (arr[1] === bookAuthor) {
                    searchedArray = arr;
                    break;
                }
            }
            if (searchedArray[0] === "empty") {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            return `${searchedArray[0]} == ${searchedArray[1]} - ${searchedArray[2] === false ? "Not Paid" : "Has Paid"}.`
        }
    }
}
