"use strict";
const { Country } = require('./Country');
const { Person } = require('./Person');
const { Player } = require('./Player');
const { Address } = require('./Address');
const { BettingPlace } = require('./BettingPlace');
const { BettingHouse } = require('./BettingHouse');
const { CONTINENTS } = require('./Continents');

    const usa = new Country("USA", "1.5", CONTINENTS.NORTH_AMERICA);
    const stefan = new Person("Stefan", "Milutinovic", "06.11.1993");
    const ivana = new Person("Ivana", "Milutinovic", "09.06.1994")
    const stefanKockar = new Player(stefan, 1050, usa);
    const ivanaKockar = new Player(ivana, 2000, usa)
    const rs = new Country("Serbia", "2.5", CONTINENTS.EUROPE);
    const nemanjina4 = new Address(rs, "Belgrade", "11000", "Nemanjina 4")
    const terazije4 = new Address(rs, "Belgrade", "11000", "Terazije 4")
    const mozzNemanjina = new BettingPlace(nemanjina4);
    const mozzTerazije = new BettingPlace(terazije4);
    const Tournament = new BettingHouse("World Cup")

    mozzNemanjina.addPlayer(stefanKockar);
    mozzTerazije.addPlayer(ivanaKockar);

    Tournament.addBettingPlace(mozzNemanjina);
    Tournament.addBettingPlace(mozzTerazije);

    console.log(Tournament.getData());

