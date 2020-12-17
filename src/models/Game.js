import ObjUser from './User';

export default class Game {
    constructor () {
        this.Users = [];
        this.tourCourant = 0;
    }

    addPlayer(Username) {
        this.Users.push(new ObjUser(Username));
    }

    tourSuivant() {
        this.tourCourant++;
        for (let User in this.Users) {
            User.tourCourant = this.tourCourant;
        }
    }
}