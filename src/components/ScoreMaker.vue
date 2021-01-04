<template>
    <div class="uk-card uk-card-hover uk-box-shadow-small uk-padding uk-overflow-auto uk-animation-scale-up" style="text-align: left;">
        <p>SCORES<br><span style="font-size: 10pt;"> COURANT : {{$parent.$parent.gameObj.tourCourant}} | 
           JOUEUR COURANT : {{currentPlayer().nom}}</span> <br> {{error}}
        </p>
        <label v-if="score1Display === true" class="uk-form-label" for="form-horizontal-text">1er lancer</label>
        <div v-if="score1Display === true" class="uk-margin">
            <input id=score1 v-model="score1" class="uk-input uk-form" style="width: 30%;" type="text" placeholder="" autocomplete="off">
        </div>
        <label v-if="score2Display === true" class="uk-form-label" for="form-horizontal-text">2ème lancer</label>
        <div v-if="score2Display === true" class="uk-margin">
            <input id=score2 v-model="score2" class="uk-input uk-form" style="width: 30%;" type="text" placeholder="" autocomplete="off">
        </div>
        <button class="uk-button uk-button-default" v-on:click="addScore()">Ajouter Score</button>
    </div>
</template>

<script>
// import UIkit from 'uikit';
import Vue from 'vue'

export default {
    name: 'ScoreMaker',
    props: {
    },
    data: function(){
      return{
          playerList: this.$parent.$parent.gameObj.Users,
          i: 0,
          j: 0,
          score1: "",
          score2 : "",
          score2Display: this.$parent.$parent.j == 1 ? true : false, 
          score1Display: this.$parent.$parent.j == 0 ? true : false,
          error: ""
      }
    },
    methods: {
        currentPlayer(){
            // return this.playerList[this.$parent.$parent.i]
            return this.playerList[this.$parent.$parent.gameObj.joueurCourant];
        },
        currentLancer(){
            // return this.$parent.$parent.j
            return this.currentPlayer().lanceCourant;
        },
        addScore(){
            console.log(this.playerList.length)
            console.table(this.playerList)

            console.log("Current Lancer : " + this.currentLancer())
            if(this.$parent.$parent.gameObj.joueurCourant < this.playerList.length){
                if (this.currentLancer() == 1){
                    try {
                        if(this.score1 == 10){
                            this.currentPlayer().ajouterScore1(parseInt(this.score1))
                            this.$parent.$parent.gameObj.joueurSuivant();
                            // this.currentPlayer().ajouterScore2(parseInt(0));
                            // this.$parent.$parent.gameObj.joueurSuivant();
                            this.score2Display = false
                            this.score1Display = true
                            this.error = "Strike"
                            this.score2 = ""
                            this.score1 = ""

                            if (this.$parent.$parent.gameObj.joueurCourant == this.playerList.length){
                                for(let child in this.$parent.$childrens){
                                    child.$forceUpdate()
                                    Vue.forceUpdate()
                                }
                            }
                        }
                        else{
                            this.currentPlayer().ajouterScore1(parseInt(this.score1))
                            this.$parent.$parent.gameObj.joueurSuivant();
                            this.score2Display = true
                            this.score1Display = false
                            this.error = ""
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
                        this.$parent.$parent.gameObj.joueurSuivant();
                        this.score2Display = false
                        this.score1Display = true
                        this.error = ""
                        this.score2 = ""
                        this.score1 = ""
                    } catch (e) {
                        this.error = e
                    }   

                    if (this.$parent.$parent.gameObj.joueurCourant == this.playerList.length){
                        for(let child in this.$parent.$childrens){
                            child.$forceUpdate()
                            Vue.forceUpdate()
                        }
                    }
                }
                 
                
            }
        }
    }
}
</script>