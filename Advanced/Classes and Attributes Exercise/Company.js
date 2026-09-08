class Company {
    constructor() {
        this.departments = {};
        this.calcDepartments = {}
    }

    addEmployee(name, salary, position, department) {
        let inputArray = [name, salary, position, department];
        if (inputArray.includes("") || inputArray.includes(undefined) || inputArray.includes(null)) {
            throw new Error("Invalid input!");
        }
        if (Number(salary) < 0) {
            throw new Error("Invalid input!");
        }
        if (!Object.keys(this.departments).includes(department)) {
            this.departments[department] = {}
            this.departments[department][name] = {}
            this.departments[department][name][Number(salary)] = position;
            this.calcDepartments[department] = salary;
        } else {
            this.departments[department][name] = {}
            this.departments[department][name][Number(salary)] = position;
            this.calcDepartments[department] += salary;
        }
        return `New employee is hired. Name: ${name}. Position: ${[position]}`;
    }

    bestDepartment() {
        for (let key of Object.keys(this.calcDepartments)) {
            let currentAvgSalary = this.calcDepartments[key];
            currentAvgSalary = Number((currentAvgSalary / Object.keys(this.departments[key]).length).toFixed(2));
            this.calcDepartments[key] = currentAvgSalary;
        }

        let sortedDepartments = Object.entries(this.calcDepartments).sort(([, a], [, b]) => b - a);
        const employees = this.departments[sortedDepartments[0][0]];
        
        const sortedEmployees = Object.fromEntries(
            Object.entries(employees)
              .sort(([aName, aData], [bName, bData]) => {
                const aSalary = parseInt(Object.keys(aData)[0]);
                const bSalary = parseInt(Object.keys(bData)[0]);
                
                if (aSalary === bSalary) {
                  return aName.localeCompare(bName);
                }
                
                return bSalary - aSalary;
              })
          );
          let printOutput = []
          for (let key of Object.keys(sortedEmployees)) {
            printOutput.push(`${key} ${Object.keys(sortedEmployees[key])} ${Object.values(sortedEmployees[key])}`)
          }

        return `Best Department is: ${sortedDepartments[0][0]}\nAverage salary: ${(sortedDepartments[0][1]).toFixed(2)}\n${printOutput.join("\n")}`
    }
}
