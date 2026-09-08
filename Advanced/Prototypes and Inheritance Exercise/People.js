function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name,
            this.age = age,
            this.salary = 0,
            this.tasks = []
        }
    
        work() {
            const currentTask = this.tasks.shift();
            console.log(currentTask);
            this.tasks.push(currentTask);
        }
    
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    
    }
    
    
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age),
            this.tasks = [`${name} is working on a simple task.`]
        }
    }
    
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age),
            this.tasks = [`${name} is working on a complicated task.`, `${name} is taking time off work.`, `${name} is supervising junior workers.`]
        }
    }
    
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age),
            this.dividend = 0,
            this.tasks = [`${name} scheduled a meeting.`, `${name} is preparing a quarterly report.`]
        }
    
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {Employee, Junior, Senior, Manager};
}
