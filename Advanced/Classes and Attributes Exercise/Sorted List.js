class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }
    add(number) {
        this.array.push(Number(number));
        this.size = this.array.length;
        this.array.sort((a,b) => a -b);
    }
    remove(index) {
        if(index < 0 || index >= this.array.length) {
            throw new Error("You have entered invalid index");
        }
        this.array.splice(Number(index), 1);
        this.size = this.array.length;
        this.array.sort((a,b) => a -b);
    }
    get(index) {
        return this.array[index];
    }
}
