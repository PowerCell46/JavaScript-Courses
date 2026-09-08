describe("Testing the function lookupChar and its functionalities.", () => {
    it("Should return the correct index with correct parameters.", () => {
        let result = lookupChar("Peter", 2);
        expect(result).to.equal("t");
    })
    it("Should return Incorrect index if we give it one bigger than the length.", () => {
        let result = lookupChar("Ivan", 10);
        expect(result).to.equal("Incorrect index");
    })
    it("Should return Incorrect index if we give it one smaller than 0", () => {
        let result = lookupChar("Bogdan", -5);
        expect(result).to.equal('Incorrect index');
    })
    it("Should return Undefined if we give something else other than string.", () => {
        let result = lookupChar([1, 2, 3], 2);
        expect(result).to.equal(undefined);
    })
    it("Should not work if we give it the number as a string.", () => {
        let result = lookupChar("KAla", "2");
        expect(result).to.equal(undefined);
    })
    it("Should not work if the number is a floating point.", () => {
        let result = lookupChar("Kabakchiev", 2.5);
        expect(result).to.equal(undefined);
    })

})
