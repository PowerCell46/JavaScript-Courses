class Hex {
    constructor(value) {
        this.value = value
    }
    valueOf() {
        return this.value;
    }
    toString() {
        let hexObj = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }
        let copyValue = this.value;
        let result = ""
        while (copyValue > 0) {
            result = hexObj[copyValue % 16] + result;
            copyValue = Math.floor(copyValue / 16);
          }
          return "0x" + (result || "0");
    }

    plus(number) {
        if (typeof (number) == "object") {
            number = number.value;
        }
        return new Hex(this.value + number);
    }

    minus(number) {
        if (typeof (number) == "object") {
            number = number.value;
        }
        return new Hex(this.value - number);
    }

    parse(parseString) {
        let decimal = 0;
        for (let i = 0; i < parseString.length; i++) {
            let digit = parseInt(parseString[i], 16);
            decimal = decimal * 16 + digit;
        }
        return decimal;
    }
}
