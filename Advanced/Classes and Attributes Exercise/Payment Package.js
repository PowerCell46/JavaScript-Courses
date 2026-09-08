describe("Testing the class PaymentPackage", function () {

    describe("Checking the constructor's values", () => {

        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Peter", 10);
        })

        it("The name is correct", function () {
            expect(paymentPackage["_name"]).to.equal('Peter');
        });
        it("The value is correct", () => {
            expect(paymentPackage["_value"]).to.equal(10);
        });
        it("The default VAT values is equal to 20", () => {
            expect(paymentPackage["_VAT"]).to.equal(20);
        });
        it("The default active value is true", () => {
            expect(paymentPackage["_active"]).to.equal(true);
        });
    })

    describe("Checking the getters of the function", () => {

        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Peter", 10);
        })

        it("Should return the correct name", () => {
            expect(paymentPackage["name"]).to.equal("Peter");
        });
        it("Should return the correct value", () => {
            expect(paymentPackage["value"]).to.equal(10);
        });
        it("Should return the correct VAT value", () => {
            expect(paymentPackage["VAT"]).to.equal(20);
        });
        it("Should retur nthe correct active value", () => {
            expect(paymentPackage["active"]).to.equal(true);
        });
    })

    describe("Testing the setters of the function", () => {

        it("Should not work if the name is a number", () => {
            expect(() => new PaymentPackage(10, 10)).to.Throw("Name must be a non-empty string");
        })
        it("Should not work if the length is 0", () => {
            expect(() => new PaymentPackage("", 10)).to.Throw("Name must be a non-empty string")
        })
        it("Should work properly with a valid name", () => {
            let currentInstance = new PaymentPackage("Peter", 10);
            expect(currentInstance["_name"]).to.equal("Peter");
            currentInstance.name = "Ivan";
            expect(currentInstance["name"]).to.equal("Ivan");
        })

        it("Should not work if the values is a non number type", () => {
            expect(() => new PaymentPackage("Peter", [10])).to.Throw("Value must be a non-negative number");
        })
        it("Should not work if the value is in a string format", () => {
            expect(() => new PaymentPackage("Peter", "10")).to.Throw("Value must be a non-negative number");
        })
        it("Should not work if the value is a negative number", () => {
            expect(() => new PaymentPackage("Peter", -10)).to.Throw("Value must be a non-negative number");
        })
        it("Should work if the values is equal to 0", () => {
            let currentInstance = new PaymentPackage("Peter", 0);
            expect(currentInstance["value"]).to.equal(0);
            currentInstance["value"] = 20;
            expect(currentInstance["value"]).to.equal(20);
        })

        it("Should not work with a non number type of VAT", () => {
            let currentInstance = new PaymentPackage("Peter", 10);
            expect(() => currentInstance.VAT = "Ivan").to.Throw("VAT must be a non-negative number");
        })
        it("Should work if the VAT value is set to 0", () => {
            let currentInstance = new PaymentPackage("Peter", 10);
            expect(currentInstance.VAT).to.equal(20);
            currentInstance.VAT = 0;
            expect(currentInstance.VAT).to.equal(0);
        })
        it("Should throw error if the value of VAT is negative", () => {
            let currentInstance = new PaymentPackage("Peter", 10);
            expect(() => currentInstance.VAT = -10).to.Throw("VAT must be a non-negative number");
        })
        it("Should not work if the VAT value is set as a string", () => {
            let currentInstance = new PaymentPackage("Peter", 10);
            expect(() => currentInstance.VAT = "10").to.Throw("VAT must be a non-negative number");
        })

        it("Should work if the active is a boolean", () => {
            let currentInstance = new PaymentPackage("Peter", 10);
            currentInstance.active = false;
            expect(currentInstance["active"]).to.equal(false);
        })
        it("Should not work if the ascive type is != boolean", () => {
            let currentInstance = new PaymentPackage("Peter", 10);
            expect(() => currentInstance.active = "Ivan").to.Throw("Active status must be a boolean");
        })

    })
    describe("Testing the toString inner function", () => {

        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Peter", 10);
        })

        it("Should work with an active state", () => {
            const output = [
                `Package: Peter`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): 12`,
            ].join("\n");
            expect(paymentPackage.toString()).to.equal(output)
        })

        it("Should work with inactive state", () => {
            const output = [
                `Package: Peter (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): 12`,
            ].join("\n");
            paymentPackage.active = false;
            expect(paymentPackage.toString()).to.equal(output)
        })
    })
});
