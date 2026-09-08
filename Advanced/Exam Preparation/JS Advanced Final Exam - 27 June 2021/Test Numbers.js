describe("Testing the object testNumbers and it's inner functions", function () {
    describe("Testing the inner function sumNumber", function () {
        it("should work with positive numbers", function () {
            let result = testNumbers.sumNumbers(5, 10);
            expect(result).to.equal("15.00")
        });
        it("Should work with positive and a negative number", () => {
            let result = testNumbers.sumNumbers(-5, 10);
            expect(result).to.equal("5.00")
        })
        it("Should work with two negative numbers", () => {
            let result = testNumbers.sumNumbers(-5, -10);
            expect(result).to.equal("-15.00")
        })
        it("Should work if one of the numebrs is a 0", () => {
            let result = testNumbers.sumNumbers(5, 0);
            expect(result).to.equal("5.00")
        })
        it("Should work if both numbers are = 0", () => {
            let result = testNumbers.sumNumbers(0, 0);
            expect(result).to.equal("0.00")
        })
        it("Should not work if the first is not a number", () => {
            let result = testNumbers.sumNumbers("5", 10);
            expect(result).to.equal(undefined)
        })
        it("Should not work if the second is not a number", () => {
            let result = testNumbers.sumNumbers(5, "10");
            expect(result).to.equal(undefined)
        })
    });

    describe("Testing the inner function numberChecker", () => {
        it("Should work with a 0", () => {
            let result = testNumbers.numberChecker(0);
            expect(result).to.equal('The number is even!')
        })
        it("Should work with an odd number", () => {
            let result = testNumbers.numberChecker(9);
            expect(result).to.equal('The number is odd!')
        })
        it("Should work with an even number", () => {
            let result = testNumbers.numberChecker(10);
            expect(result).to.equal('The number is even!')
        })
        it("Should work with a negative odd number", () => {
            let result = testNumbers.numberChecker(-9);
            expect(result).to.equal('The number is odd!')
        })
        it("Should work with a negative even number", () => {
            let result = testNumbers.numberChecker(-8);
            expect(result).to.equal('The number is even!')
        })
        it("Should work with a string number pt 1", () => {
            let result = testNumbers.numberChecker("1")
            expect(result).to.equal("The number is odd!");
        })
        it("Should work with a string number pt 2", () => {
            let result = testNumbers.numberChecker('8');
            expect(result).to.equal("The number is even!");
        })
        it("Should not work with non-number strings", () => {
            expect(() => testNumbers.numberChecker("Peter")).to.Throw("The input is not a number!")
        })
        it("Should not work with an array", () => {
            expect(() => testNumbers.numberChecker(["Peter"])).to.Throw("The input is not a number!")
        })
    })
    describe("Testing the inner function averageSumArray", () => {
        it("Should work with 0s", () => {
            let result = testNumbers.averageSumArray([0, 0, 0]);
            expect(result).to.equal(0);
        })
        it("Should work with 1 number", () => {
            let result = testNumbers.averageSumArray([1]);
            expect(result).to.equal(1)
        })
        it("Should work with negative numbers", () => {
            let result = testNumbers.averageSumArray([1, -1, 2]);
            expect(result).to.equal(0.6666666666666666)
        })
        it("Should work with only negative numbers", () => {
            let result = testNumbers.averageSumArray([-1, -1, -2]);
            expect(result).to.equal(-1.3333333333333333)
        })
        it("Should work with an empty array", () => {
            let result = testNumbers.averageSumArray([]);
            expect(result).to.deep.equal(NaN);
        })
        it("Should work with positive numbers", () => {
            let result = testNumbers.averageSumArray([1, 2, 3, 4, 5]);
            expect(result).to.equal(3)
        })
    })
});
