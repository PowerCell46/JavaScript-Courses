class Figure {
    constructor() {
        this.propertyUnits = "cm";
    }

    get area() {
        // Your implementation here...
    }

    changeUnits(units) {
        this.propertyUnits = units;
    }

    toString() {
        return `Figure's units: ${this.propertyUnits}`;
    }
}

class Circle extends Figure {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius
    }

    toString() {
        return `Figures units: ${this.propertyUnits} Area: ${this.area} - radius: ${this.radius}`
    }
}

class Rectangle extends Figure {
    constructor(width, height, units) {
        super();
        this.width = width;
        this.height = height;
        this.propertyUnits = units
    }

    get area() {
        return this.width * this.height
    }

    toString() {
        return `Figures units: ${this.propertyUnits} Area: ${this.area} - width: ${this.width}, height: ${this.height}`

    }
}

