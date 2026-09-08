describe("Writing unit tests to check if the function rgbToHexColor is working properly.", () => {
    it("Should return string as a result with correct input.", () => {
        let result = rgbToHexColor(60, 43, 129);
        expect(typeof result).to.equal("string")
    })
    it("The length of the input should be 7 symbols", () => {
        let result = rgbToHexColor(45, 32, 154);
        expect(result.length).to.equal(7);
    })
    it("Should start with a hashtag", () => {
        let result = rgbToHexColor(34, 56, 78);
        expect(result[0]).to.equal("#");
    })
    it("Should work if the three input values are zeros.", () => {
        let result = rgbToHexColor(0, 0, 0);
        expect(result).to.equal("#000000");
    })
    it("Should work properly if the three input values are 255.", () => {
        let result = rgbToHexColor(255, 255, 255);
        expect(result).to.equal("#FFFFFF");
    })
    it("Should work properly with three values in the given range.", () => {
        let result = rgbToHexColor(100, 70, 120);
        expect(result).to.equal("#644678")
    })
    it("Should return undefined if any of the values is != number.", () => {
        let result = rgbToHexColor([100], 100, 100);
        expect(result).to.equal(undefined);
    })
    it("Should return undefined if any of the values is smaller than 0.", () => {
        let result = rgbToHexColor(-10, 10, 100);
        expect(result).to.equal(undefined);
    })
    it("Should return udnefined if the values are strings.", () => {
        let result = rgbToHexColor("10", "100", "50");
        expect(result).to.equal(undefined);
    })
    it("Should return undefined if any of the values is bigger than 255.", () => {
        let result = rgbToHexColor(300, 1000, 3243);
        expect(result).to.equal(undefined);
    })
    it("Should return undefined if you enter floating numbers.", () => {
        let result = rgbToHexColor(123.5, 87.8, 49.2);
        expect(result).to.equal(undefined)
    })
    it("Should return undefined if one of the inputs is missing.", () => {
        let result = rgbToHexColor(100, 1);
        expect(result).to.equal(undefined);
    })
})
