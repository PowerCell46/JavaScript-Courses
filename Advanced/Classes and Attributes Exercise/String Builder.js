describe("Testing the function StringBuilder and it's functionalities", () => {

    it("Should work correctly with a string.", () => {
        let currentInstance = new StringBuilder("Peter");
        expect(currentInstance.toString()).to.equal("Peter")
    })
    it("Should not work if the input is an array", () => {
        expect(() => new StringBuilder(["Peter"])).to.Throw("Argument must be a string")
    })
    it("Should not work if the input is a number", () => {
        expect(() => new StringBuilder(1234)).to.Throw("Argument must be a string")
    })
    it("Should work with empty string", () => {
        let currentInstance = new StringBuilder("");
        expect(currentInstance.toString()).to.equal("");
    })


    it("The append method should work with correct input", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.append("Ivan");
        expect(currentInstance.toString()).to.equal("PeterIvan");
    })
    it("The append should not work if the input data is an array", () => {
        let currentInstance = new StringBuilder("Peter");
        expect(() => currentInstance.append([1, 2, 3])).to.Throw("Argument must be a string")
    })
    it("The append method should not work if the input is a number", () => {
        let currentInstance = new StringBuilder("Peter");
        expect(() => currentInstance.append(123)).to.Throw("Argument must be a string")
    })
    it("The append method should work with empty input", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.append("");
        expect(currentInstance.toString()).to.equal("Peter");
    })


    it("The prepend method should work properly with correct input", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.prepend("Dear, ");
        expect(currentInstance.toString()).to.equal("Dear, Peter");
    })
    it("The prepend should not work if the input data is an array", () => {
        let currentInstance = new StringBuilder("Peter");
        expect(() => currentInstance.prepend([1, 2, 3])).to.Throw("Argument must be a string")
    })
    it("The prepend method should not work if the input is a number", () => {
        let currentInstance = new StringBuilder("Peter");
        expect(() => currentInstance.prepend(123)).to.Throw("Argument must be a string")
    })
    it("The prepend method should work with empty input", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.prepend("");
        expect(currentInstance.toString()).to.equal("Peter");
    })


    it("The insertAt method should work with correct parameters", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.append(" is a programmer.");
        currentInstance.insertAt(" Gerdzhikov", 5);
        expect(currentInstance.toString()).to.equal("Peter Gerdzhikov is a programmer.")
    })
    it("The insert should work with index = 0", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.insertAt("No other than ", 0);
        expect(currentInstance.toString()).to.equal("No other than Peter");
    })
    it("The insert method should work with index = length -1", () => {
        let currentInstance = new StringBuilder("Petev");
        currentInstance.insertAt("r Gerdzhiko", 4);
        expect(currentInstance.toString()).to.equal("Peter Gerdzhikov");
    })



    it("The remove method should work properly with correct parameters", () => {
        let currentInstance = new StringBuilder("Pettter");
        currentInstance.remove(3, 2);
        expect(currentInstance.toString()).to.equal("Peter");
    })
    it("The remove method should work if we start from index 0", () => {
        let currentInstance = new StringBuilder("Peter Gerdzhikov");
        currentInstance.remove(0, 6);
        expect(currentInstance.toString()).to.equal("Gerdzhikov");
    })
    it("The remove method should work if we remove to the last elemet", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.remove(2, 3);
        expect(currentInstance.toString()).to.equal("Pe");
    })
    it("Nothing should happen if we input length 0", () => {
        let currentInstance = new StringBuilder('Peter');
        currentInstance.remove(1, 0);
        expect(currentInstance.toString()).to.equal('Peter');
    })
    it("Should return empty string if we remove more than we actually have", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.remove(0, 10);
        expect(currentInstance.toString()).to.equal('');
    })
    it("Should work if we remove more than we have (not starting from 0)", () => {
        let currentInstance = new StringBuilder("Peter");
        currentInstance.remove(2, 10);
        expect(currentInstance.toString()).to.equal("Pe");
    })


    it("toString works correctly - 2", () => {
        const expected = '\n A \n\r B\t123   ';
        const obj = new StringBuilder();
        expected.split('').forEach(s => { obj.append(s); obj.prepend(s); });
        obj.insertAt('test', 4);
        obj.remove(2, 4);
        expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
    })
})
