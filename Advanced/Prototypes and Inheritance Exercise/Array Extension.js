(function arrayExtension() {
    let myArr = [1, 2, 3, 4, 5];

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let resultArray = this.slice(n);
        return resultArray
    }

    Array.prototype.take = function (n) {
        let resultArray = this.slice();
        resultArray = resultArray.splice(0, n);
        return resultArray
    }

    Array.prototype.sum = function () {
        let res = 0;
        this.forEach(x => res += x);
        return res;
    }

    Array.prototype.average = function () {
        let res = 0;
        this.forEach(x => res += x);
        return res / this.length
    }

})();
