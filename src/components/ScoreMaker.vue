<template>
    <div class="uk-card uk-card-hover uk-box-shadow-small uk-padding uk-overflow-auto uk-animation-scale-up" style="text-align: left;">
        <p>SCORES<br><span style="font-size: 10pt;"> <span>COURANT : {{$parent.$parent.gameObj.tourCourant}}</span> | 
           JOUEUR COURANT : {{currentPlayer().nom}}</span> <br> {{error}}
        </p>
        <label v-if="score1Display === true" class="uk-form-label" for="form-horizontal-text">1er lancer</label>
        <div v-if="score1Display === true" class="uk-margin">
            <!-- <input id=score1 v-model="score1" class="uk-input uk-form" style="width: 30%;" type="text" placeholder="" autocomplete="off"> -->
            <div class="uk-button-group">
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 0">0</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 1">1</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 2">2</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 3">3</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 4">4</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 5">5</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 6">6</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 7">7</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 8">8</button>
                <button class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 9">9</button>
                <button class="uk-button uk-button-secondary uk-padding-small" v-on:click="addScore(10)">Strike</button>
                <button class="uk-button uk-button-success uk-padding-small">Score : {{score1}}</button>
            </div>
        </div>
        <label v-if="score2Display === true" class="uk-form-label" for="form-horizontal-text">2ème lancer</label>
        <div v-if="score2Display === true" class="uk-margin">
            <!-- <input id=score2 v-model="score2" class="uk-input uk-form" style="width: 30%;" type="text" placeholder="" autocomplete="off"> -->
            <div class="uk-button-group">
                <button v-if="10 - parseInt(value) > 0" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 0">0</button>
                <button v-if="10 - parseInt(value) > 1" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 1">1</button>
                <button v-if="10 - parseInt(value) > 2" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 2">2</button>
                <button v-if="10 - parseInt(value) > 3" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 3">3</button>
                <button v-if="10 - parseInt(value) > 4" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 4">4</button>
                <button v-if="10 - parseInt(value) > 5" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 5">5</button>
                <button v-if="10 - parseInt(value) > 6" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 6">6</button>
                <button v-if="10 - parseInt(value) > 7" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 7">7</button>
                <button v-if="10 - parseInt(value) > 8" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 8">8</button>
                <button v-if="10 - parseInt(value) > 9" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 9">9</button>
                <button v-if="10 - parseInt(value) > 10" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 10">Spare <span style="font-size: 7pt;">10</span></button>

                <button v-if="10 - parseInt(value) == 0" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 0">Spare <span style="font-size: 7pt;">0</span></button>
                <button v-if="10 - parseInt(value) == 1" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 1">Spare <span style="font-size: 7pt;">1</span></button>
                <button v-if="10 - parseInt(value) == 2" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 2">Spare <span style="font-size: 7pt;">2</span></button>
                <button v-if="10 - parseInt(value) == 3" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 3">Spare <span style="font-size: 7pt;">3</span></button>
                <button v-if="10 - parseInt(value) == 4" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 4">Spare <span style="font-size: 7pt;">4</span></button>
                <button v-if="10 - parseInt(value) == 5" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 5">Spare <span style="font-size: 7pt;">5</span></button>
                <button v-if="10 - parseInt(value) == 6" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 6">Spare <span style="font-size: 7pt;">6</span></button>
                <button v-if="10 - parseInt(value) == 7" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 7">Spare <span style="font-size: 7pt;">7</span></button>
                <button v-if="10 - parseInt(value) == 8" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 8">Spare <span style="font-size: 7pt;">8</span></button>
                <button v-if="10 - parseInt(value) == 9" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 9">Spare <span style="font-size: 7pt;">9</span></button>
                <button class="uk-button uk-button-success uk-padding-small">Score : {{score2}}</button>
            </div>
        </div>
        <button v-if="(score2Display === true || score1Display === true)" class="uk-button uk-button-default" v-on:click="addScore()">Ajouter Score</button>
        <!-- <button v-if="score1Display === true" class="uk-button uk-button-default" v-on:click="addScore(10)">Strike</button> -->
        <div class="uk-animation-fade">
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 50%; background-color: rgb(93,108,180);"></div>
            <img src="../assets/bowling-quille.gif" alt="bowling-quille" style="position: absolute; right: 10%; top: 0%; max-height: 100%; width: auto;">
        </div>
        <!-- <div v-if="strike === true" class="uk-card uk-card-default uk-animation-fade">
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 50%; background-color: rgb(241,172,20);"></div>
            <img src="../assets/bowling-strike.gif" alt="bowling-quille" style="position: absolute; right: 13%; top: 0%; max-height: 100%; width: auto;">  
        </div> -->
        <div id="animation" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-animation-scale-up" style="position: absolute; height: 95%; width: 95%; top: 2.5%; left: 2.5%;"> 
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 100%; background-color: rgb(241,172,20);"></div>
            <img src="../assets/bowling-strike.gif" alt="bowling-quille" style="position: absolute; right: 20%; height: 95%; width: auto;">  
          </div>
        </div>
    </div>
