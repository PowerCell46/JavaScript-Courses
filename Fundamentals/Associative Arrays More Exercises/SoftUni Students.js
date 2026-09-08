function softUniStudents(array) {

    let objOfCourses = {}
    let objOfCoursesWithCapacities = {}

    for (let index in array) {
        let currentInput = array[index].split(" ");
        if (currentInput[0][currentInput[0].length - 1] === ":") {
            let currentCourse = currentInput[0].split("");
            currentCourse.pop();
            currentCourse = currentCourse.join("");
            let currentCourseCapacity = Number(currentInput[1]);
            if (!objOfCourses.hasOwnProperty(currentCourse)) {
                objOfCourses[currentCourse] = {}
                objOfCoursesWithCapacities[currentCourse] = currentCourseCapacity;
            } else {
                objOfCoursesWithCapacities[currentCourse] = (objOfCoursesWithCapacities[currentCourse] + currentCourseCapacity);
            }
        } else {
            let currentUsername = currentInput[0].split("");
            currentUsername.pop();
            currentUsername = currentUsername.join("");
            currentUsername = currentUsername.split("[");
            let currentUsernameCredits = Number(currentUsername.pop());
            currentUsername = currentUsername[0];
            let currentEmail = currentInput[3];
            let currentCourseName = currentInput[5];
            let arrayOfCourses = Object.keys(objOfCourses);
            if (arrayOfCourses.includes(currentCourseName) && objOfCoursesWithCapacities[currentCourseName] > 0) {
                objOfCoursesWithCapacities[currentCourseName] = objOfCoursesWithCapacities[currentCourseName] - 1;
                objOfCourses[currentCourseName][currentUsernameCredits] = {}
                objOfCourses[currentCourseName][currentUsernameCredits][currentUsername] = {}
                objOfCourses[currentCourseName][currentUsernameCredits][currentUsername] = currentEmail;
            }
        }
    }
    let objCourseToStudentsRatio = {}

    let arrayOfCourses = Object.keys(objOfCourses);

    for (let course of arrayOfCourses) {
        let currentNumberOfStudents = Object.values(objOfCourses[course]).length;
        objCourseToStudentsRatio[course] = currentNumberOfStudents;
    }

    let arrayOfNumberOfStudentsOrdered = Object.values(objCourseToStudentsRatio).sort((a, b) => b - a);
    for (let numberOfStudents of arrayOfNumberOfStudentsOrdered) {
        for (let course of Object.keys(objCourseToStudentsRatio)) {
            if (numberOfStudents === objCourseToStudentsRatio[course]) {
                console.log(`${course}: ${objOfCoursesWithCapacities[course]} places left`);
                delete objCourseToStudentsRatio[course];
                let arrayOfCreditsOfTheCurrentCourse = Object.keys(objOfCourses[course]);
                let arrayOfCreditsOfTheCurrentCourseOrdered = arrayOfCreditsOfTheCurrentCourse.map((x) => Number(x)).sort((a,b) => b - a);
                for (let currentCredits of arrayOfCreditsOfTheCurrentCourseOrdered) {
                    let currentUsername = Object.keys(objOfCourses[course][currentCredits])[0];
                    let currentEmail = Object.values(objOfCourses[course][currentCredits])[0];
                    console.log(`--- ${currentCredits}: ${currentUsername}, ${currentEmail}`);
                }
            }
        }
    }
}
