"use strict";
(function () {
    var CONTINENT = Object.freeze({
        EUROPE: "EU",
        AFRICA: "AF",
        ASIA: "AS",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU",
    });

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateOfbirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfbirth = new Date(dateOfbirth);
    }
    Person.prototype.getData = function () {
        return this.name + " " + this.surname + " " + this.dateOfbirth.getDate() + "." + this.dateOfbirth.getMonth() + "." + this.dateOfbirth.getFullYear();
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

    }


    Player.prototype.getData = function () {

    }

    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
    }

    Address.prototype.getData = function () {
        return this.streetAndNumber + ",  " + this.postalCode + " " + this.city + ",  " + this.country;
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPLayers = [];
    }

    function BettingHouse(competition, numberOfPLayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = numberOfPLayers;
    }




    var person = new Person("Milos", "Manojlovic", "05.24.1991");
    console.log(person.getData());






















})();