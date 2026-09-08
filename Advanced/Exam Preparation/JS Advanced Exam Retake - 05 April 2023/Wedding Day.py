describe("Testing the object WeddingDay and it's inner functions", function () {

    describe("Testing PickVenue", function () {
        it("Should work with right parameters", function () {
            let result = weddingDay.pickVenue(100, 150, "Varna");
            expect(result).to.equal("This venue does not meet your requirements!")
        });
        it("Should not work with wrong first param", () => {
            expect(() => weddingDay.pickVenue("100", 100, "Varna")).to.Throw("Invalid Information!")
        })
        it("Should not work with second wrong param", () => {
            expect(() => weddingDay.pickVenue(100, "100", "Varna")).to.Throw("Invalid Information!")
        })
        it("Should not work with third wrong parameter", () => {
            expect(() => weddingDay.pickVenue(100, 100, ["Varna"])).to.Throw("Invalid Information!")
        })
        it("Should work if the city != Varna", () => {
            expect(() => weddingDay.pickVenue(100, 150, "Sofia")).to.Throw("The location of this venue is not in the correct area!")
        })
        it("Should work with venie 150", () => {
            let result = weddingDay.pickVenue(150, 100, "Varna")
            expect(result).to.equal("This venue meets the requirements, with capacity of 150 guests and 100$ cover.")
        })
        it("Should work with price 120", () => {
            let result = weddingDay.pickVenue(160, 120, "Varna");
            expect(result).to.equal("This venue meets the requirements, with capacity of 160 guests and 120$ cover.");
        })
        it("Should not work with empty string", () => {
            expect(() => weddingDay.pickVenue(150, 100, "")).to.throw("Invalid Information!")
        })
    });
    describe("Testing the otherSpendings function", () => {
        it("Should not work with first wrong parameter", () => {
            expect(() => weddingDay.otherSpendings("some", [12], true)).to.throw('Invalid Information!')
        })
        it("Should not work with second wrong parameter", () => {
            expect(() => weddingDay.otherSpendings([12], "[12]", true)).to.throw('Invalid Information!')
        })
        it("Should not work with third wrong parameter", () => {
            expect(() => weddingDay.otherSpendings([12], [12], "true")).to.throw('Invalid Information!')
        })
        it("Should work with no discount", () => {
            let result = weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains", "Fabric drapes and curtains"], ["pictures", "video", "video"], false);
            expect(result).to.equal("You spend 4600$ for wedding decoration and photography!")
        })
        it("Should work with a discount", () => {
            let result = weddingDay.otherSpendings(["flowers", "flowers", "flowers"], ["video", "video", "video"], true);
            expect(result).to.equal("You spend 4590$ for wedding decoration and photography with 15% discount!")
        })
        it("Should work with one empty array", () => {
            let result = weddingDay.otherSpendings(["flowers", "flowers", "flowers"], [], true);
            expect(result).to.equal("You spend 1275$ for wedding decoration and photography with 15% discount!")
        })
        it("Should work with one empty array part 2", () => {
            let result = weddingDay.otherSpendings([], ["video", "video", "video"], false);
            expect(result).to.equal("You spend 3900$ for wedding decoration and photography!")
        })
        it("Should work with one empty array part 3", () => {
            let result = weddingDay.otherSpendings([], [], false);
            expect(result).to.equal("You spend 0$ for wedding decoration and photography!")
        })
        it("Should work with one empty array part 4", () => {
            let result = weddingDay.otherSpendings([], [], true);
            expect(result).to.equal("You spend 0$ for wedding decoration and photography with 15% discount!")
        })
        it("Should work nonexistant parameters", () => {
            let result = weddingDay.otherSpendings([1, 2, 3, 4], [1, 2, 3, 4], true);
            expect(result).to.equal("You spend 0$ for wedding decoration and photography with 15% discount!")
        })
    })

    describe("Testing the inner function tableDistribution", () => {
        it("Should not work with non-numbers", () => {
            expect(() => weddingDay.tableDistribution("5", 10)).to.Throw("Invalid Information!")
        })
        it("Should not work with non-numbers part 2", () => {
            expect(() => weddingDay.tableDistribution(5, '10')).to.Throw("Invalid Information!")
        })
        it("Should not work with negative numbers", () => {
            expect(() => weddingDay.tableDistribution(-5, 10)).to.Throw("Invalid Information!")
        })
        it("Should not work with negative numbers part 2", () => {
            expect(() => weddingDay.tableDistribution(5, -10)).to.Throw("Invalid Information!")
        })
        it("Should not work with 0", () => {
            expect(() => weddingDay.tableDistribution(0, 10)).to.Throw("Invalid Information!")
        })
        it("Should not work with 0 part 2", () => {
            expect(() => weddingDay.tableDistribution(1, 0)).to.Throw("Invalid Information!")
        })
        it("Should work with 6", () => {
            let result = weddingDay.tableDistribution(12, 2);
            expect(result).to.equal("You have 2 tables with 6 guests on table.")
        })
        it("With less than 6 on a table", () => {
            let result = weddingDay.tableDistribution(12, 3);
            expect(result).to.equal("There is only 4 people on every table, you can join some tables.")
        })
        it("Another test", () => {
            let result = weddingDay.tableDistribution(15, 3);
            expect(result).to.equal("There is only 5 people on every table, you can join some tables.")
        })

    })
});
