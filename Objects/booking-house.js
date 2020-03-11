"use strict";

(function () {
    const CONTINENTS = Object.freeze({
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    });

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    Person.prototype.getFullName = function () {
        return `${this.name}, ${this.surname}`;
    }
    Person.prototype.getData = function () {
        return `${this.getFullName()}, ${this.dateOfBirth.getDate()}.${(this.dateOfBirth.getMonth() + 1)}.${this.dateOfBirth.getFullYear()}`;
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }
    Player.prototype.getPlayerData = function () {
        let currentTime = new Date();
        let personAge = currentTime.getFullYear() - this.person.dateOfBirth.getFullYear();
        return `${this.country.continent}, ${this.betAmount}eur , ${this.person.getFullName()}, ${personAge}years`;
    }

    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
    }
    Address.prototype.getData = function () {
        `${this.streetAndNumber}, ${this.postalCode} ${this.city}, ${this.country.continent} `
        return `${this.streetAndNumber},  ${this.postalCode},  ${this.city},  ${this.country.continent}`;
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPLayers = [];
    }
    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPLayers.push(player);
    }
    BettingPlace.prototype.getData = function () {
        let playersString = '';

        this.listOfPLayers.forEach(function (player) {
            playersString += player.getPlayerData() + '\n';
        })

        return playersString;
    }

    function BettingHouse(competition, numberOfPLayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = numberOfPLayers;
    }


    const usa = new Country('USA', '1.5', CONTINENTS.NORTH_AMERICA);
    const srb = new Country('RS', '2.0', CONTINENTS.EUROPE);

    const stefan = new Person('Stefan', 'Milutinovic', '07.11.1993');
    const veljko = new Person('Veljko', 'Bugaric', '08.18.1997');

    const stefanKockar = new Player(stefan, 1050, usa);
    const veljkoKockar = new Player(veljko, 2000, srb);

    const nemanjina4 = new Address(srb, 'Belgrade', '11000', 'Nemanjina 4')
    const mozzNemanjina = new BettingPlace(nemanjina4);

    mozzNemanjina.addPlayer(stefanKockar);
    mozzNemanjina.addPlayer(veljkoKockar);

    console.log(mozzNemanjina.getData());




































})();