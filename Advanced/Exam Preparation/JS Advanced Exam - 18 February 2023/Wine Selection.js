class WineSelection {
    constructor(space) {
        this.space = space,
            this.wines = [],
            this.bill = 0,
            this.winesNames = [],
            this.winesTypes = []
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space > 0) {
            this.space -= 1;
            let currentObj = {}
            currentObj[wineName] = [wineType, price, { paid: false }];

            this.wines.push(currentObj);
            this.winesNames.push(wineName);
            this.winesTypes.push(wineType);
            return `You reserved a bottle of ${wineName} ${wineType} wine.`

        } else {
            throw new Error("Not enough space in the cellar.");
        }
    }

    payWineBottle(wineName, price) {
        if (this.winesNames.includes(wineName)) {
            let searchIndex = this.winesNames.indexOf(wineName);
            let currentObj = this.wines[searchIndex];
            if (Object.values(Object.values(currentObj)[0][2])[0] + "" === "false") {
                Object.values(currentObj)[0][2] = { paid: true };
                this.wines[searchIndex] = currentObj;
                this.bill += price;
                return `You bought a ${wineName} for a ${price}$.`;

            } else {
                throw new Error(`${wineName} has already been paid.`);
            }

        } else {
            throw new Error(`${wineName} is not in the cellar.`);
        }
    }

    openBottle(wineName) {
        if (this.winesNames.includes(wineName)) {
            let searchIndex = this.winesNames.indexOf(wineName);
            let currentObj = this.wines[searchIndex];
            if (Object.values(Object.values(currentObj)[0][2])[0] === false) {
                throw new Error(`${wineName} need to be paid before open the bottle.`);
            } else {
                this.wines.splice(searchIndex, 1);
                this.winesNames.splice(searchIndex, 1);
                this.winesTypes.splice(searchIndex, 1);
                return `You drank a bottle of ${wineName}.`;
            }
        } else {
            throw new Error("The wine, you're looking for, is not found.");
        }
    }

    cellarRevision(wineType) {
        if (wineType === undefined) {
            let sortedWinesArr = [];
            let sortedWines = this.winesNames.slice();
            sortedWines = sortedWines.sort((a, b) => a.localeCompare(b));
            for (let wine of sortedWines) {
                let currentSearchIndex = this.winesNames.indexOf(wine);
                let currentObj = Object.values(this.wines[currentSearchIndex])[0];
                if (Object.values(currentObj[2]) + "" == "true") {
                    sortedWinesArr.push(wine + " > " + currentObj[0] + " - " + "Has Paid.");
                } else {
                    sortedWinesArr.push(wine + " > " + currentObj[0] + " - " + "Not Paid.");
                }
            }
            return `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n${sortedWinesArr.join("\n")}`

        } else {
            if (this.winesTypes.includes(wineType)) {
                for (let wine of this.wines) {
                    if (Object.values(wine)[0][0] === wineType) {
                        if (Object.values(Object.values(wine)[0][2]) + "" == "true") {
                            return `${Object.keys(wine)[0]} > ${wineType} - ${"Has Paid"}.`
                        } else {
                            return `${Object.keys(wine)[0]} > ${wineType} - ${"Not Paid"}.`
                        }
                    }
                }
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
        }
    }
}
