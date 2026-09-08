function employees(array) {

    for (let index = 0; index < array.length; index++) {
        let current_employee = array[index];
        let objEmployees = {
            name: current_employee,
            personalNumber: current_employee.length,
            func() {
                return "Name: " + this.name + " -- Personal Number: " + this.personalNumber
            }
        }
        console.log(objEmployees.func());
    }
}
