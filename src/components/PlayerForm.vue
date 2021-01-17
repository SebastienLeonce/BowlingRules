<template>
  <div v-bind:class="{ 'form-dark': $parent.isDark }" class="playerForm uk-card uk-box-shadow-xlarge uk-padding uk-animation-scale-down">
    <p v-bind:class="{ 'text-white': $parent.isDark }" class="uk-heading-medium" >BOWLING</p><br>
    <div id="app" style="height: 61.24%;" class="uk-overflow-auto">
        <p v-if="errors.length">
          <strong>Please correct the following error(s):</strong>
          <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </p>
        <div v-if="playerList.length">
          <div v-for="player in playerList" v-bind:key="player" class="uk-overflow-auto">
            <p class="uk-inline uk-animation-shake" style="text-align: left; width: 70%;" v-bind:class="{ 'text-white': $parent.isDark, 'input': !$parent.isDark}">{{ player }}</p>
            <button type="button" uk-close v-on:click="supprPlayer(player)"></button>
          </div>
        </div>
        <div>
          <div class="uk-margin">
            <div class="uk-inline" style="width: 70%;">
              <input class="uk-search-input" id="name" v-model="name" type="text" name="name" autocomplete="off" placeholder="Nom....." v-on:keyup.enter="checkForm()" style="background-color: rgba(0,0,0,0);" v-bind:class="{ 'text-white': $parent.isDark, 'input': !$parent.isDark}">
              <span v-if="name == ''" v-on:click="checkForm()" uk-icon="plus-circle" v-bind:class="{ 'text-white': $parent.isDark, 'input': !$parent.isDark}"></span>
              <span v-if="name != ''" v-on:click="checkForm()" uk-icon="check" v-bind:class="{ 'text-white': $parent.isDark, 'input': !$parent.isDark}"></span>
            </div>
          </div>
        </div>
        <p><button class="uk-button uk-button-default uk-position-bottom-center" v-on:click="validForm()" style="position: absolute; bottom: 10%; background-color: rgb(93,108,180); color: white;">Valider</button></p>
    </div>
  </div>
</template>

<script>
import Game from '../models/Game'
import UIKit from 'uikit'

export default {
  name: 'PlayerForm',
  data: function(){
    return{
      playerList: this.$parent.newPlayerList,   /** @type ArrayList<User>   @description Liste des joueurs inscrit dans le formulaire */
      errors: [],                               /** @type ArrayList<String> @description Liste des erreurs rencontrés lors de l'inscription des joueurs */
      name: ""                                  /** @type String            @description Nom du joueur inscrit */
    }
  }, 
  methods: {
    /**
     * @method checkForm()
     * @param e event
     * @returns false, si la validté du nom de joueur n'est pas respecté, vrai sinon
     * @description Checker la validité d'un nom lors de l'inscription d'un joueur et l'inscrire
     */
    checkForm: function (e) {
      for(let i = 0; i < this.playerList.length; i++){
        if(this.name == this.playerList[i]){
          this.errors.push('Name already exist.');
          this.name = ""
          return false
        }
      }

      this.playerList.push(this.name)
      console.log("New player added : " + this.name)
      document.getElementById("name").value = ""

      if (this.name) {
        this.name = ""
        this.errors.pop()
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
        this.supprPlayer("")
      }

      e.preventDefault();
    },
    /**
     * @method supprPlayer()
     * @param name
     * @returns none
     * @description Supprime un joueur déja inscrit
     */
    supprPlayer: function(name){
        console.log(name + " player deleted")
        for (let i = 0; i < this.playerList.length; i++){
            if (this.playerList[i] == name){
                this.playerList.splice(i, 1); 
            }
        }
    }, 
    /**
     * @method validForm()
     * @param none
     * @returns true si la liste des joueurs est valider et la partie commencé, faux sinon
     * @description Validation de la liste des joueurs et commencement de la partie
     */
    validForm: function(){
        if(this.playerList.length == 0){
          UIKit.notification({message : "Veuillez jouez avec au moins 1 joueurs", status: 'danger', timeout: 2000});
          console.error("Veuillez jouez avec au moins 1 joueurs");
          return false;
        }
        else{
          let gm = new Game();
          for(let i = 0; i < this.playerList.length; i++){
            gm.addPlayer(this.playerList[i]);
          }
          this.$parent.$parent.gameObj = gm; 
          this.$parent.$parent.formDoned = true;
          UIKit.notification({message : "👋🏻 Bienvenue dans cette nouvelle partie", timeout: 2000});
          console.log("👋🏻 Bienvenue dans cette nouvelle partie\n  Liste des joueurs : ");
          console.table(gm.Users);
          this.$parent.currentPlayer = this.$parent.$parent.gameObj.Users[0].nom;
          return true;
        }
    }
  },
  mounted:{
    loadPlayer: function(){
      alert(this.$parent.newPlayerList.length)
      if(this.$parent.newPlayerList.length != 0){
        this.playerList = this.$parent.newPlayerList;
      }
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      }
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.playerForm{
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  height: 70%;
  width: 40%;
  top: 15%;
  left: 30%;
}
.form-dark{
  color:white;
}
.text-white{
  color:white;
}
.input{
  color: rgb(51,51,51);
}
::placeholder {
  color: white;
}
</style>
