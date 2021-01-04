import ObjUser from './User';

export default class Game {
    constructor () {
        this.Users         = [];
        this.tourCourant   = 1;
        this.joueurCourant = 0;
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

    joueurSuivant() {
        if (this.tourCourant < 11) {
            if (this.joueurCourant < this.Users.length) {
                this.joueurCourant++;
            } else {
                this.joueurCourant = 0;
                this.tourCourant++;
                for (let i = 0; i < this.Users.length; i++) {
                    this.Users[i].tourCourant = this.tourCourant;
                }
            }
        } else if (this.tourCourant < 13) {
            console.log("TODO gestion après le tour 10")
            return -1;
        } else {
            return -1;
        }
    }
}