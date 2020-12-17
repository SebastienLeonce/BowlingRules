import ObjUser from './User';

export default class Game {
    constructor () {
        this.Users = [];
    }

    addPlayer(Username) {
        this.Users.push(new ObjUser(Username));
    }

    tourSuivant() {
        this.tourCourant++;
        for (User in this.Users) {
            User.tourCourant = this.tourCourant;
        }
    }
}