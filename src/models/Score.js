const strike = 10;
const MinQuille = 0

export default class Score {
    constructor () {
        this.premierLance = 0;
        this.secondLance  = 0;
        this.premierLanceDouble = false;
        this.secondLanceDouble  = false;
        this.toAugmentFirst = [];
        this.toAugmentSecond = [];
        this.strikeBonus = false;

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
        if (this.secondLance == MinQuille && this.premierLance != MinQuille && (this.premierLance%strike == 0 || this.premierLance > strike)) {
            return true;
        }
        return false;
    } 

    isSpare() {
        if (!this.isStrike() && this.premierLance + this.secondLance >= 10 && this.secondLance != MinQuille) {
            return true;
        }
        return false;
    }

    getScoreTotal() {
        return this.premierLance + this.secondLance
    }

    getScorePremierLance() {
        return this.premierLance;
    }

    getScoreSecondLance() {
        return this.secondLance;
    }

    setPremierLanceDouble() {
        this.premierLanceDouble = true;
    }

    setSecondLanceDouble() {
        this.secondLanceDouble = true;
    }
}