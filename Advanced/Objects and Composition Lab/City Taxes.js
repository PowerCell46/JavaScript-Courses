function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += this.population * this.taxRate; },
        applyGrowth(percent) { this.population += Math.floor((this.population / 100) * percent); },
        applyRecession(percent) { this.treasury -= Math.floor((this.treasury / 100) * percent); }
    }  
}
