class BettingHouse {
    constructor(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = 0;
    }
    addBettingPlace(BettingPlace) {
        this.listOfBettingPlaces.push(BettingPlace);
        this.numberOfPLayers++;
    }

    getData() {
        let betHouse = "";
        this.listOfBettingPlaces.forEach(function (BettingPlace) {
            betHouse += `${BettingPlace.getData()}\n`

            BettingPlace.listOfPLayers.forEach(function (player) {
                betHouse += `${player.getData()}\n`
            })
        })
        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfPLayers} bets\n ${betHouse}`;

    }
}
module.exports = { BettingHouse };