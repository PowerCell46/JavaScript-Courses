describe("Testing the library object's inner functions", function () {

    describe("Checking calcPriceBook", function () {
        it("Should work with correctParameters", function () {
            let result = library.calcPriceOfBook("Harry Potter", 1981);
            expect(result).to.equal("Price of Harry Potter is 20.00")
        });
        it("The price should be 50% less", () => {
            let result = library.calcPriceOfBook("Lotr", 1979);
            expect(result).to.equal("Price of Lotr is 10.00");
        })
        it("Should work with 1980 value", () => {
            let result2 = library.calcPriceOfBook("Dune", 1980);
            expect(result2).to.equal("Price of Dune is 10.00");
        })
        it("Should not work if the book name is invalid", () => {
            expect(() => library.calcPriceOfBook(["H", "o", "b", "b", "i", "t"], 1969)).to.Throw("Invalid input")
        })
        it("Should not work if the book name is invalid", () => {
            expect(() => library.calcPriceOfBook({ "H": 0, "o": 0, "b": 0, "b": 0, "i": 0, "t": 0 }, 1969)).to.Throw("Invalid input")
        })
        it("Should work if the name of the book is an empty string", () => {
            let result = library.calcPriceOfBook("", 1920);
            expect(result).to.equal('Price of  is 10.00')
        })
        it("Should not work if the year is not an integer number", () => {
            expect(() => library.calcPriceOfBook("Hobbit", 1969.5)).to.Throw("Invalid input")
        })
        it("Should not work if the year is not a number", () => {
            expect(() => library.calcPriceOfBook("Hobbit", [1969.5])).to.Throw("Invalid input")
        })
        it("Should work if the year is negative", () => {
            let result = library.calcPriceOfBook("Math", -500);
            expect(result).to.equal('Price of Math is 10.00');
        })
        it("Should work if the year is 0", () => {
            let result = library.calcPriceOfBook("Math", 0);
            expect(result).to.equal('Price of Math is 10.00');
        })
    });

    describe("Testing the inner function findBook", () => {
        it("Should work with correct parameters", () => {
            let result = library.findBook(["Lotr", "Dune", "Hunger Games", "Blade Runner"], "Dune");
            expect(result).to.equal("We found the book you want.")
        })
        it("Should throw an error if the array is empty", () => {
            expect(() => library.findBook([], "War and peace")).to.Throw("No books currently available");
        })
        it("Should work if the book is not in the library", () => {
            let result = library.findBook(["The silmarilion", "It", "The shining"], "Percey Jackson");
            expect(result).to.equal('The book you are looking for is not here!');
        })
        it("Should work if the book is not a string", () => {
            let result = library.findBook(["The silmarilion", "It", "The shining"], ["Darth Plagious"]);
            expect(result).to.equal("The book you are looking for is not here!")
        })
        it("Should work if the books are just one", () => {
            let result = library.findBook(["Game of thrones"], "Game of thrones");
            expect(result).to.equal("We found the book you want.");
        })
    })

    describe("Checking the inner function arrangeTheBooks", () => {
        it("Should not work if the value is not an integer", () => {
            expect(() => library.arrangeTheBooks(1.5)).to.Throw("Invalid input");
        })
        it("Should not work if the input value is negative", () => {
            expect(() => library.arrangeTheBooks(-10)).to.Throw("Invalid input");
        })
        it("Should not work if the value is not a number", () => {
            expect(() => library.arrangeTheBooks("100")).to.Throw("Invalid input");
        })
        it("Should work if the books are 40", () => {
            let result = library.arrangeTheBooks(40);
            expect(result).to.equal('Great job, the books are arranged.');
        })
        it("Should not work with bigger value", () => {
            let result = library.arrangeTheBooks(41);
            expect(result).to.equal("Insufficient space, more shelves need to be purchased.")
        })
        it("Should work if the books are 0", () => {
            let result = library.arrangeTheBooks(0);
            expect(result).to.equal("Great job, the books are arranged.");
        })
    })

});
