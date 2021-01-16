<template>
    <div v-bind:class="{'scoreMaker-dark': $parent.isDark}" class="scoreMaker uk-card uk-card-default uk-box-shadow-small uk-padding uk-overflow-auto uk-animation-slide-bottom" style="text-align: left;">
        <p>SCORES<br><span v-if="(score2Display === true || score1Display === true)" style="font-size: 10pt;"> <span>COURANT : {{$parent.$parent.gameObj.tourCourant}}</span> | 
           JOUEUR COURANT : {{currentPlayer().nom}}</span> <br> {{error}}
        </p>

        <div class="uk-animation-fade none">
            <div class="back3" style="position: absolute; top:0%; right: 0%; height: 100%; width: 100%; background-color: rgb(93,108,180);"></div>
            <img src="../assets/bowling-quille.gif" alt="bowling-quille" style="position: absolute; right: 10%; top: 0%; max-height: 100%; width: auto;">
        </div>

        <label v-if="score1Display === true" class="uk-form-label" for="form-horizontal-text" v-bind:class="{'text-white': $parent.isDark}">1er lancer</label>
        <div v-if="score1Display === true" class="uk-margin" v-bind:class="{'text-white': $parent.isDark}">
            <div class="uk-button-group" v-bind:class="{'text-white': $parent.isDark}">
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 0" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 0; scoreSelected = true">0</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 0" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 0; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">0</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 1" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 1; scoreSelected = true">1</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 1" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 1; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">1</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 2" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 2; scoreSelected = true">2</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 2" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 2; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">2</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 3" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 3; scoreSelected = true">3</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 3" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 3; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">3</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 4" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 4; scoreSelected = true">4</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 4" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 4; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">4</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 5" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 5; scoreSelected = true">5</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 5" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 5; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">5</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 6" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 6; scoreSelected = true">6</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 6" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 6; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">6</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 7" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 7; scoreSelected = true">7</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 7" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 7; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">7</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 8" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 8; scoreSelected = true">8</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 8" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 8; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">8</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 != 9" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 9; scoreSelected = true">9</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score1 == 9" class="uk-button uk-button-default uk-padding-small" v-on:click="score1 = 9; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">9</button>
                
                <button v-if="score1 != 10" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score1 = 10; scoreSelected = true">Strike</button>
                <button v-if="score1 == 10" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score1 = 10; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Strike</button>

                <button class="uk-button uk-button-success uk-padding-small" style="color: red;">Score : {{score1}}</button>
            </div>
        </div>
        <label v-if="score2Display === true" class="uk-form-label" for="form-horizontal-text" v-bind:class="{'text-white': $parent.isDark}">2ème lancer</label>
        <div v-if="score2Display === true" class="uk-margin" v-bind:class="{'text-white': $parent.isDark}">
            <!-- <input id=score2 v-model="score2" class="uk-input uk-form" style="width: 30%;" type="text" placeholder="" autocomplete="off"> -->
            <div class="uk-button-group" v-bind:class="{'text-white': $parent.isDark}">
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 0 && 10 - parseInt(value) > 0" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 0; scoreSelected = true">0</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 0 && 10 - parseInt(value) > 0" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 0; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">0</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 1 && 10 - parseInt(value) > 1" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 1; scoreSelected = true">1</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 1 &&10 - parseInt(value) > 1" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 1; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">1</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 2 && 10 - parseInt(value) > 2" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 2; scoreSelected = true">2</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 2 && 10 - parseInt(value) > 2" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 2; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">2</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 3 && 10 - parseInt(value) > 3" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 3; scoreSelected = true">3</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 3 && 10 - parseInt(value) > 3" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 3; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">3</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 4 && 10 - parseInt(value) > 4" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 4; scoreSelected = true">4</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 4 && 10 - parseInt(value) > 4" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 4; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">4</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 5 && 10 - parseInt(value) > 5" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 5; scoreSelected = true">5</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 5 && 10 - parseInt(value) > 5" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 5; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">5</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 6 && 10 - parseInt(value) > 6" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 6; scoreSelected = true">6</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 6 && 10 - parseInt(value) > 6" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 6; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">6</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 7 && 10 - parseInt(value) > 7" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 7; scoreSelected = true">7</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 7 && 10 - parseInt(value) > 7" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 7; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">7</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 8 && 10 - parseInt(value) > 8" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 8; scoreSelected = true">8</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 8 &&10 - parseInt(value) > 8" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 8; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">8</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 9 && 10 - parseInt(value) > 9" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 9; scoreSelected = true">9</button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 9 && 10 - parseInt(value) > 9" class="uk-button uk-button-default uk-padding-small" v-on:click="score2 = 9; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">9</button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 10 && 10 - parseInt(value) > 10" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 10; scoreSelected = true">Spare <span style="font-size: 7pt;">10</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 10 && 10 - parseInt(value) > 10" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 10; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">10</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 0 && 10 - parseInt(value) == 0" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 0; scoreSelected = true">Spare <span style="font-size: 7pt;">0</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 0 && 10 - parseInt(value) == 0" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 0; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">0</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 1 && 10 - parseInt(value) == 1" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 1; scoreSelected = true">Spare <span style="font-size: 7pt;">1</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 1 && 10 - parseInt(value) == 1" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 1; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">1</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 2 && 10 - parseInt(value) == 2" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 2; scoreSelected = true">Spare <span style="font-size: 7pt;">2</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 2 && 10 - parseInt(value) == 2" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 2; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">2</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 3 && 10 - parseInt(value) == 3" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 3; scoreSelected = true">Spare <span style="font-size: 7pt;">3</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 3 && 10 - parseInt(value) == 3" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 3; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">3</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 4 && 10 - parseInt(value) == 4" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 4; scoreSelected = true">Spare <span style="font-size: 7pt;">4</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 4 && 10 - parseInt(value) == 4" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 4; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">4</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 5 && 10 - parseInt(value) == 5" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 5; scoreSelected = true">Spare <span style="font-size: 7pt;">5</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 5 && 10 - parseInt(value) == 5" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 5; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">5</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 6 && 10 - parseInt(value) == 6" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 6; scoreSelected = true">Spare <span style="font-size: 7pt;">6</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 6 && 10 - parseInt(value) == 6" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 6; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">6</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 7 && 10 - parseInt(value) == 7" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 7; scoreSelected = true">Spare <span style="font-size: 7pt;">7</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 7 && 10 - parseInt(value) == 7" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 7; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">7</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 8 && 10 - parseInt(value) == 8" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 8; scoreSelected = true">Spare <span style="font-size: 7pt;">8</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 8 && 10 - parseInt(value) == 8" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 8; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">8</span></button>

                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 != 9 && 10 - parseInt(value) == 9" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 9; scoreSelected = true">Spare <span style="font-size: 7pt;">9</span></button>
                <button v-bind:class="{'text-white': $parent.isDark}" v-if="score2 == 9 && 10 - parseInt(value) == 9" class="uk-button uk-button-secondary uk-padding-small" v-on:click="score2 = 9; scoreSelected = true" style="background-color: rgb(196, 79, 79, 0.5);">Spare <span style="font-size: 7pt;">9</span></button>
                
                <button class="uk-button uk-button-success uk-padding-small" style="color: red;">Score : {{score2}}</button>
            </div>
        </div>
        <button v-bind:class="{'text-white': $parent.isDark}" v-if="(score2Display === true || score1Display === true)" class="uk-button uk-button-default" v-on:click="addScore()">Ajouter Score</button>
        <!-- <button v-if="score1Display === true" class="uk-button uk-button-default" v-on:click="addScore(10)">Strike</button> -->
        <div v-if="$parent.strike === true" class="uk-card uk-card-default uk-animation-fade">
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 50%; background-color: rgb(241,172,20);"></div>
            <img src="../assets/bowling-strike.gif" alt="bowling-quille" class="uk-position-center" style="position: absolute; right: 13%; top: 0%; max-height: 100%; width: auto;">  
        </div>
        <div id="animation" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-animation-scale-up" style="position: absolute; height: 95%; width: 95%; top: 2.5%; left: 2.5%;"> 
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 100%; background-color: rgb(241,172,20);"></div>
            <img class="uk-position-center" src="../assets/bowling-strike.gif" alt="bowling-quille" style="position: absolute; right: 20%; height: 95%; width: auto;">  
          </div>
        </div>
        <div v-bind:class="{'text-white': $parent.isDark}" v-if="(score2Display === false && score1Display === false)">Fin de partie</div>
        <div v-bind:class="{'text-white': $parent.isDark}" v-if="getWinner() != -1">
            <div v-for="winner in getWinner()" v-bind:key="winner.nom">
                <div>{{winner.nom}} gagne avec un score de {{winner.score}} points</div>
            </div>
            <button class="uk-button uk-button-default uk-animation-shake" v-bind:class="{'text-white': $parent.isDark}" v-on:click="reloadPage()">RE-JOUER</button>
        </div>
    </div>
