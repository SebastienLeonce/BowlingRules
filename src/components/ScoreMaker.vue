<template>
    <div class="uk-card uk-card-hover uk-box-shadow-small uk-padding uk-overflow-auto uk-animation-scale-up" style="text-align: left;">
        <p>SCORES<br><span style="font-size: 10pt;"> <span>COURANT : {{$parent.$parent.gameObj.tourCourant}}</span> | 
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
        <button v-if="(score2Display === true || score1Display === true)" class="uk-button uk-button-default" v-on:click="addScore()">Ajouter Score</button>
        <button v-if="score1Display === true" class="uk-button uk-button-default" v-on:click="addScore(10)" uk-toggle="target: #animation">Strike</button>
        <div class="uk-animation-fade">
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 50%; background-color: rgb(96,109,174);"></div>
            <img src="../assets/bowling-quille.gif" alt="bowling-quille" style="position: absolute; right: 10%; top: 0%; max-height: 100%; width: auto;">
        </div>
        <!-- <div v-if="strike === true" class="uk-card uk-card-default uk-animation-fade">
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 50%; background-color: rgb(241,172,20);"></div>
            <img src="../assets/bowling-strike.gif" alt="bowling-quille" style="position: absolute; right: 13%; top: 0%; max-height: 100%; width: auto;">  
        </div> -->
        <div id="animation" uk-modal>
          <div class="uk-modal-dialog uk-modal-body" style="position: absolute; height: 95%; width: 95%; top: 2.5%; left: 2.5%;"> 
            <button class="uk-modal-close-outside" type="button" uk-close></button>
            <div style="position: absolute; top:0%; right: 0%; height: 100%; width: 100%; background-color: rgb(241,172,20);"></div>
            <img src="../assets/bowling-strike.gif" alt="bowling-quille" style="position: absolute; right: 20%; height: 95%; width: auto;">  
          </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ScoreMaker',
    props: {
    },
    data: function(){
      return{
          playerList: this.$parent.$parent.gameObj.Users,
          score1: "",
          score2 : "",
          score2Display: this.$parent.$parent.j == 1 ? true : false, 
          score1Display: this.$parent.$parent.j == 0 ? true : false,
          error: "",
          strike: false
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
                    alert("Fin de partie")
                    this.score2Display = false
                    this.score1Display = false
                    this.error = "Fin de partie"
                }
                else{
                    this.score2Display = false
                    this.score1Display = true
                    this.error = "Strike"
                    this.score2 = ""
                    this.score1 = ""
                    this.$parent.strike = true
                    setTimeout(this.closeStrike, 2000)
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

                        if(this.score1 == 10){
                            this.score2Display = false
                            this.score1Display = true
                            this.error = "Strike"
                            this.score2 = ""
                            this.score1 = ""
                        }
                        else{
                            this.score2Display = true
                            this.score1Display = false
                            this.error = ""
                            this.score2 = ""
                            this.score1 = ""
                        }

                        if (res == -1 || this.$parent.$parent.gameObj.tourCourant >= 13){
                            alert("Fin de partie")
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
                        
                        this.score2Display = false
                        this.score1Display = true
                        this.error = ""
                        this.score2 = ""
                        this.score1 = ""

                        if (res == -1 || this.$parent.$parent.gameObj.tourCourant >= 13){
                            alert("Fin de partie")
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