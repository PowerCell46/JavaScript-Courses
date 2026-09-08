describe("Checking if the function isOddOrEven works properly", () => {
    it ("Should return undefined if instead of a string we give an array.", () => {
        let result = isOddOrEven([1, 2, 3]);
        expect(result).to.be.undefined;
    })
    it ("Should return undefined if instead of a string we give an object.", () => {
        let result = isOddOrEven({});
        expect(result).to.be.undefined;
    })
    it ("Should return undefined if we give it a number", () => {
        let result = isOddOrEven(12);
        expect(result).to.be.undefined;
    })
    it ("Should return undefined if we give it boolean result", () => {
        let result = isOddOrEven(false);
        expect(result).to.be.undefined;
    })
    it ("Should return even if we set the value to `life'.", () => {
        let result = isOddOrEven("life");
        expect(result).to.equal("even");
    })
    it ("Should return odd if we set the value to `IDK`.", () => {
        let result = isOddOrEven("IDK");
        expect(result).to.equal("odd");
    }) 
})
