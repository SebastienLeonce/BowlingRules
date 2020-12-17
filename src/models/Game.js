import ObjUser from './User';

export default class Game {
    constructor () {
        this.Users = [];
        this.tourCourant = 1;
    }

    addPlayer(Username) {
        this.Users.push(new ObjUser(Username));
    }

    tourSuivant() {
        this.tourCourant++;
        for (let i = 0; i < this.Users.length; i++) {
            this.Users[i].tourCourant = this.tourCourant;
        }
    }
}