describe("Testing the obj rentCar and it's functions", function () {
   
    describe("Testing the inner function searchCar", function () {
        it("Checking with right params", function () {
            let result = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi");
            expect(result).to.equal('There is 1 car of model Audi in the catalog!')
        });
        it("Should work if the car is more than 1", () => {
            let result = rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], "Audi");
            expect(result).to.equal('There is 2 car of model Audi in the catalog!')
        })
        it("Should not work if the car doesn't exist", () => {
            expect(() => rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], "Volvo")).to.Throw("There are no such models in the catalog!")
        })
        it("Should not work if the array is empty", () => {
            expect(() => rentCar.searchCar([], "Volvo")).to.Throw("There are no such models in the catalog!")
        })
        it("Should not work if the string is empty", () => {
            expect(() => rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], "")).to.Throw("There are no such models in the catalog!")
        })
        it("Should work if al elements are the same", () => {
            let result = rentCar.searchCar(["Audi", "Audi", "Audi", "Audi"], "Audi");
            expect(result).to.equal('There is 4 car of model Audi in the catalog!')
        })
        it("Should not work if the array is not an array", () => {
            expect(() => rentCar.searchCar({ "Volkswagen": "Audi", "BMW": "Audi" }, "")).to.Throw("Invalid input!")
        })
        it("Should not work if the string is not a string", () => {
            expect(() => rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], 12)).to.Throw("Invalid input!")
        })
    });

    describe("Testing the function calculatePriceOfCar", () => {
        it("Should work with correct params", () => {
            let result = rentCar.calculatePriceOfCar("Audi", 4);
            expect(result).to.equal("You choose Audi and it will cost $144!")
        })
        it("Should return 0 for 0 days", () => {
            let result = rentCar.calculatePriceOfCar("Audi", 0);
            expect(result).to.equal("You choose Audi and it will cost $0!")
        })
        it("Should return negative for negative days", () => {
            let result = rentCar.calculatePriceOfCar("Audi", -1);
            expect(result).to.equal("You choose Audi and it will cost $-36!")
        })
        it("Should throw an error with nonexistent car model", () => {
            expect(() => rentCar.calculatePriceOfCar("Porsche", 1)).to.Throw("No such model in the catalog!")
        })
        it("Should not work with incorrect car model", () => {
            expect(() => rentCar.calculatePriceOfCar(12, 1)).to.Throw("Invalid input!")
        })
        it("Should not work with incorrect number of days", () => {
            expect(() => rentCar.calculatePriceOfCar("BMW", "2")).to.Throw("Invalid input!")
        })
        it("Should not work with floating point number", () => {
            expect(() => rentCar.calculatePriceOfCar("BMW", 1.5)).to.Throw("Invalid input!")
        })
        it("Should throw an error with an empty string", () => {
            expect(() => rentCar.calculatePriceOfCar("", 1)).to.Throw("No such model in the catalog!")
        })
    })

    describe("Checking the inner function checkBudget", () => {
        it("Should not work with invalid costPerDay", () => {
            expect(() => rentCar.checkBudget('1', 1, 2)).to.Throw("Invalid input!");
        })
        it("Should not work with invalid days", () => {
            expect(() => rentCar.checkBudget(1, "1", 2)).to.Throw("Invalid input!");
        })
        it("Should not work with invalid budget", () => {
            expect(() => rentCar.checkBudget(1, 1, "2")).to.Throw("Invalid input!");
        })

        it("Should not work with invalid costPerDay", () => {
            expect(() => rentCar.checkBudget(1.6, 1, 2)).to.Throw("Invalid input!");
        })
        it("Should not work with invalid days", () => {
            expect(() => rentCar.checkBudget(1, 1.5, 2)).to.Throw("Invalid input!");
        })
        it("Should not work with invalid budget", () => {
            expect(() => rentCar.checkBudget(1, 1, 2.5)).to.Throw("Invalid input!");
        })
        it("Should work with correct input", () => {
            let result = rentCar.checkBudget(50, 3, 200);
            expect(result).to.equal('You rent a car!')
        })
        it("Should work with just enough budget ", () => {
            let result = rentCar.checkBudget(50, 3, 150);
            expect(result).to.equal('You rent a car!')
        })
        it("Should work with just not enough budget ", () => {
            let result = rentCar.checkBudget(50, 3, 149);
            expect(result).to.equal('You need a bigger budget!')
        })
        it("Should work with 0 price", () => {
            let result = rentCar.checkBudget(0, 3, 149);
            expect(result).to.equal('You rent a car!')
        })
        it("Should work with 0 days", () => {
            let result = rentCar.checkBudget(10, 0, 149);
            expect(result).to.equal('You rent a car!')
        })
        it("Should work only with 0s", () => {
            let result = rentCar.checkBudget(0, 0, 0);
            expect(result).to.equal('You rent a car!')
        })
    })

});
