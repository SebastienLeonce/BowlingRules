<template>
  <div class="playerForm uk-card uk-card-default uk-position-center uk-padding">
    <div id="app">
      <p class="uk-heading-medium">BOWLING</p>
      <br>
         <p v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
            <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
        </p>
        <div v-if="playerList.length">
            <div v-for="player in playerList" v-bind:key="player">
                <p class="uk-inline" style="text-align: left; width: 70%;">{{ player }}</p>
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
                    <span class="uk-search-input uk-heading-small" v-on:click="checkForm()">+</span>
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
                return true;
            }

            this.errors = [];

            if (!this.name) {
              this.errors.push('Name required.');
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
            let gm = new Game();
            for(let i = 0; i < this.playerList.length; i++){
              gm.addPlayer(this.playerList[i])
            }
            this.$parent.$parent.gameObj = gm; 
            this.$parent.$parent.formDoned = true;
            console.table(gm.Users)
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
  position: absolute;
  height: 70%;
  width: 40%;

}
</style>
