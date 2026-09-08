function pieceOfPie(pieFlavoursArray, firstTargetFlavour, secondTargetFlavour) {
    let firstIndex = pieFlavoursArray.indexOf(firstTargetFlavour);
    let secondIndex = pieFlavoursArray.indexOf(secondTargetFlavour);
    let newArray = pieFlavoursArray.splice(firstIndex, (secondIndex - firstIndex + 1));
    return newArray
}
