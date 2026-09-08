class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer,
            this.location = location,
            this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 },
            this.listOfParticipants = [];
        this.listOfNames = [];
    }

    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfNames.includes(name)) {
            return (`The ${name} is already registered at the camp.`);
        }

        let neededMoneyForTheStay = this.priceForTheCamp[condition];
        if (money < neededMoneyForTheStay) {
            return `The money is not enough to pay the stay at the camp.`

        } else {
            let currentObj = { [name]: [condition, { power: 100 }, { wins: 0 }] };
            this.listOfParticipants.push(currentObj);
            this.listOfNames.push(name);
            return `The ${name} was successfully registered.`;
        }
    }

    unregisterParticipant(name) {
        if (!this.listOfNames.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            let searchIndex = this.listOfNames.indexOf(name);
            this.listOfParticipants.splice(searchIndex, 1);
            this.listOfNames.splice(searchIndex, 1);
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        switch (typeOfGame) {
            case "WaterBalloonFights":
                if (!this.listOfNames.includes(participant1) || !this.listOfNames.includes(participant2) || (!this.listOfNames.includes(participant1) && !this.listOfNames.includes(participant2))) {
                    throw new Error("Invalid entered name/s.");
                }
                let participant1Object = this.listOfNames.indexOf(participant1);
                let participant2Object = this.listOfNames.indexOf(participant2);
                participant1Object = this.listOfParticipants[participant1Object];
                participant2Object = this.listOfParticipants[participant2Object];
                let participant1Condition = Object.values(participant1Object)[0][0];
                let participant2Condition = Object.values(participant2Object)[0][0];
                if (participant2Condition != participant1Condition) {
                    throw new Error("Choose players with equal condition.");
                }
                let participant1Power = Object.values(Object.values(participant1Object)[0][1])[0];
                let participant2Power = Object.values(Object.values(participant2Object)[0][1])[0];
                if (participant1Power === participant2Power) {
                    return "There is no winner.";
                } else {
                    if (participant1Power > participant2Power) {
                        let finalParticipant1Obj = Object.values(participant1Object)[0].slice();
                        finalParticipant1Obj[2] = { wins: Number(Object.values(finalParticipant1Obj[2])) + 1 };
                        Object.values(participant1Object)[0][2] = finalParticipant1Obj[2];
                        return `The ${participant1} is winner in the game ${typeOfGame}.`

                    } else {
                        let finalParticipant2Obj = Object.values(participant2Object)[0].slice();
                        finalParticipant2Obj[2] = { wins: Number(Object.values(finalParticipant2Obj[2])) + 1 };
                        Object.values(participant2Object)[0][2] = finalParticipant2Obj[2];
                        return `The ${participant2} is winner in the game ${typeOfGame}.`
                    }
                }
            case "Battleship":
                if (!this.listOfNames.includes(participant1)) {
                    throw new Error("Invalid entered name/s.");
                }
                let battleshipParticipantIndex = this.listOfNames.indexOf(participant1);
                let participantObject = this.listOfParticipants[battleshipParticipantIndex];
                participantObject = Object.values(participantObject)[0].slice();
                let participantPower = Object.values(participantObject[1])[0] + 20;
                participantPower = { power: participantPower };
                participantObject[1] = participantPower;
                this.listOfParticipants[battleshipParticipantIndex] = { [participant1]: participantObject };
                return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let dataArray = []
        let orderedArrayOfWins = [];
        for (let data of this.listOfParticipants) {
            data = Object.values(data)[0][2];
            orderedArrayOfWins.push(Object.values(data)[0]);
        }
        let unorderedWins = orderedArrayOfWins.slice();
        orderedArrayOfWins.sort((a, b) => b - a);
        let listOfParticipantsCopy = this.listOfParticipants.slice();
        while (orderedArrayOfWins.length > 0) {
            let currentWinValue = orderedArrayOfWins[0];
            let currentIndex = unorderedWins.indexOf(currentWinValue);
            dataArray.push(`${Object.keys(listOfParticipantsCopy[currentIndex])} - ${Object.values(listOfParticipantsCopy[currentIndex])[0][0]} - ${Object.values(Object.values(listOfParticipantsCopy[currentIndex])[0][1])} - ${Object.values(Object.values(listOfParticipantsCopy[currentIndex])[0][2])}`);
            orderedArrayOfWins.splice(0, 1);
            unorderedWins.splice(currentIndex, 1);
            listOfParticipantsCopy.splice(currentIndex, 1);
        }
        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n${dataArray.join("\n")}`
    }
}
