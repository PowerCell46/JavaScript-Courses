describe("Testing the object carService and it's inner functions", function () {
    describe("testing the inner function isItExpensive", function () {
        it("Should work with Engine as input", function () {
            let result = carService.isItExpensive("Engine");
            expect(result).to.equal(`The issue with the car is more severe and it will cost more money`)
        });
        it("Should work with Transmission as input", () => {
            let result = carService.isItExpensive("Transmission");
            expect(result).to.equal(`The issue with the car is more severe and it will cost more money`)
        })
        it("Should work with anything other than these two", () => {
            let result = carService.isItExpensive("End of Transmission");
            expect(result).to.equal(`The overall price will be a bit cheaper`);
        })
        it("Should work with an empty string", () => {
            let result = carService.isItExpensive("");
            expect(result).to.equal(`The overall price will be a bit cheaper`);
        })
    });
    describe("testing the inner function discount", () => {
        it("Should work with 3 parts", () => {
            let result = carService.discount(3, 15);
            expect(result).to.equal("Discount applied! You saved 2.25$");
        })
        it("Should work with 2 parts", () => {
            let result = carService.discount(2, 10);
            expect(result).to.equal("You cannot apply a discount");
        })
        it("Should work with 1 parts", () => {
            let result = carService.discount(1, 10);
            expect(result).to.equal("You cannot apply a discount");
        })
        it("Should work with 6 parts", () => {
            let result = carService.discount(6, 10);
            expect(result).to.equal("Discount applied! You saved 1.5$");
        })
        it("Should work with 7 parts", () => {
            let result = carService.discount(7, 100);
            expect(result).to.equal("Discount applied! You saved 15$");
        })
        it("Should work with 8 parts", () => {
            let result = carService.discount(8, 20);
            expect(result).to.equal("Discount applied! You saved 6$");
        })
        it("Should not work if the number of parts is not a number", () => {
            expect(() => carService.discount("10", 10)).to.Throw("Invalid input");
        })
        it("Should not work if the price is not a number", () => {
            expect(() => carService.discount(10, "10")).to.Throw("Invalid input");
        })
    })
    describe("Testing the inner function partsToBuy", () => {
        it("Should work with correct input", () => {
            let result = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])
            expect(result).to.equal(145)
        })
        it("Should work with one param", () => {
            let result = carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff valve"])
            expect(result).to.equal(145)
        })
        it("Should work with none common things", () => {
            let result = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["John Snow", "Star Wars"])
            expect(result).to.equal(0)
        })
        it("Should return 0 with empty catalog", () => {
            let result = carService.partsToBuy([{}, {}], ["John Snow", "Star Wars"])
            expect(result).to.equal(0)
        })
        it("Should return 0 with empty parts", () => {
            let result = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], [])
            expect(result).to.equal(0)
        })
        it("Should not work with invalid catalog", () => [
            expect(() => carService.partsToBuy(123, [1, 2, 3])).to.Throw("Invalid input")
        ])
        it("Should not work with invalid parts", () => [
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], "[1, 2, 3]")).to.Throw("Invalid input")
        ])
    })
});
