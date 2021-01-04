import ObjUser from './User';

export default class Game {
    constructor () {
        this.Users         = [];
        this.tourCourant   = 1;
        this.joueurCourant = 0;
        this.blackList     = [];
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
            if (this.joueurCourant < this.Users.length - 1) {
                if (!this.Users[this.joueurCourant].isRelance2Available() || this.Users[this.joueurCourant].getScoreTourSecondLance(this.tourCourant) != 0) {
                    this.joueurCourant++;
                }
            } else {
                if (!this.Users[this.joueurCourant].isRelance2Available()  || this.Users[this.joueurCourant].getScoreTourSecondLance(this.tourCourant) != 0) {
                    this.joueurCourant = 0;
                    this.tourCourant++;
                    for (let i = 0; i < this.Users.length; i++) {
                        this.Users[i].tourCourant = this.tourCourant;
                    }
                }
            }
        } else if (this.tourCourant < 13) {
            if (this.joueurCourant < this.Users.length - 1) {
                let usr = this.Users[this.joueurCourant];
                if (this.blackList.includes(usr.getNom())) {
                    this.joueurCourant++;
                } else {
                    switch (this.tourCourant) {
                        case 11:
                            if (!usr.score[10].isStrike() || usr.score[10].isSpare()) {
                                this.blackList.push(usr.getNom());
                                this.joueurCourant++;
                            }
                            break;
                        case 12:
                            if (!usr.score[11].isStrike()) {
                                this.blackList.push(usr.getNom());
                                this.joueurCourant++;
                            }
                            break;
                    }
                }
            } else {
                this.joueurCourant = 0;
                this.tourCourant++;
                for (let i = 0; i < this.Users.length; i++) {
                    this.Users[i].tourCourant = this.tourCourant;
                }
            }
        } else {
            return -1;
        }
    }
}