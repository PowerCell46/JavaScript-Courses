function Person(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;

    return {
        get fullName() {
            return fullName;
        },
        set fullName(value) {
            let parts = value.split(" ");
            firstName = parts[0];
            lastName = parts[1];
            fullName = value;
        },
        get firstName() {
            return firstName;
        },
        set firstName(value) {
            firstName = value;
            fullName = `${firstName} ${lastName}`;
        },
        get lastName() {
            return lastName;
        },
        set lastName(value) {
            lastName = value;
            fullName = `${firstName} ${lastName}`;
        }
    };
}
