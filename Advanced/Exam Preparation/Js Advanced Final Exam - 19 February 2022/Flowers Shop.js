describe("Tests …", function () {
    describe("Testing the inner function calcPriceOfflowers", function () {
        it("It should work with correct params", function () {
            let result = flowerShop.calcPriceOfFlowers("Хризантема", 2, 4);
            expect(result).to.equal("You need $8.00 to buy Хризантема!")
        });
        it("Should not work with incorrect params pt 1", () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 2, 3)).to.Throw("Invalid input!")
        })
        it("Should not work with incorrect params pt 2", () => {
            expect(() => flowerShop.calcPriceOfFlowers("Rose", 2.5, 3)).to.Throw("Invalid input!")
        })
        it("Should not work with incorrect params pt 3", () => {
            expect(() => flowerShop.calcPriceOfFlowers("Flower", 2, 3.5)).to.Throw("Invalid input!")
        })
        it("Should work with 0 price", () => {
            let result = flowerShop.calcPriceOfFlowers("Хризантема", 0, 4);
            expect(result).to.equal("You need $0.00 to buy Хризантема!")
        })
        it("Should work with 0 quantity", () => {
            let result = flowerShop.calcPriceOfFlowers("Хризантема", 4, 0);
            expect(result).to.equal("You need $0.00 to buy Хризантема!")
        })
        it("Should work with empty string", () => {
            let result = flowerShop.calcPriceOfFlowers("", 4, 0);
            expect(result).to.equal("You need $0.00 to buy !")

        })
    });

    describe("Checking the inner function checkFlowersAvailable", () => {
        it("Should work properly", () => {
            let result = flowerShop.checkFlowersAvailable(["Rose", "Lily", "Orchid"], "Rose");
            expect(result).to.equal("The Rose,Lily,Orchid are sold! You need to purchase more!")
        })
        it("Should work with empty array", () => {
            let result = flowerShop.checkFlowersAvailable([], "Rose");
            expect(result).to.equal("The  are available!")
        })
        it("Should work with an empty string", () => {
            let result = flowerShop.checkFlowersAvailable(["rose", "lily"], "");
            expect(result).to.equal("The rose,lily are sold! You need to purchase more!")
        })
        it("Should work with nonexistent flower", () => {
            let result = flowerShop.checkFlowersAvailable(["rose", "lily"], "хризантема");
            expect(result).to.equal("The rose,lily are sold! You need to purchase more!")
        })
        it("Should work with many", () => {
            let result = flowerShop.checkFlowersAvailable(["rose", "rose", "rose"], "rose");
            expect(result).to.equal("The rose,rose,rose are sold! You need to purchase more!")
        })
    })

    describe("Checking the inner function sellFlowers", () => {
        it("Should work with correct input", () => {
            let result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1);
            expect(result).to.equal("Rose / Orchid");
        })
        it("Should work with 0 index", () => {
            let result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0);
            expect(result).to.equal("Lily / Orchid");
        })
        it("Should work with the last index", () => {
            let result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2);
            expect(result).to.equal("Rose / Lily");
        })
        it("Should not work with negative index", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.Throw("Invalid input!")
        })
        it("Should not work with float index", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.5)).to.Throw("Invalid input!")
        })
        it("Should not work with string index", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "2")).to.Throw("Invalid input!")
        })
        it("Should not work with empty array", () => {
            expect(() => flowerShop.sellFlowers([], 0)).to.Throw("Invalid input!")
        })
        it("Should not work if the array is not one", () => {
            expect(() => flowerShop.sellFlowers({ "flower": "Lily" }, 0)).to.Throw("Invalid input!")
        })
    })
});
