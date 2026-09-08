class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = type;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        },
            this.fuel = Number(fuel)
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}
