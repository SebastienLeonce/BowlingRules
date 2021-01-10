import ObjUser from './User';

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

            if (this.tourCourant == 11){
                for(let i = 0; i < this.Users.length; i++){
                    // console.log(this.Users[i].score[9])
                    // console.log("Dernier tour réglementaire fini pour : " + this.Users[i].nom + " | id : \n"
                    //       + "   Score 1er lancer : " + this.Users[i].score[9].premierLance + "\n"
                    //       + "   Score 2ème lancer : " + this.Users[i].score[9].secondLance + "\n");

                    if (this.Users[i].score[9].premierLance == 10 || (this.Users[i].score[9].premierLance != 10 && this.Users[i].score[9].premierLance + this.Users[i].score[9].secondLance == 10)){
                        // console.log((this.Users[i].score[9].premierLance == 10 ? "Passage au 11 et 12 tour pour : " + this.Users[i].nom + " car il a fait un " + "Strike" : "Passage au 11 tour pour : " + this.Users[i].nom + " car il a fait un " + "Spaire"));
                        this.bonusList.push(i)
                    }
                    else{
                        // console.log("Fin de partie pour : " + this.Users[i].nom);
                        this.blackList.push(i);
                    }
                }

                if (this.bonusList.length !=0){
                    // console.log("11 ème tour sauf pour les blacklister")
                    // console.log("Blacklist : ")
                    // console.table(this.blackList)
                    // console.log("BonusList : ")
                    // console.table(this.bonusList)
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
        if (this.tourCourant == 11) {
            // Si le joueur ayant un bonus à fini son lancer
            if(this.Users[this.joueurCourant].tourFinis){

                if(this.bonusCourant < this.bonusList.length - 1){
                    // Si il a droit à qu'un seule lancer, on le blacklist
                    if(this.Users[this.joueurCourant].score[9].isSpare()){
                        this.blackList.push(this.joueurCourant);
                        // console.log(this.Users[this.joueurCourant].nom + " player is blacklisted")
                    }
                    // console.log("bonusList.lenght = " + this.bonusList.length)
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
                    if(this.Users[this.joueurCourant].score[9].isSpare()){
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
        else if(this.tourCourant == 12){

            if(this.Users[this.joueurCourant].tourFinis){
                //FIXME Cas ou le 2ème lancer bonus est différent de Strike, le score s'actualise pas avec le dernier lancer
                // if(!this.Users[this.joueurCourant].score[11].isStrike()){
                //     this.Users[this.joueurCourant].score[9].premierLance += this.Users[this.joueurCourant].score[11].premierLance;
                // }
                // console.log(this.Users[this.joueurCourant].score[11].premierLance)
                // console.table(this.Users[this.joueurCourant].score)
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