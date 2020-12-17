export default class Score {
    constructor () {
        this.premierLance = 0;
        this.secondLance  = 0;
        this.premierLanceDouble = false;
        this.secondLanceDouble  = false;

        this.coeffPremierLance  = 1
        this.coeffSecondLance  = 1
    }

    updatePremierLancer (score) {
        this.premierLance = score;
    }

    updateSecondLancer (score) {
        this.secondLance = score;
    }

    isStrike() {
        if (this.premierLance == 10) {
            return true;
        }
        return false;
    } 

    isSpare() {
        if (!this.isStrike() && this.premierLance + this.secondLance == 10) {
            return true;
        }
        return false;
    }

    getScoreTotal() {
        return this.coeffPremierLance*this.premierLance + this.coeffSecondLance*this.secondLance
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
        this.secondLanceDouble = true;
    }
}