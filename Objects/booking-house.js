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

    class Country {
        constructor(name, odds, continent) {
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        }
    }

    class Person {
        constructor(name, surname, dateOfBirth) {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = new Date(dateOfBirth);
        }
        getFullName() {
            return `${this.name}, ${this.surname}`;
        }
        getData() {
            return `${this.getFullName()}, ${this.dateOfBirth.getDate()}.${(this.dateOfBirth.getMonth() + 1)}.${this.dateOfBirth.getFullYear()}`;
        }
    }

    class Player {
        constructor(person, betAmount, country) {
            this.person = person;
            this.betAmount = betAmount;
            this.country = country;
        }
        getPlayerData() {
            let currentTime = new Date();
            let personAge = currentTime.getFullYear() - this.person.dateOfBirth.getFullYear();
            return `${this.country.continent}, ${this.betAmount}eur , ${this.person.getFullName()}, ${personAge}years`;
        }

    }

    class Address {
        constructor(country, city, postalCode, streetAndNumber) {
            this.country = country;
            this.city = city;
            this.postalCode = postalCode;
            this.streetAndNumber = streetAndNumber;
        }
        getData() {
            return `${this.streetAndNumber},  ${this.postalCode},  ${this.city},  ${this.country.continent}`;
        }
    }


    class BettingPlace {
        constructor(address) {
            this.address = address;
            this.listOfPLayers = [];
        }
        addPlayer(player) {
            this.listOfPLayers.push(player);
        }
        getData() {
            let playersString = '';

            this.listOfPLayers.forEach(function (player) {
                playersString += player.getPlayerData() + '\n';
            })

            return playersString;
        }
    }


    class BettingHouse {
        constructor(competition, numberOfPLayers) {
            this.competition = competition;
            this.listOfBettingPlaces = [];
            this.numberOfPLayers = numberOfPLayers;
        }
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
    console.log(mozzNemanjina.getData());







































})();