</template>

<script>
import UIKit from 'uikit';

export default {
    name: 'ScoreMaker',
    data: function(){
      return{
          playerList: this.$parent.$parent.gameObj.Users,               /** @type ArrayList<User>   @description Liste des joueurs */
          score1: 0,                                                    /** @type Int               @description Score lancé 1 */
          score2 : 0,                                                   /** @type Int               @description Score lancé 2 */
          score2Display: this.$parent.$parent.j == 1 ? true : false,    /** @type Boolean           @description Indique si l'affichage du lancé 1 doit être effectué  */
          score1Display: this.$parent.$parent.j == 0 ? true : false,    /** @type Boolean           @description Indique si l'affichage du lancé 2 doit être effectué */
          error: "",                                                    /** @type String            @description Erreurs */
          strike: false,                                                /** @type Boolean           @description Indique si un strike a été réalisé */
          value: 0,                                                     /** @type Int               @description Score d'un bouton */
          scoreSelected: false                                          /** @type Boolean           @description Indique si un bouton de score à été sélectionné */
      }
    },
    methods: {
        /**
         * @method currentPlayer()
         * @param none
         * @returns le joueur courant 
         * @description Renvoie le joueur courant
         */
        currentPlayer(){
            return this.playerList[this.$parent.$parent.gameObj.joueurCourant];
        },
        /**
         * @method currentLancer()
         * @param none
         * @returns le lancer courant du joueur courant
         * @description Renvoie le lancer courant d'un joueur 
         */
        currentLancer(){
            return this.currentPlayer().lanceCourant;
        },
        /**
         * @method closeStrike()
         * @param none
         * @returns none
         * @description Ferme l'animation du Strike
         */
        closeStrike(){
            this.$parent.strike = false; 
            this.error = ""
            var modal = UIKit.modal('#animation');
            modal.hide();
        },
        /**
         * @method reloadPage()
         * @param none
         * @returns none
         * @description Recharge la page
         */
        reloadPage(){
            window.location.reload()
        },
        /**
         * @method getWinner()
         * @param none
         * @returns winner, le gagnant de la partie, -1 si la partie n'est pas fini 
         * @description Renvoie le gagnant d'une partie
         */
        getWinner(){
            let winner = [{nom: "", score: 0}]
            if(this.score2Display === false && this.score1Display === false){
                for(let i = 0; i < this.playerList.length; i++){
                    if(this.playerList[i].getScoreTotal() > winner[0].score){
                        winner = [];
                        winner.push({nom: this.playerList[i].nom, score: this.playerList[i].getScoreTotal()})
                    }
                    else if (this.playerList[i].getScoreTotal() == winner[0].score){
                        winner.push({nom: this.playerList[i].nom, score: this.playerList[i].getScoreTotal()})
                    }   
                }
                return winner
            }else{
                return -1
            }
            
        },
        /**
         * @method addScore()
         * @param score, le score d'un bouton à ajouter 
         * @returns none
         * @description Ajoute le score d'un lancer d'un joueur
         */
        addScore(score){
            this.scoreSelected = false
            console.log("Score Added by " + this.currentPlayer().nom + " at the " + this.$parent.$parent.gameObj.tourCourant + " tour for his " +  this.currentLancer())

            if(this.currentLancer() == 1 && score == 10){
                try {
                this.currentPlayer().ajouterScore1(parseInt(score))
                let res = this.$parent.$parent.gameObj.joueurSuivant();
                if (res == -1 || this.$parent.$parent.gameObj.tourCourant >= 13){
                    UIKit.notification({message : "FIN DE PARTIE", status: 'success', timeout: 1000});
                    this.score2Display = false
                    this.score1Display = false
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
                    setTimeout(function(){UIKit.notification({message : "Joueur Suivant", timeout: 1000})}, 10000);
                }
                } catch (e) {
                    this.error = e
                }
                
            }
            else if(this.$parent.$parent.gameObj.joueurCourant < this.playerList.length){
                if (this.currentLancer() == 1){
                    try {
                        this.currentPlayer().ajouterScore1(parseInt(this.score1))
                        let res = 0;

                        if (this.$parent.$parent.gameObj.tourCourant >= 11){
                            res = this.$parent.$parent.gameObj.bonusSuivant();
                            this.score2Display = false
                            this.score1Display = true
                            if(this.score1 == 10){
                                this.$parent.strike = true
                                var modal3 = UIKit.modal('#animation');
                                modal3.show();
                                var audio3 = new Audio(require('../assets/strikemp4_Zfp3iNsE.mp3'));
                                audio3.play();
                                setTimeout(this.closeStrike, 5000);
                                setTimeout(function(){UIKit.notification({message : "Joueur Suivant" , timeout: 1000})}, 10000);
                            }
                            this.score2 = 0
                            this.score1 = 0
                        }
                        else if(this.score1 == 10){
                            res = this.$parent.$parent.gameObj.joueurSuivant();
                            this.score2Display = false
                            this.score1Display = true
                            this.score2 = 0
                            this.score1 = 0
                            this.$parent.strike = true
                            var modal2 = UIKit.modal('#animation');
                            modal2.show();
                            var audio2 = new Audio(require('../assets/strikemp4_Zfp3iNsE.mp3'));
                            audio2.play();
                            setTimeout(this.closeStrike, 5000);
                            setTimeout(function(){UIKit.notification({message : "Joueur Suivant" , timeout: 1000})}, 10000);
                        }
                        else{
                            res = this.$parent.$parent.gameObj.joueurSuivant();
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
<style scoped>
.scoreMaker{
    background-color: rgb(255,255,255,0.95);
}
.scoreMaker-dark{
    background-color: rgb(51,51,51,0.95);
    color: white;
}
.text-white{
    color: white;
}
.text-dark{
    color: black;
}
.back3{
    z-index: -10;
    clip-path: polygon(100% 0%, 45% 0%, 28% 100%, 100% 100%);
}

@media screen and (max-width: 800px) {
    .back3{
        display: none;
    }
    .none{
    display: none;
    }
}
</style>