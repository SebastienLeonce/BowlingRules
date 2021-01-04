import ObjScore from './Score';

export default class User {
    constructor(nom) {
        if (typeof nom !== 'string') throw new Error("Use String Type");

        this.nom          = nom;
        this.score        = [];
        this.tourCourant  = 1;
        this.lanceCourant = 1;

        for (let i = 0; i < 13; i++) {
            this.score.push(new ObjScore())
        }
    }

    ajouterScore1(score1) {
        let n = this.tourCourant - 1;

        if (!Number.isInteger(score1) || score1 < 0) throw new Error("Use Int Type")
        if (score1 > 10) throw new Error("> 10")

        this.score[n].updatePremierLancer(score1);
        
        if (this.score[n].isStrike()) {
            this.score[n].updateSecondLancer(0);
            this.score[n + 1].setPremierLanceDouble();
            this.score[n + 1].setSecondLanceDouble();
            this.score[n + 1].coeffPremierLance++;
            this.score[n + 1].coeffSecondLance++;

            if (this.score[n].secondLanceDouble) {
                this.score[n + 1].coeffPremierLance++;
            }
            this.lanceCourant = 1;
        }

        this.lanceCourant = 2;
    }

    ajouterScore2(score2) {
        let n = this.tourCourant - 1;

        if (!Number.isInteger(score2) || score2 < 0) throw new Error("Use Int Type")
        if (this.score[n].premierLance + score2 > 10) throw new Error("> 10")

        this.score[n].updateSecondLancer(score2);

        if (this.score[n].isSpare()) {
            this.score[n + 1].coeffPremierLance++;
            this.score[n + 1].setPremierLanceDouble();
        }

        this.lanceCourant = 1;
    }

    isRelance2Available() {
        let n = this.tourCourant - 1;
        if (this.score[n].isStrike()) {
            return false;
        }
        return true;
    }

    getScoreTotal() {
        let scoreTotal = 0;
        for (let i = 0; i < this.score.length; i++) {
            scoreTotal += this.score[i].getScoreTotal();
        }
        return scoreTotal;
    }

    getScoreTour(tour) {
        let n = tour - 1;
        return this.score[n].getScoreTotal();
    }

    getScoreTourPremierLance(tour) {
        let n = tour - 1;
        return this.score[n].premierLance;
    }

    getScoreTourSecondLance(tour) {
        let n = tour - 1;
        return this.score[n].secondLance;
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
        return this.nom;
    }

    /*tourBonusAvailable() {
        if (this.score[-2].isStrike() || this.score[-2].isSpare()) {
            return true;
        } 
        return false;
    }*/
}