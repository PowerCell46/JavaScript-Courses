function cats(array) {

    class Cats1 {
        constructor(name, age) {
            this.catName = name,
                this.catAge = age
        }

        meow() {
            return this.catName + ", age " + this.catAge + " says Meow"
        }
    }


    for (let index = 0; index < array.length; index++) {
        let currentArray = (array[index]).split(" ");
        let currentCatObj = new Cats1(currentArray[0], currentArray[1]);
        console.log(currentCatObj.meow())
    }

}
