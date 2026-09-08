(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }
    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }
    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (n < 4) {
      return '.'.repeat(n);
    }

    const words = this.split(' ');
    let truncatedString = '';
    for (let i = 0; i < words.length; i++) {
      if (truncatedString.length + words[i].length + 3 > n) {
        break;
      }
      truncatedString += words[i] + ' ';
    }
    return truncatedString.trim() + '...';
  };

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      const regex = new RegExp(`\\{${i}\\}`, 'g');
      string = string.replace(regex, params[i]);
    }
    return string;
  };
})()
