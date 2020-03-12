class BettingPlace {
    constructor(address) {
        this.address = address;
        this.listOfPLayers = [];
    }
    addPlayer(player) {
        this.listOfPLayers.push(player);
    }
    getData() {
        let players1 = "";
        this.listOfPLayers.forEach(function (player) {
            players1 += player.getData() + "\n";

        })
        return players1;
    }
}
module.exports = { BettingPlace };