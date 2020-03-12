class Address {
    constructor(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
    }

    getData() {
        return `${this.streetAndNumber}, ${this.postalCode} ${this.city}, ${this.country.continent} `
    }
}
module.exports = { Address };