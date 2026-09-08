function arenaTier(dataArray) {
    let gladiators = {};

    for (let data of dataArray) {

        if (data.includes("->")) {

            data = data.split(" -> ");
            let currentGladiator = data[0];
            let currentTechnique = data[1];
            let currentSkill = Number(data[2]);
            if (!Object.keys(gladiators).includes(currentGladiator)) {
                gladiators[currentGladiator] = {};
                gladiators[currentGladiator][currentTechnique] = currentSkill;
            } else {

                if (Object.keys(gladiators[currentGladiator]).includes(currentTechnique)) {
                    let previousSkill = gladiators[currentGladiator][currentTechnique];
                    if (currentSkill > previousSkill) {
                        gladiators[currentGladiator][currentTechnique] = currentSkill;
                    }
                } else {
                    gladiators[currentGladiator][currentTechnique] = currentSkill;
                }
            }

        } else {
            data = data.split(" vs ");
            const firstGladiator = data[0];
            const secondGladiator = data[1];
            if (Object.keys(gladiators).includes(firstGladiator) && Object.keys(gladiators).includes(secondGladiator)) {
                const firstGladiatorTechniques = Object.keys(gladiators[firstGladiator]);
                const secondGladiatorTechniques = Object.keys(gladiators[secondGladiator]);
                let intersectedTechnique = []
                for (let el of firstGladiatorTechniques) {
                    if (secondGladiatorTechniques.includes(el)) {
                        intersectedTechnique.push(el);
                        break
                    }
                }
                if (intersectedTechnique) {
                    let firstGladiatorSkill = gladiators[firstGladiator][intersectedTechnique[0]];
                    let secondGladiatorSkill = gladiators[secondGladiator][intersectedTechnique[0]];
                    if (firstGladiatorSkill > secondGladiatorSkill) {
                        delete gladiators[secondGladiator]
                    } else if (secondGladiatorSkill > firstGladiatorSkill) {
                        delete gladiators[firstGladiator]
                    }
                }
            }
        }
    }


    // Convert the gladiators object into an array of objects
    var gladiatorsArray = Object.entries(gladiators).map(function (entry) {
        var name = entry[0];
        var skills = entry[1];
        var totalSkill = Object.values(skills).reduce((acc, val) => acc + val, 0);
        return { name: name, skills: skills, totalSkill: totalSkill };
    });

    // Sort the gladiators array by total skill in descending order, then by name in ascending order
    gladiatorsArray.sort(function (a, b) {
        if (a.totalSkill === b.totalSkill) {
            return a.name.localeCompare(b.name); // Sort by name in ascending alphabetical order
        }
        return b.totalSkill - a.totalSkill; // Sort by total skill in descending order
    });

    // Create a new object with the sorted gladiators
    var sortedGladiators = {};
    gladiatorsArray.forEach(function (gladiator) {
        sortedGladiators[gladiator.name] = gladiator.skills;
    });


    for (let name of Object.keys(sortedGladiators)) {
        let skills = sortedGladiators[name];
        console.log(`${name}: ${(Object.values(gladiators[name])).reduce((a, b) => a + b)} skill`);


        // Convert the skills object into an array of arrays
        var skillsArray = Object.entries(skills);

        // Sort the skills array by value in descending order, then by key in ascending order
        skillsArray.sort(function (a, b) {
            if (a[1] === b[1]) {
                return a[0].localeCompare(b[0]); // Sort by key in ascending alphabetical order if values are equal
            }
            return b[1] - a[1]; // Sort by value in descending order
        });

        // Create a new object with the sorted skills
        var sortedSkills = {};
        skillsArray.forEach(function (skill) {
            sortedSkills[skill[0]] = skill[1];
        });


        for (let technique of Object.keys(sortedSkills)) {
            console.log(`- ${technique} <!> ${sortedSkills[technique]}`);
        }
    }
}
