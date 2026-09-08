class Storage {
    constructor(capacity) {
        this.capacity = capacity,
            this.storage = [],
            this.totalCost = 0
    }

    addProduct(product) {
        this.capacity -= product.quantity;
        this.totalCost += product.quantity * product.price;
        this.storage.push(product);

    }

    getProducts() {
        let result = [];
        for (let el of this.storage) {
            result.push(JSON.stringify(el));
        }
        return result.join("\n");
    }
}
