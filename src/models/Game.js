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
                if (this.Users[this.joueurCourant].tourFinis) {
                    this.joueurCourant++;
                }
            } else {
                if (this.Users[this.joueurCourant].tourFinis) {
                    this.joueurCourant = 0;
                    this.tourCourant++;
                    for (let i = 0; i < this.Users.length; i++) {
                        this.Users[i].tourCourant = this.tourCourant;
                    }
                }
            }
        ////////////////////////////////////////////////
        } else if (this.tourCourant == 11) {
            while (this.joueurCourant <= this.Users.length - 1
                  && (this.blackList.includes(this.joueurCourant)
                  || !(this.Users[this.joueurCourant].score[9].isStrike() || this.Users[this.joueurCourant].score[9].isSpare()))) {
                    this.joueurCourant++;
            }

            this.blackList.push(this.joueurCourant);

            if (this.joueurCourant == this.Users.length || this.joueurCourant == this.Users.length -1) {
                this.joueurCourant = 0;
                this.tourCourant++;
                this.blackList = [];
                for (let i = 0; i < this.Users.length; i++) {
                    this.Users[i].tourCourant = this.tourCourant;
                }
            }
        } else if (this.tourCourant == 12) {
            while (this.joueurCourant <= this.Users.length - 1
                && (this.blackList.includes(this.joueurCourant)
                || !(this.Users[this.joueurCourant].score[9].isStrike()))) {
                  this.joueurCourant++;
          }

          this.blackList.push(this.joueurCourant);

            if (this.joueurCourant == this.Users.length || this.joueurCourant == this.Users.length -1) {
                this.joueurCourant = 0;
                this.tourCourant++;
                this.blackList = [];
                for (let i = 0; i < this.Users.length; i++) {
                    this.Users[i].tourCourant = this.tourCourant;
                }
            }
        }
         else {
            return -1;
        }
    }
}