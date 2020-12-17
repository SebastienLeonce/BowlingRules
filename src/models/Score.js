import User from './User';

export default class Score {
    constructor () {
        this.premierLance = 0;
        this.secondLance  = 0;
        this.premierLanceDouble = false;
        this.secondLanceDouble  = false;
        this.tourCourant        = 1
    }

    updatePremierLancer (score) {
        this.premierLance = score;
    }

    updateSecondLancer (score) {
        this.SecondLance = score;
    }

    isStrike() {
        if (this.premierLance == 10) {
            return true;
        }
        return false;
    } 

    isSpare() {
        if (this.premierLance + this.secondLance == 10) {
            return true;
        }
        return false;
    }

    getScoreTotal() {
        let coeff1 = 1;
        if (this.premierLanceDouble) coeff1++; 
        let coeff2 = 1;
        if (this.premierLanceDouble) coeff2++; 

        return coeff1*this.premierLance + coeff2*this.secondLance
    }

    getScorePremierLance() {
        return this.premierLance * (this.premierLanceDouble == true) ? 2 : 1;
    }

    getScoreSecondLance() {
        return this.secondLance * (this.secondLanceDouble == true) ? 2 : 1;
    }

    setPremierLanceDouble() {
        this.premierLanceDouble = true;
    }

    setSecondLanceDouble() {
        this.premierLanceDouble = true;
    }

    tourSuivant() {
        this.tourCourant++;
        for (this.Users in User) {
            User.tourCourant = this.tourCourant;
        }
    }

}