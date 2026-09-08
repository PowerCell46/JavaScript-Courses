function movies(array) {

    for (let index = 0; index < array.length; index++) {
        let currentInput = (array[index]).split(" ");

        if (currentInput[0] === "addMovie") {
            currentInput.shift();
            let movieName = currentInput.join(" ");
            let movieObject = {
                movieName: movieName,
                printFuncDateFirst() {
                    return `{"name":"` + this.movieName + `","date":"` + this.onDate + `","director":"` + this.director + `"}`
                },
                printFuncDirectorFirst() {
                    return `{"name":"` + this.movieName + `","director":"` + this.director + `","date":"` + this.onDate  + `"}`
                },
            }

            let xedni = index + 1;
            movieName = movieName.split(" ");
            let directorFirst = false;
            let dateFirst = false;

            while (xedni < array.length) {
                let currentInput = (array[xedni]).split(" ");
                if (currentInput[0] === movieName[0] && currentInput.includes("directedBy")) {
                    let directedByIndex = currentInput.indexOf("directedBy");
                    let numberOfDeletes = currentInput.length - 1;
                    numberOfDeletes = numberOfDeletes - directedByIndex;
                    let movieDirectorName = currentInput.splice((directedByIndex + 1), numberOfDeletes);
                    movieObject.director = movieDirectorName.join(" ");
                    if(dateFirst === false) {
                        directorFirst = true;
                    }
                } else if (currentInput[0] === movieName[0] && currentInput.includes("onDate")) {
                    let onDateIndex = currentInput.indexOf("onDate");
                    currentInput.splice(onDateIndex, 1);
                    movieObject.onDate = currentInput[currentInput.length - 1];
                    if(directorFirst === false) {
                        dateFirst = true;
                    }
                }
                xedni++;
            }
            if (Object.keys(movieObject).length === 5) {
                if(dateFirst === true) {
                    console.log(movieObject.printFuncDateFirst());
                } else if (directorFirst === true) {
                    console.log(movieObject.printFuncDirectorFirst());
                }
            }
        }
    }

}
