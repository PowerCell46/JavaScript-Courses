function tradeComissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let comission = 0;

    if (town === "Sofia") {

        if (sales >= 0 && sales <= 500) {
            comission = (sales / 100) * 5;
        } else if (sales > 500 && sales <= 1000) {
            comission = (sales / 100) * 7;
        } else if (sales > 1000 && sales <= 10000) {
            comission = (sales / 100) * 8;
        } else if (sales > 10000) {
            comission = (sales / 100) * 12;
        }

        if (comission > 0) {
            console.log(comission.toFixed(2));
        } else {
            console.log("error");
        }

    } else if (town === "Varna") {

        if (sales >= 0 && sales <= 500) {
            comission = (sales / 100) * 4.5;
        } else if (sales > 500 && sales <= 1000) {
            comission = (sales / 100) * 7.5;
        } else if (sales > 1000 && sales <= 10000) {
            comission = (sales / 100) * 10;
        } else if (sales > 10000) {
            comission = (sales / 100) * 13;
        }

        if (comission > 0) {
            console.log(comission.toFixed(2));
        } else {
            console.log("error");
        }

    } else if (town === "Plovdiv") {

        if (sales >= 0 && sales <= 500) {
            comission = (sales / 100) * 5.5;
        } else if (sales > 500 && sales <= 1000) {
            comission = (sales / 100) * 8;
        } else if (sales > 1000 && sales <= 10000) {
            comission = (sales / 100) * 12;
        } else if (sales > 10000) {
            comission = (sales / 100) * 14.5;
        }

        if (comission > 0) {
            console.log(comission.toFixed(2));
        } else {
            console.log("error");
        }

    } else {
        console.log("error");
    }
}
