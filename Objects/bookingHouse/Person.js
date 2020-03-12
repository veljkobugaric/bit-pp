class Person {
    constructor(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }
    getData() {
        return `${this.getFullName()} ${this.dateOfBirth.getDate()}.${this.DateOfBirth.getMonth() + 1} . ${this.dateOfBirth.getFullYear} `
    }
}
module.exports = { Person };