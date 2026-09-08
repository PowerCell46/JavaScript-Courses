describe("Testring the findNewApartment object and it's inner functionalities", () => {

    describe("Testing isGoodLocation function", () => {
        it("Should work with correct parameters", () => {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal('You can go on home tour!');
        });
        it("Should work with correct parameters and false second value", () => {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal('There is no public transport in area.');
        })
        it("Should not work if the first parameter != string", () => {
            expect(() => findNewApartment.isGoodLocation(["Sofia"], true)).to.throw("Invalid input!");
        })
        it("Should work with invalid location", () => {
            expect(findNewApartment.isGoodLocation("Palermo", true)).to.equal("This location is not suitable for you.");
        })
        it("Should throw an error if the second value is not boolean", () => {
            expect(() => findNewApartment.isGoodLocation("Sofia", "Peter")).to.Throw("Invalid input!")
        })
        it("Should not work if the two values are incorrect", () => {
            expect(() => findNewApartment.isGoodLocation({ "town": "Sofia" }, "Peter")).to.Throw("Invalid input!")
        })
        it("Should not work if the second parameter is missing", () => {
            expect(() => findNewApartment.isGoodLocation("Sofia")).to.Throw("Invalid input!")
        })
    })

    describe("Testing isLargeEnough function", () => {
        it("Should work with correct parameters", () => {
            expect(findNewApartment.isLargeEnough([50, 10, 20, 30], 15)).to.equal("50, 20, 30");
        })
        it("Should not work if the first parameter is not an array", () => {
            expect(() => findNewApartment.isLargeEnough("town", 10)).to.Throw("Invalid input!");
        })
        it("Should not work if the second parameter is not a number", () => {
            expect(() => findNewApartment.isLargeEnough([5, 10, 11, 254], "10")).to.Throw("Invalid input!");
        })
        it("Should not work if the length of the array is === 0", () => {
            expect(() => findNewApartment.isLargeEnough([], 10)).to.Throw("Invalid input!");
        })
        it("Should not work if both parameters are invalid", () => {
            expect(() => findNewApartment.isLargeEnough({ "10": 10, "20": 20 }, 2)).to.Throw("Invalid input!");
        })
        it("Should not work if the second parameter is missing", () => {
            expect(() => findNewApartment.isLargeEnough([1, 2, 3, 4, 5])).to.Throw("Invalid input!");
        })
        it("Apperantly should work if the numbers are strings", () => {
            expect(findNewApartment.isLargeEnough(["9", "20", "30"], 10)).to.equal("20, 30")
        })
        it("Should return an empty string if the array is filled with elements that are not numbers", () => {
            expect(findNewApartment.isLargeEnough(["Stiliyan", "Ivan", "Peter"], 10)).to.equal("")
        })
    })

    describe("Testing the isItAffordable function", () => {
        it("Should work with correct inputs", () => {
            expect(findNewApartment.isItAffordable(1500, 2000)).to.equal("You can afford this home!");
        })
        it("Should work if the budget < price", () => {
            expect(findNewApartment.isItAffordable(2500, 2000)).to.equal("You don't have enough money for this house!");
        })
        it("Should work if budget === price", () => {
            expect(findNewApartment.isItAffordable(2500, 2500)).to.equal("You can afford this home!");
        })
        it("Should not work if the price == 0", () => {
            expect(() => findNewApartment.isItAffordable(0, 2000)).to.Throw("Invalid input!");
        })
        it("Should not work if the budget == 0", () => {
            expect(() => findNewApartment.isItAffordable(2990, 0)).to.Throw("Invalid input!");
        })
        it("Should not work if the input budget != number", () => {
            expect(() => findNewApartment.isItAffordable(200, "1110")).to.Throw("Invalid input!");            
        })
        it("Should not work if the input price != number", () => {
            expect(() => findNewApartment.isItAffordable("2000", 1110)).to.Throw("Invalid input!");            
        })
        it("Should not work if both inputs are invalid", () => {
            expect(() => findNewApartment.isItAffordable("200", "1110")).to.Throw("Invalid input!");            
        })
        it("Should not work if the second parameter is missing", () => {
            expect(() => findNewApartment.isItAffordable(200)).to.Throw("Invalid input!");
        })
    })

})
