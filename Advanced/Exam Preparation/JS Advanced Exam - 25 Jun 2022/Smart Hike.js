class SmartHike {
    constructor(username) {
        this.username = username,
        this.goals = {},
        this.listOfHikes = [],
        this.resources = 100,
        this.peaksArray = []
    }

    addGoal(peak, altitude) {
        if (this.peaksArray.includes(peak)) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude;
        this.peaksArray.push(peak);
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        if (!this.peaksArray.includes(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        let difference = this.resources - (time * 10);
        if (difference < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.resources = difference;
        this.listOfHikes.push({peak, time, difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`
    }

    rest(time) {
        this.resources += (time * 10);
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria === "hard" || criteria === "easy") {
            function bestHike(difficultyLevelCriteria, arrayOfData) {
                let bestResult = {peak: "default", time: 1000, difficultyLevel: difficultyLevelCriteria}
                for (let element of arrayOfData) {
                    if ( element["difficultyLevel"] === difficultyLevelCriteria) {
                        if(element["time"] < bestResult["time"]) {
                            bestResult = element;
                        }
                    }
                }
                return bestResult;
            }   
            let returnHike = bestHike(criteria, this.listOfHikes);
            if (returnHike["peak"] === "default") {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            return `${this.username}'s best ${criteria} hike is ${returnHike["peak"]} peak, for ${returnHike["time"]} hours`
        
        } else if (criteria === "all") {
            let returnArr = [];
            for (let el of this.listOfHikes) {
                returnArr.push(`${this.username} hiked ${el["peak"]} for ${el["time"]} hours`)
            }
            return `All hiking records:\n${returnArr.join("\n")}`;
        }
    }
}
