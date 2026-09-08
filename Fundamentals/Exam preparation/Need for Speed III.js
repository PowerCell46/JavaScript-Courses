function needForSpeed(array) {
    let numberOfCars = Number(array[0]);
    let x = 0;
    let parkingLot = {};

    for (let index = 0; index < numberOfCars; index++) {
        x++;
        let currentInput = array[x].split("|");
        let currentCar = currentInput.shift();
        let currentMileage = Number(currentInput.shift());
        let currentFuel = Number(currentInput.shift());
        parkingLot[currentCar] = {};
        parkingLot[currentCar][currentMileage] = [currentFuel]

    }
    x++;

    for (let xedni = x; xedni < array.length - 1; xedni++) {
        let currentInput = array[xedni].split(" : ");
        let currentCommand = currentInput.shift();
        switch (currentCommand) {
            case "Drive":
                let currentCar = currentInput.shift();
                let currentDistance = Number(currentInput.shift());
                let neededFuel = Number(currentInput.shift());
                let currentFuel = (parkingLot[currentCar]);
                currentFuel = Object.values(currentFuel);
                currentFuel = currentFuel[0][0];
                if (neededFuel > currentFuel) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    let currentMileage = (parkingLot[currentCar]);
                    currentMileage = Object.keys(currentMileage);
                    currentMileage = Number(currentMileage[0]);
                    currentMileage += currentDistance;
                    currentFuel -= neededFuel;
                    parkingLot[currentCar] = {}
                    let newFuelArray = [currentFuel];
                    parkingLot[currentCar][currentMileage] = newFuelArray;
                    console.log(`${currentCar} driven for ${currentDistance} kilometers. ${neededFuel} liters of fuel consumed.`);
                    if (currentMileage >= 100000) {
                        delete parkingLot[currentCar];
                        console.log(`Time to sell the ${currentCar}!`);
                    }
                }
                break;

            case "Refuel":
                let currentCarRefuel = currentInput.shift();
                let currentRefuelFuel = Number(currentInput.shift());
                let fuelTillNow = parkingLot[currentCarRefuel];
                fuelTillNow = Object.values(fuelTillNow)[0][0];
                let mileage = parkingLot[currentCarRefuel];
                mileage = Object.keys(mileage);
                mileage = Number(mileage[0]);
                if (fuelTillNow + currentRefuelFuel > 75) {
                    let usedFuel = 75 - fuelTillNow;
                    parkingLot[currentCarRefuel] = {}
                    let newFuelArrayRefuel = [75];
                    parkingLot[currentCarRefuel][mileage] = newFuelArrayRefuel;
                    console.log(`${currentCarRefuel} refueled with ${usedFuel} liters`);

                } else {
                    parkingLot[currentCarRefuel] = {}
                    let newFuelArrayRefuel2 = [(fuelTillNow + currentRefuelFuel)]
                    parkingLot[currentCarRefuel][mileage] = newFuelArrayRefuel2;
                    console.log(`${currentCarRefuel} refueled with ${currentRefuelFuel} liters`);
                }
                break;
            case "Revert":
                let revertCar = currentInput.shift();
                let revertKilometers = Number(currentInput.shift());
                let previousMileage = parkingLot[revertCar];
                previousMileage = Number(Object.keys(previousMileage)[0]);
                let revertFuel = parkingLot[revertCar];
                revertFuel = Number(Object.values(revertFuel)[0]);
                previousMileage -= revertKilometers;
                if (previousMileage < 10000) {
                    previousMileage = 10000;

                } else {
                    console.log(`${revertCar} mileage decreased by ${revertKilometers} kilometers`);
                }
                parkingLot[revertCar] = {}
                let revertFuelArray = [revertFuel];
                parkingLot[revertCar][previousMileage] = revertFuelArray;

                break;

        }
    }

    let cars = Object.keys(parkingLot)
    for (let index = 0; index < cars.length; index++) {
        let currentCar = cars[index];
        let currentRow = parkingLot[currentCar];
        let currentMileage = Object.keys(currentRow)[0];
        let currentFuel = Object.values(currentRow)[0];

        console.log(`${currentCar} -> Mileage: ${currentMileage} kms, Fuel in the tank: ${currentFuel} lt.`);
    }
}
