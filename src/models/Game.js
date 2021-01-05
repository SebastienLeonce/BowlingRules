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
        } else if (this.tourCourant < 13) {
            let flag = false;

            for (let i = this.joueurCourant+1; i < this.Users.length; i++) {
                if (this.blackList.includes(i)) continue;
                let usr = this.Users[i];
                switch (this.tourCourant) {
                    case 11:
                        if (usr.score[9].isStrike() || usr.score[9].isSpare()) {
                            this.joueurCourant = i;
                            this.blackList.push(i);
                            flag = true;
                        }
                        break;
                    case 12:
                        if (usr.score[9].isStrike() && usr.score[10].isStrike()) {
                            this.joueurCourant = i;
                            this.blackList.push(i);
                            flag = true;
                        }
                        break;
                }
                if (flag) break;
            }

            if (!flag) {
                for (let i = 0; i < this.joueurCourant; i++) {
                    if (this.blackList.includes(i)) continue;
                    let usr = this.Users[i];
                    switch (this.tourCourant) {
                        case 11:
                            if (usr.score[9].isStrike() || usr.score[9].isSpare()) {
                                this.joueurCourant = i;
                                this.blackList.push(i);
                                flag = true;
                            }
                            break;
                        case 12:
                            if (usr.score[9].isStrike() && usr.score[10].isStrike()) {
                                this.joueurCourant = i;
                                this.blackList.push(i);
                                flag = true;
                            }
                            break;
                    }
                    if (flag) break;
                }
            }

            if (!flag) {
                this.joueurCourant = 0;
                this.tourCourant++;
                this.blackList = [];
                for (let i = 0; i < this.Users.length; i++) {
                    this.Users[i].tourCourant = this.tourCourant;
                }
            }




           /*if (this.joueurCourant < this.Users.length - 1) {
                let usr = this.Users[this.joueurCourant];
                if (this.blackList.includes(usr.getNom())) {
                    this.joueurCourant++;
                } else {
                    switch (this.tourCourant) {
                        case 11:
                            if (!usr.score[10].isStrike() || usr.score[10].isSpare()) {
                                this.blackList.push(usr.getNom());
                                
                            }
                            this.joueurCourant++;
                            break;
                        case 12:
                            if (!usr.score[11].isStrike()) {
                                this.blackList.push(usr.getNom());
                                
                            }
                            this.joueurCourant++;
                            break;
                    }
                }
            } else {
                this.joueurCourant = 0;
                this.tourCourant++;
                for (let i = 0; i < this.Users.length; i++) {
                    this.Users[i].tourCourant = this.tourCourant;
                }
            }*/
        } else {
            return -1;
        }
    }
}