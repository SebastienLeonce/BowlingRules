import ObjUser from './User';

const tourPasBonus = 10;
const strike = 10;

export default class Game {
    constructor () {
        this.Users         = [];
        this.tourCourant   = 1;
        this.joueurCourant = 0;
        this.blackList     = [];
        this.bonusList     = [];
        this.bonusCourant  = 0;
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
        // Gestion des tours des joueurs pour les tours non bonus
        if (this.tourCourant < tourPasBonus + 1) {
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
            // Gestion des tours des joueurs pour le tour 11
            if (this.tourCourant == tourPasBonus + 1){
                for(let i = 0; i < this.Users.length; i++){

                    if (this.Users[i].score[tourPasBonus - 1].premierLance == strike || (this.Users[i].score[tourPasBonus - 1].premierLance != strike && this.Users[i].score[tourPasBonus - 1].premierLance + this.Users[i].score[tourPasBonus - 1].secondLance == strike)){
                        this.bonusList.push(i)
                    }
                    else{
                        this.blackList.push(i);
                    }
                }

                if (this.bonusList.length !=0){
                    this.joueurCourant = this.bonusList[0];
                }
                else{
                    return -1;
                }
            }
        }
         else {
            return -1;
        }
    }

    bonusSuivant(){
        if (this.tourCourant == tourPasBonus + 1) {
            // Si le joueur ayant un bonus à fini son lancer
            if(this.Users[this.joueurCourant].tourFinis){

                if(this.bonusCourant < this.bonusList.length - 1){
                    // Si il a droit à qu'un seule lancer, on le blacklist
                    if(this.Users[this.joueurCourant].score[tourPasBonus-1].isSpare()){
                        this.blackList.push(this.joueurCourant);
                        // console.log(this.Users[this.joueurCourant].nom + " player is blacklisted")
                    }
                    // On passe au joueur suviant
                    if(this.blackList.length == this.Users.length){
                        return -1;
                    }
                    else{
                        this.bonusCourant++;
                        this.joueurCourant = this.bonusList[this.bonusCourant];
                    }
                }
                else if(this.bonusCourant == this.bonusList.length - 1){
                    // Si il a droit à qu'un seule lancer, on le blacklist
                    if(this.Users[this.joueurCourant].score[tourPasBonus - 1].isSpare()){
                        this.blackList.push(this.joueurCourant);
                        // console.log(this.Users[this.joueurCourant].nom + " player is blacklisted")
                    }
                    
                    this.tourCourant++;
                    // Si tous le monde a fini au 11ème tour, fin de partie
                    if(this.blackList.length == this.Users.length){
                        return -1;
                    }
                    else{
                        for(let j = 0; j < this.blackList.length; j++){
                            for(let i = 0; i < this.bonusList.length; i++){
                                if(this.bonusList[i] == this.blackList[j]){
                                    this.bonusList.splice(i,1)
                                }
                            }
                        }
                        this.joueurCourant = this.bonusList[0]
                        this.bonusCourant = 0;
                        for(let i = 0; i < this.bonusList.length; i++){
                            this.Users[this.bonusList[i]].tourCourant = this.tourCourant;
                        }
                    }
                }
            }
        } 
        else if(this.tourCourant == tourPasBonus + 2){

            if(this.Users[this.joueurCourant].tourFinis){
                if(this.bonusCourant < this.bonusList.length - 1){
                    this.blackList.push(this.joueurCourant);

                    // On pase au joueur suviant
                    if(this.bonusList.length == 0){
                        return -1;
                    }
                    else{
                        this.bonusCourant++;
                        this.joueurCourant = this.bonusList[this.bonusCourant];
                    }
                }
                else if(this.bonusCourant == this.bonusList.length - 1){
                    this.blackList.push(this.joueurCourant);
                    for(let i = 0; i < this.bonusList.length; i++){
                        if(this.bonusList[i] == this.joueurCourant){
                            this.bonusList.splice(i,1)
                        }
                    }

                    if(this.blackList.length == this.Users.length){
                        return -1;
                    }
                    this.tourCourant++;
                }
            }
        }
        else {
            return -1;
        }
    }
}