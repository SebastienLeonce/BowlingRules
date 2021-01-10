<template>
  <div class="hello uk-card uk-card-default uk-animation-kenburns uk-padding-large">
    <p class="hello-title uk-heading-medium uk-text-center uk-animation-shake uk-text-light">BOWLING</p>
    <div class="hello-button uk-margin-large" >
      <router-link to="/game" class="uk-light uk-button uk-button-default uk-animation-shake" style="color: black;">JOUER</router-link>
      <p class="uk-dark" style="font-size: 8pt;" uk-tooltip="title: @claireBauchu<br> @alexisdacosta<br> @zpaul91<br>@SebastienLeonce; pos: bottom">Qualité Logicielle<br>APP4 Informatique<br>Polytech Paris-Saclay ©</p>
    </div>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data: function(){
    return{

    }
  }, 
  methods: {
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
.hello{
  position: absolute;
  height: 70%;
  width: 40%;
  top: 15%;
  left: 30%;
  /* background-color: rgb(235, 235, 235) */
  /* border: 1pt solid; */
}
.hello-title{
  position: absolute;
  left: 15%;
  top: 20%;
  font-size: 100pt;
}
.hello-button{
  position: absolute;
  left: 24.9%;
  top: 30%;
  font-size: 80pt;
}
.picture{
  margin: 0%;
  height: 100%;
  width: 100%;
}
</style>
