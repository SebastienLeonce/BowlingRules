import ObjScore from './Game';

export default class User {
    constructor(nom) {
        this.nom         = nom;
        this.score       = [];
        this.tourCourant = 1;

        for (let i = 0; i < 11; i++) {
            this.score.push(new ObjScore())
        }
    }

    ajouterScore1(score1) {
        let n = this.tourCourant - 1;

        this.score[n].updatePremierLancer(score1);
        
        if (this.score[n].isStrike()) {
            this.score[n].updateSecondLancer(0);
            this.score[n + 1].setPremierLanceDouble();
            this.score[n + 1].setSecondLanceDouble();
        }
    }

    ajouterScore2(score2) {
        let n = this.tourCourant - 1;

        this.score[n].updateSecondLancer(score2);

        if (this.score[n].isSpare()) {
            this.score[n + 1].setPremierLanceDouble();
        }
    }

    isRelance2Available() {
        let n = this.tourCourant - 1;
        if (this.score[n].isStrike()) {
            return false;
        }
        return true;
    }

    getScoreTotal() {
        let n = this.tourCourant - 1;
        return this.score[n].getScoreTotal();
    }

    getScorePremierLance() {
        let n = this.tourCourant - 1;
        return this.score[n].getScore1();
    }

    getScoreSecondLance() {
        let n = this.tourCourant - 1;
        return this.score[n].getScore2();
    }

    getNom() {
        return this.getNom;
    }

    /*tourBonusAvailable() {
        if (this.score[-2].isStrike() || this.score[-2].isSpare()) {
            return true;
        } 
        return false;
    }*/
}