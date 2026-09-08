class CarDealership {
    constructor(name) {
        this.name = name,
        this.availableCars = [],
        this.soldCars = [],
        this.totalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {
        if (model === "" || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let foundModel = null;
        let searchIndex = -1;
        for (let obj of this.availableCars) {
            searchIndex++;
            if (obj.model === model) {
                foundModel = obj;
                break;
            }
        }
        if (foundModel === null) {
            throw new Error(`${model} was not found!`);
        }
        let currentCarMileage = foundModel.mileage;
        let price = null;
        if (currentCarMileage <= desiredMileage) {
            price = foundModel.price;
            this.soldCars.push({ model, horsepower: foundModel.horsepower, soldPrice: foundModel.price });
            this.availableCars.splice(searchIndex, 1);
            this.totalIncome += price
            return `${model} was sold for ${price.toFixed(2)}$`;

        } else if (Math.abs(desiredMileage - currentCarMileage) <= 40000) {
            price = foundModel.price - ((foundModel.price / 100) * 5);
            this.soldCars.push({ model, horsepower: foundModel.horsepower, soldPrice: price });
            this.availableCars.splice(searchIndex, 1);
            this.totalIncome += price
            return `${model} was sold for ${price.toFixed(2)}$`;

        } else if (Math.abs(desiredMileage - currentCarMileage) > 40000) {
            price = foundModel.price - ((foundModel.price / 10));
            this.soldCars.push({ model, horsepower: foundModel.horsepower, soldPrice: price });
            this.availableCars.splice(searchIndex, 1);
            this.totalIncome += price
            return `${model} was sold for ${price.toFixed(2)}$`;
        }
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars"
        }
        let returnArray = [];
        for (let obj of this.availableCars) {
            returnArray.push(`---${obj.model} - ${obj.horsepower} HP - ${obj.mileage.toFixed(2)} km - ${obj.price.toFixed(2)}$`);
        }
        return `-Available cars:\n${returnArray.join("\n")}`;
    }

    salesReport(criteria) {
        if (criteria === "horsepower") {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === "model") {
            this.soldCars.sort((a, b) => (a.model).localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }
        let reportArray = []
        for (let obj of this.soldCars) {
            reportArray.push(`---${obj.model} - ${obj.horsepower} HP - ${(obj.soldPrice).toFixed(2)}$`);
        }
        return `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n${reportArray.join("\n")}`
    }

}
