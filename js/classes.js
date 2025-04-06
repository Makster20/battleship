class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits += 1;
    }

    isSunk(){
        if (this.hits === this.length){
            return true;
        }
        return false;
    }
}


class Gameboard {
    constructor(){
        // '' is empty, '-' is ship placed, '|' is ship can't be placed, '.' is mine dropped, 'x' is mine dropped on ship

        this.gameboard = [
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                        ['', '', '', '', '','' ,'', '', '', ''],
                                                                ]
        this.ships = [];
        }

    placeShip(shipLength, firstPos, secondPos, orientation){
        const ship = new Ship(shipLength);
        this.ships.push(ship)

        let firstPosY = firstPos[0];
        let firstPosX = firstPos[1];

        let secondPosY = secondPos[0];
        let secondPosX = secondPos[1];

        // Adds ships to gameboard array
        for (let i = 0; i < shipLength; i++) {
            this.gameboard[firstPosX][firstPosY] = '-';
            if (orientation === 'horizontal'){
                firstPosX += 1;
            }
            else if (orientation === 'vertical'){
                firstPosY += 1;
            }
        }

        // Adds areas around ships, where they can't be placed again
        

    }
}