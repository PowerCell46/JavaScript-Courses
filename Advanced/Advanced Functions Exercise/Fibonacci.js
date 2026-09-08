function getFibonator() {
    let workingArray = [0];
    return function fibonacci() {
        if (workingArray.length === 1) {
            workingArray.push(1);
            return 1;
        } else {
        let newElement = workingArray[workingArray.length - 1] + workingArray[workingArray.length - 2];
        workingArray.push(newElement);
        return newElement
    }
}
}
