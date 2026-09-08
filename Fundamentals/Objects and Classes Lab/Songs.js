function songs(array) {

    class Song1 {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time
        }


    }
    let finalType = array[array.length - 1];
    for (let index = 1; index <= Number(array[0]); index++) {
        let currentLine = (array[index]).split("_");
        let currentLineObj = new Song1(currentLine[0], currentLine[1], currentLine[2]);
        if (currentLineObj.typeList === finalType) {
            console.log(currentLineObj.name);
        } else if ( finalType === "all") {
            console.log(currentLineObj.name);
        }

    }

}
