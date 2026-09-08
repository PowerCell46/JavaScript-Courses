function evenPositionElement(array) {
    array = array.filter((el, index) => index % 2 == 0);
    return array.join(" ");
}
