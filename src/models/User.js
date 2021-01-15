import ObjScore from './Score';

const strike = 10;
const MinQuille = 0
const tourPasBonus = 10;
const tourMax = 13;
const premierTour = 0


export default class User {
    constructor(nom) {
        if (typeof nom !== 'string') throw new Error("Use String Type");

        this.nom          = nom;
        this.score        = [];
        this.tourCourant  = 1;
        this.lanceCourant = 1;
        this.tourFinis     = false;

        for (let i = 0; i <= tourMax; i++) {
            this.score.push(new ObjScore())
        }
    }
    // Gestion du score pour le lancé 1
    ajouterScore1(score1) {
        let n = this.tourCourant - 1;
        this.tourFinis = false;
        // Vérification du score
        if (!Number.isInteger(score1) || score1 < MinQuille) throw new Error("Use Int Type")
        if (score1 > strike) throw new Error("> 10")

        // Ajout des scores pour les tours normaux
        if (n < tourPasBonus) {
            this.score[n].updatePremierLancer(score1);
        // Regarde si on fait un strike aux tours bonus
        } else if (score1 == strike) {
            this.score[n].strikeBonus = true;
        }

        // Si le coup d'avant est un strike ou un spare on ajoute le score aussi à celui du tour d'avant
        if (n > premierTour && (this.score[n-1].isSpare() || this.score[n-1].isStrike())) {
            this.score[n-1].updatePremierLancer(this.score[n-1].getScorePremierLance() + score1);
        }

        // Si le coup d'avant est un strike ou un spare ou alors si le coup d'il y a deux tour est un strike on rajoute aussi le score
        if (n > premierTour + 1 && this.score[n-2].isStrike() && (this.score[n-1].isStrike() || this.score[n].strikeBonus)) {
             this.score[n-2].updatePremierLancer(this.score[n-2].getScorePremierLance() + score1);
        } // Gestion des scores pour les strikes bonus
        else if (n == tourPasBonus + 1 && this.score[n-2].isStrike()){
            this.score[n-2].updatePremierLancer(this.score[n-2].getScorePremierLance() + score1);
        }

        // Si c'est un strike on dit que le tour est finis
        if (this.score[n].isStrike()) {         
            this.lanceCourant = 1;
            this.tourFinis = true;

        } // Dans les "tours bonus" il y a un seul tour
        else if (n > tourPasBonus-1){
            this.lanceCourant = 1;
            this.tourFinis = true;
        } // Sinon on a un deuxième lancé
        else {
            this.lanceCourant = 2;
        }
    }
    // Gestion du score pour le lancé 2
    ajouterScore2(score2) {
        this.tourFinis = false;
        let n = this.tourCourant - 1;

        // Vérification du score
        if (!Number.isInteger(score2) || score2 < MinQuille) throw new Error("Use Int Type")
        if (this.score[n].premierLance + score2 > strike) throw new Error("> 10")
        // Ajout des scores pour les tours normaux
        if (n < tourPasBonus) {
            this.score[n].updateSecondLancer(score2);
        }
        // Si le coup d'avant est un strike on ajoute le score aussi à celui du tour d'avant
        if (n > premierTour && this.score[n-1].isStrike()) {
            this.score[n-1].updatePremierLancer(this.score[n-1].getScorePremierLance() + score2);
        }

        this.lanceCourant = 1;
        this.tourFinis = true;
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
}