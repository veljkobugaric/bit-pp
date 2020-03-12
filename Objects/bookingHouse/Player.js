
class Player {
    constructor(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }

    getData() {
        let currentTime = new Date();
        let personAge = currentTime.getFullYear() - this.person.dateOfBirth.getFullYear();
        return `${this.country.continent}, ${this.betAmount} eur, ${this.person.getFullName()} ${personAge}years`

    }
}

module.exports = { Player };