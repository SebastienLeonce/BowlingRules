<template>
    <div class="uk-card uk-card-default uk-padding" style="text-align: left;">
        <p>TOUR COURANT : {{$parent.$parent.gameObj.tourCourant}} {{currentPlayer().nom}}</p>
        <label class="uk-form-label" for="form-horizontal-text">Score 1er Lancé</label>
        <div class="uk-margin">
            <input id=score1 v-model="score1" class="uk-input uk-form" style="width: 30%;" type="text" placeholder="">
        </div>
        <label class="uk-form-label" for="form-horizontal-text">Score 2ème Lancé</label>
        <div class="uk-margin">
            <input id=score2 v-model="score2" class="uk-input uk-form" style="width: 30%;" type="text" placeholder="">
        </div>
        <button class="uk-button uk-button-default" v-on:click="addScore()">Ajouter Score</button>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'ScoreMaker',
    props: {
    },
    data: function(){
      return{
          playerList: this.$parent.$parent.gameObj.Users,
          i: 0,
          score1: 0,
          score2 : 0
      }
    },
    methods: {
        currentPlayer(){
            return this.playerList[this.i]
        },
        addScore(){
            console.log(this.playerList.length)
            console.table(this.playerList)
            if (parseInt(this.score1) < 0 && parseInt(this.score2) > 10){
                alert("Erreur lors de la saisi du score")
                this.score1 = 0 
                document.getElementById("score1").value = ""
                this.score2 = 0
                document.getElementById("score2").value = ""
                return false;
            }
            if(this.i < this.playerList.length){
                //TODO Vérifier le type de l'input
                this.currentPlayer().ajouterScore1(parseInt(this.score1))
                this.currentPlayer().ajouterScore2(parseInt(this.score2))
                this.i++ 
                if (this.i == this.playerList.length){
                    this.i = 0;
                    this.$parent.$parent.gameObj.tourSuivant();
                    for(let child in this.$parent.$childrens){
                         child.$forceUpdate()
                          Vue.forceUpdate()
                    }
                }
            }
        }
    }
}
</script>