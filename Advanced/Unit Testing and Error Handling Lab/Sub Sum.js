function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    } else {
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
            if (index >= startIndex && index <= endIndex) {
                if (typeof (array[index]) === "number") {
                    sum += array[index];
                } else {
                    return NaN;
                }
            } 
        }
        sum += ""; 
        if (sum.includes(".")) {
            return Number(Number(sum).toFixed(1));
        }
        return Number(sum);
    }
}
