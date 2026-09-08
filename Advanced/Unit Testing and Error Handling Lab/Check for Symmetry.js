describe("Checking if the function checks properly if an array is symmetric or not.", () => {

    it("Should return false if input is not an array.", () => {
        //Arrange
        let input = { 1: 2, 2: 1 };
        //Act
        let result = isSymmetric(input);
        //
        expect(result).to.be.false;
    })
    it("Should return true if input is a symmetric array.", () => {
        //Arrange
        let input = [1, 2, 2, 1];
        //Act 
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    })
    it("Should return false if the array is not symmetric.", () => {
        //Arrange
        let input = [1, 2, 3, 4];
        //Act 
        let result = isSymmetric(input);
        //Assert 
        expect(result).to.be.false;
    })
    it("Should work even if the elements aren't numbers.", () => {
        //Arrange
        let input = [false, true, true, false];
        //Act 
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    })
    it("Should work if the length of the array is an odd number.", () => {
        //Arrange
        let input = [1, 2, "Something", 2, 1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    }
    )
    it("Should return false if instead of an array we put a number.", () => {
        let result = isSymmetric(121);
        expect(result).to.be.false
    })
    it("Should return false is one of the elements is a string and the others are numbers.", () =>  {
        let result = isSymmetric([1, 2, "1"]);
        expect(result).to.be.false;
    })
})
