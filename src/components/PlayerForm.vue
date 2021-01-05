<template>
  <div class="playerForm uk-card uk-card-hover uk-box-shadow-xlarge uk-padding uk-animation-scale-down">
    <p class="uk-heading-medium">BOWLING</p>
      <br>
    <div id="app" style="height: 61.24%;" class="uk-overflow-auto">
         <p v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
            <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
        </p>
        <div v-if="playerList.length">
            <div v-for="player in playerList" v-bind:key="player" class="uk-overflow-auto">
                <p class="uk-inline uk-animation-shake" style="text-align: left; width: 70%;">{{ player }}</p>
                <button type="button" uk-close v-on:click="supprPlayer(player)"></button>
            </div>
        </div>

        <div>
            <div class="uk-margin">
                <div class="uk-inline" style="width: 70%;">
                    <input class="uk-search-input"
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                    autocomplete="off"
                    placeholder="Name..."
                    >
                    <span v-on:click="checkForm()" uk-icon="plus-circle"></span>
                </div>
            </div>
        </div>

        <p>
            <button class="uk-button uk-button-default uk-position-bottom-center" v-on:click="validForm()" style="position: absolute; bottom: 10%;">Valider</button>
        </p>

    </div>
  </div>
</template>

<script>
import Game from '../models/Game'
import UIKit from 'uikit'
export default {
  name: 'PlayerForm',
  props: {
  },
  data: function(){
    return{
        playerList: [],
        errors: [],
        name: ""
    }
  }, 
  methods: {
        checkForm: function (e) {
          console.log("> In checkForm()\n   name = " + this.name)
          this.playerList.push(this.name)
          //TODO Ajouter à l'objet Game.addPlayer
          //this.$parent.gameObj.addPlayer(this.name)
          document.getElementById("name").value = ""
          
          console.table(this.playerList)
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
        supprPlayer: function(name){
            console.log("> IN supprPlayer \n    name = " + name)
            for (let i = 0; i < this.playerList.length; i++){
                if (this.playerList[i] == name){
                    this.playerList.splice(i, 1); 
                    //NOTE a tester i--
                }
            }
            console.table(this.playerList)
        }, 
        validForm: function(){
            if(this.playerList.length == 0){
              UIKit.notification({message : "Veuillez jouez avec au moins 1 joueurs", status: 'danger', timeout: 2000});
            }
            else{
              let gm = new Game();
              for(let i = 0; i < this.playerList.length; i++){
                gm.addPlayer(this.playerList[i])
              }
              this.$parent.$parent.gameObj = gm; 
              this.$parent.$parent.formDoned = true;
              UIKit.notification({message : "👋🏻 Bienvenue dans cette nouvelle partie", timeout: 2000});
              console.table(gm.Users)
            }
            
        },
        // loadData: function(){
        //   let tab = []
        //   if(this.$parent.$parent.gameObj.Users != null){
        //     for(let i = 0; i < this.$parent.$parent.gameObj.Users.length; i++){
        //       tab.push(this.$parent.$parent.gameObj.Users.name)
        //     }
        //   }
        //   return tab;
  // },
  },
  directives: {
  focus: {
    // définition de la directive
    inserted: function (el) {
      el.focus()
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
