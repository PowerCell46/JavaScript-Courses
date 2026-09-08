describe("Checking if the function create Calculator is working properly.", () => {
    let calc = null;
    beforeEach(() => {
        calc = createCalculator();
    })

    it("should return an object", () => {
        let result = createCalculator();
        expect(typeof result).to.equal("object");
    })
    it("returns 0 if gets is called first", () => {
        expect(calc.get()).to.equal(0);
    })

    it("Can add a number to the sum.", () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    })
    it("Can add more than one number.", () => {
        calc.add(5);
        calc.add(5);
        expect(calc.get()).to.equal(10);
    })
    it("Can subtract a number from the sum.", () => {
        calc.subtract(5);
        expect(calc.get()).to.equal(-5);
    })
    it("Can subtract more than one number from the sum.", () => {
        calc.subtract(5);
        calc.subtract(1);
        expect(calc.get()).to.equal(-6);
    })
    it("Can add and subtract at the same time.", () => {
        calc.add(5);
        calc.subtract(3);
        expect(calc.get()).to.equal(2);
    })
    it("Should work properly if instead of numbers we give out string numbers.", () => {
        calc.add("5");
        calc.subtract("1");
        expect(calc.get()).to.equal(4)
    })
    it("Should work with big numbers.", () => {
        calc.add("213");
        calc.subtract("43");
        calc.add(100);
        expect(calc.get()).to.equal(270);
    })
    it("Checking if all the functions are there.", () => {
        expect(calc).to.has.ownProperty("add");
        expect(calc).to.has.ownProperty("subtract");
        expect(calc).to.has.ownProperty("get");
    })
    it("Should work if we add a string number.", () => {
        calc.add("1");
        expect(calc.get()).to.equal(1);
    })
    it("Should work if we subtract a string number.", () => {
        calc.subtract("1");
        expect(calc.get()).to.equal(-1);
    })
})
