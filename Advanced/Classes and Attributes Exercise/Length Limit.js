class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString,
            this.innerLength = innerLength
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        while (length > 0) {
            if (this.innerLength - 1 > -1) {
                this.innerLength--;
                length--;
            } else {
                break;
            }
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else if (this.innerLength === 0) {
            return "..."
        } else {
            return this.innerString.substring(0, this.innerLength) + "...";
        }
    }

}