</template>

<script>
import UIKit from 'uikit';

export default {
    name: 'ScoreMaker',
    props: {
    },
    data: function(){
      return{
          playerList: this.$parent.$parent.gameObj.Users,
          score1: 0,
          score2 : 0,
          score2Display: this.$parent.$parent.j == 1 ? true : false, 
          score1Display: this.$parent.$parent.j == 0 ? true : false,
          error: "",
          strike: false,
          value: 0
      }
    },
    methods: {
        currentPlayer(){
            return this.playerList[this.$parent.$parent.gameObj.joueurCourant];
        },
        currentLancer(){
            return this.currentPlayer().lanceCourant;
        },
        closeStrike(){
            this.$parent.strike = false; 
            this.error = ""
            var modal = UIKit.modal('#animation');
            // modal.show();
            modal.hide();
            // this.$emit('close');
            // modal.isActive();
            //UIKit.modal.alert('UIkit alert!')
            this.$forceupdate();
            // this.strike = true;
        },
        addScore(score){
            console.log(this.playerList.length)
            console.table(this.playerList)

            if(this.currentLancer() == 1 && score == 10){
                try {
                this.currentPlayer().ajouterScore1(parseInt(score))
                let res = this.$parent.$parent.gameObj.joueurSuivant();
                if (res == -1 || this.$parent.$parent.gameObj.tourCourant >= 13){
                    UIKit.notification({message : "FIN DE PARTIE", status: 'success', timeout: 1000});
                    this.score2Display = false
                    this.score1Display = false
                    this.error = "Fin de partie"
                }
                else{
                    this.score2Display = false
                    this.score1Display = true
                    this.error = "Strike"
                    this.score2 = 0
                    this.score1 = 0
                    this.$parent.strike = true
                    var modal = UIKit.modal('#animation');
                    modal.show();
                    var audio = new Audio(require('../assets/strikemp4_Zfp3iNsE.mp3'));
                    audio.play();
                    setTimeout(this.closeStrike, 5000);
                    setTimeout(function(){UIKit.notification({message : "A toi " + this.currentPlayer().nom, timeout: 1000})}, 10000);
                }
                } catch (e) {
                    this.error = e
                }
                
            }
            else if(this.$parent.$parent.gameObj.joueurCourant < this.playerList.length){
                if (this.currentLancer() == 1){
                    try {
                        this.currentPlayer().ajouterScore1(parseInt(this.score1))
                        let res = this.$parent.$parent.gameObj.joueurSuivant();
                        UIKit.notification({message : "Encore a toi " + this.currentPlayer().nom, timeout: 1000});

                        if(this.score1 == 10){
                            this.score2Display = false
                            this.score1Display = true
                            this.error = "Strike"
                            this.score2 = 0
                            this.score1 = 0
                        }
                        else{
                            this.score2Display = true
                            this.score1Display = false
                            this.error = ""
                            this.value = this.score1
                            this.score2 = 0
                            this.score1 = 0
                        }

                        if (res == -1 || this.$parent.$parent.gameObj.tourCourant >= 13){
                            UIKit.notification({message : "FIN DE PARTIE", status: 'success', timeout: 1000});
                            this.score2Display = false
                            this.score1Display = false
                            this.error = "Fin de partie"
                        }
                    } catch (e) {
                        this.error = e
                    }
                }
                else if (this.currentLancer() == 2){   
                    this.error = ""
                    if(this.score2 > 10-this.score1){
                        this.error = "Trop de quilles touchés. Recommencez"
                    }

                    try {
                        this.currentPlayer().ajouterScore2(parseInt(this.score2))
                        let res = this.$parent.$parent.gameObj.joueurSuivant();
                        UIKit.notification({message : "A toi " + this.currentPlayer().nom, timeout: 2000});
                        
                        this.score2Display = false
                        this.score1Display = true
                        this.error = ""
                        this.score2 = 0
                        this.score1 = 0

                        if (res == -1 || this.$parent.$parent.gameObj.tourCourant >= 13){  
                            UIKit.notification({message : "FIN DE PARTIE", status: 'success', timeout: 2000});
                            this.score2Display = false
                            this.score1Display = false
                            this.error = "Fin de partie"
                        }
                    } catch (e) {
                        this.error = e
                    }   
                }
            }
        }
    }
}
</script>